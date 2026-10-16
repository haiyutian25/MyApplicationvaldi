import { StatefulComponent } from 'valdi_core/src/Component';
import { systemFont } from 'valdi_core/src/SystemFont';

import {
  base64UrlToBytes,
  MAX_UNCOMPRESSED_BYTES,
  parseWidgetInitialStateValue,
} from './CompressedWidgetState';
import { gunzipUtf8, gunzipUtf8WithLimit } from './DILInflater';
import { DILNodeView } from './DILRenderer';
import { DILNode, DILNodeChildren } from './DILTypes';
import { COMPRESSED_WIDGET_STATE, MODEL_DIL_V2_DOCUMENT } from './payloads';

/**
 * @ViewModel
 * @ExportModel
 */
export interface AppViewModel {
  /** Optional `model_dil_v2` document pushed from the host application as JSON text. */
  document?: string;
}

/**
 * @Context
 * @ExportModel({ios: 'SCMyApplicationDILContext', android: 'com.example.myapplication.core.valdi.MyApplicationDILContext'})
 */
export interface AppContext {
  /** Called when a `button` node inside the rendered document is tapped. */
  onDILAction?(action: string): void;
}

interface AppState {
  document: DILNode;
  status: string;
  statusIsError: boolean;
}

/**
 * Root component: renders a `model_dil_v2` document with native Valdi views and
 * demonstrates the restored compressed-widget-state path (`gzip-json-base64url-v1`)
 * going through the native gzip inflater.
 *
 * @Component
 * @ExportModel
 */
export class App extends StatefulComponent<AppViewModel, AppState, AppContext> {
  state: AppState = {
    document: MODEL_DIL_V2_DOCUMENT,
    status: '已加载示例 model_dil_v2 文档。点下面的按钮切换数据来源。',
    statusIsError: false,
  };

  onCreate(): void {
    const pushed = this.viewModel !== undefined ? this.viewModel.document : undefined;
    if (typeof pushed !== 'string' || pushed.length === 0) {
      return;
    }
    try {
      const parsed = JSON.parse(pushed) as DILNode;
      this.setState({
        document: parsed,
        status: '已渲染宿主（Kotlin）传入的 document。',
        statusIsError: false,
      });
    } catch (error) {
      this.setState({
        status: '宿主传入的 document 解析失败: ' + String(error),
        statusIsError: true,
      });
    }
  }

  onRender(): void {
    <view width="100%" height="100%" backgroundColor="#f7f8fa" flexDirection="column">
      <view
        backgroundColor="#ffffff"
        paddingLeft={16}
        paddingRight={16}
        paddingTop={16}
        paddingBottom={12}
        flexDirection="column"
      >
        <label value="Valdi · DIL 渲染" font={systemFont(20)} color="#111418" marginBottom={4} />
        <label
          value="服务端 JSON → 原生组件渲染；压缩状态走还原出的 native gzip 解压"
          font={systemFont(12)}
          color="#5b6470"
          numberOfLines={0}
          marginBottom={12}
        />
        {this.renderAction('① 渲染明文 model_dil_v2', () => this.renderPlainDocument())}
        {this.renderAction('② 渲染压缩 widget 状态（走 native gunzipUtf8）', () =>
          this.renderCompressedWidgetState(),
        )}
        {this.renderAction('③ native 冒烟测试（含 16 MiB 上限）', () => this.runNativeSmokeTest())}
        <view
          backgroundColor={this.state.statusIsError ? '#fdecec' : '#f2f4f7'}
          borderRadius={8}
          padding={10}
          marginTop={8}
          flexDirection="column"
        >
          <label
            value={this.state.status}
            font={systemFont(12)}
            color={this.state.statusIsError ? '#b3261e' : '#3c4450'}
            numberOfLines={0}
          />
        </view>
      </view>

      <scroll flexGrow={1} width="100%" paddingLeft={16} paddingRight={16} paddingTop={12}>
        <DILNodeView node={this.state.document} depth={0} />
      </scroll>
    </view>;
  }

  private renderAction(label: string, onTap: () => void): void {
    <view
      backgroundColor="#eef4ff"
      borderRadius={10}
      paddingLeft={14}
      paddingRight={14}
      paddingTop={10}
      paddingBottom={10}
      marginBottom={6}
      onTap={onTap}
    >
      <label value={label} font={systemFont(13)} color="#1b4dbe" />
    </view>;
  }

  private renderPlainDocument(): void {
    this.setState({
      document: MODEL_DIL_V2_DOCUMENT,
      status: '明文 model_dil_v2（未压缩，与线上一致）。',
      statusIsError: false,
    });
  }

  private renderCompressedWidgetState(): void {
    try {
      const decoded = parseWidgetInitialStateValue(COMPRESSED_WIDGET_STATE) as {
        state?: Record<string, unknown>;
      };
      const entries: DILNode[] = [];
      const state = decoded.state;
      if (state !== undefined && state !== null) {
        Object.keys(state).forEach(key => {
          entries.push({
            type: 'list-item',
            children: `${key} = ${JSON.stringify(state[key])}`,
          });
        });
      }
      const document: DILNode = {
        type: 'document',
        version: 'v2',
        code: 'compressed-widget-state',
        children: [
          { type: 'heading', children: '解压后的 widget 状态' },
          { type: 'paragraph', children: '下面内容来自 gzip-json-base64url-v1 载荷。' },
          { type: 'list', children: entries as DILNodeChildren },
        ],
      };
      this.setState({
        document,
        status: `压缩状态已解压：base64url ${COMPRESSED_WIDGET_STATE.__compressed.length} 字符 → native gunzipUtf8。`,
        statusIsError: false,
      });
    } catch (error) {
      this.setState({ status: '解压失败: ' + String(error), statusIsError: true });
    }
  }

  private runNativeSmokeTest(): void {
    const bytes = base64UrlToBytes(COMPRESSED_WIDGET_STATE.__compressed);
    const lines: string[] = [];
    lines.push(`输入 ${bytes.length} B（gzip）`);
    try {
      const text = gunzipUtf8(bytes);
      lines.push(`gunzipUtf8 → ${text.length} 个 UTF-8 字符 ✓`);
    } catch (error) {
      lines.push('gunzipUtf8 失败: ' + String(error));
    }
    try {
      gunzipUtf8WithLimit(bytes, 16);
      lines.push('gunzipUtf8WithLimit(16 B) 未拦截 ✗（不符合还原语义）');
    } catch (error) {
      lines.push('gunzipUtf8WithLimit(16 B) 已按上限拦截 ✓');
    }
    try {
      gunzipUtf8WithLimit(bytes, MAX_UNCOMPRESSED_BYTES);
      lines.push(`gunzipUtf8WithLimit(${MAX_UNCOMPRESSED_BYTES} = 16 MiB) 通过 ✓`);
    } catch (error) {
      lines.push('gunzipUtf8WithLimit(16 MiB) 失败: ' + String(error));
    }
    this.setState({ status: lines.join('\n'), statusIsError: false });
  }
}

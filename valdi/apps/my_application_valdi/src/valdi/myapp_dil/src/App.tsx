import { Component } from 'valdi_core/src/Component';
import { systemFont } from 'valdi_core/src/SystemFont';

/**
 * DIL renderer built on Valdi's native elements.
 *
 * Node names come from the engine's own registry (`DIL_ELEMENTS_MAP`, 72 types — see
 * `dil_full/ELEMENTS.md`), and the visual rules follow the decompiled element renderers in
 * `dil_full/engine/02_element_renderers/`. Only Valdi elements are used (view / label / scroll),
 * so the result is native.
 */

interface DilNode {
  type: string;
  text?: string;
  children?: DilNode[];
}

const COLOR_TEXT = '#111418';
const COLOR_MUTED = '#5B6470';
const COLOR_FAINT = '#8A93A0';
const COLOR_LINE = '#E3E7EE';
const COLOR_ACCENT = '#6B4EAA';
const COLOR_BADGE_BG = '#FFF1DF';
const COLOR_BADGE_FG = '#A4610A';
const COLOR_PLACEHOLDER = '#EEF1F5';

function parseDocument(json?: string): DilNode | undefined {
  if (!json) {
    return undefined;
  }
  try {
    const parsed = JSON.parse(json) as DilNode;
    return parsed && parsed.type ? parsed : undefined;
  } catch (error) {
    return undefined;
  }
}

function childNodes(node: DilNode): DilNode[] {
  return node.children ?? [];
}

/**
 * @ViewModel
 * @ExportModel
 */
export interface DilNodeViewModel {
  node: DilNode;
  depth: number;
}

/**
 * @Context
 * @ExportModel
 */
export interface AppContext {
  onDILAction?: (action: string) => void;
}

/**
 * @Component
 * @ExportModel
 */
export class DilNodeView extends Component<DilNodeViewModel, AppContext> {
  onRender(): void {
    this.renderNode();
  }

  private renderNode(): void {
    const node = this.viewModel.node;
    const type = node.type;

    if (
      type === 'document' ||
      type === 'box' ||
      type === 'col' ||
      type === 'column' ||
      type === 'fragment' ||
      type === 'form' ||
      type === 'flow'
    ) {
      <view width="100%" flexDirection="column">{this.renderChildren(node)}</view>;
      return;
    }

    if (type === 'row' || type === 'flow-item') {
      <view width="100%" flexDirection="row" alignItems="center">
        {this.renderChildren(node)}
      </view>;
      return;
    }

    if (type === 'grid' || type === 'carousel' || type === 'carousel-media') {
      <view width="100%" flexDirection="row" flexWrap="wrap" justifyContent="space-between">
        {childNodes(node).forEach((child, index) => {
          <view key={`grid-${this.viewModel.depth}-${index}`} width="48%" marginBottom={8}>
            <DilNodeView node={child} depth={this.viewModel.depth + 1} />;
          </view>;
        })}
      </view>;
      return;
    }

    if (type === 'card' || type === 'popover-content') {
      <view
        width="100%"
        backgroundColor="#FFFFFF"
        borderRadius={12}
        padding={14}
        marginBottom={10}
      >
        {this.renderChildren(node)}
      </view>;
      return;
    }

    if (type === 'divider') {
      <view width="100%" height={1} backgroundColor={COLOR_LINE} marginTop={8} marginBottom={8} />;
      return;
    }

    if (type === 'spacer') {
      <view width="100%" height={12} />;
      return;
    }

    if (type === 'badge') {
      <view
        alignSelf="flex-start"
        backgroundColor={COLOR_BADGE_BG}
        borderRadius={10}
        paddingLeft={10}
        paddingRight={10}
        paddingTop={3}
        paddingBottom={3}
        marginBottom={6}
      >
        <label value={node.text ?? ''} font={systemFont(11)} color={COLOR_BADGE_FG} />;
      </view>;
      return;
    }

    if (type === 'button' || type === 'pressable' || type === 'follow-up-action-bar') {
      <view
        width="100%"
        backgroundColor={COLOR_ACCENT}
        borderRadius={22}
        paddingTop={11}
        paddingBottom={11}
        marginTop={6}
        marginBottom={6}
        alignItems="center"
        justifyContent="center"
        onTap={() => this.dispatchAction(node.text ?? '')}
      >
        <label value={node.text ?? ''} font={systemFont(14)} color="#FFFFFF" />;
      </view>;
      return;
    }

    if (type === 'image' || type === 'search-image' || type === 'favicon' || type === 'icon') {
      <view
        width="100%"
        height={96}
        backgroundColor={COLOR_PLACEHOLDER}
        borderRadius={10}
        marginBottom={8}
        alignItems="center"
        justifyContent="center"
      >
        <label value={node.text ?? type} font={systemFont(12)} color={COLOR_FAINT} />;
      </view>;
      return;
    }

    if (type === 'list' || type === 'table' || type === 'table-section') {
      <view width="100%" flexDirection="column">{this.renderChildren(node)}</view>;
      return;
    }

    if (type === 'list-item') {
      <view width="100%" flexDirection="row" marginBottom={4}>
        <label value="•  " font={systemFont(14)} color={COLOR_MUTED} />;
        <label value={node.text ?? ''} font={systemFont(14)} color={COLOR_TEXT} numberOfLines={0} />;
      </view>;
      return;
    }

    if (type === 'table-row') {
      <view width="100%" flexDirection="row" marginBottom={6}>
        {childNodes(node).forEach((cell, index) => {
          <view key={`cell-${this.viewModel.depth}-${index}`} flexGrow={1}>
            <DilNodeView node={cell} depth={this.viewModel.depth + 1} />;
          </view>;
        })}
      </view>;
      return;
    }

    if (type === 'table-cell') {
      <label value={node.text ?? ''} font={systemFont(13)} color={COLOR_TEXT} numberOfLines={0} />;
      return;
    }

    <label
      value={node.text ?? ''}
      font={systemFont(this.fontSize(type))}
      color={this.color(type)}
      numberOfLines={0}
      marginBottom={4}
    />;
  }

  private renderChildren(node: DilNode): void {
    const children = childNodes(node);
    if (children.length === 0) {
      if (node.text) {
        <label
          value={node.text}
          font={systemFont(this.fontSize(node.type))}
          color={this.color(node.type)}
          numberOfLines={0}
          marginBottom={4}
        />;
      }
      return;
    }
    children.forEach((child, index) => {
      <view key={`n-${this.viewModel.depth}-${index}`} width="100%">
        <DilNodeView node={child} depth={this.viewModel.depth + 1} />;
      </view>;
    });
  }

  private fontSize(type: string): number {
    if (type === 'title') {
      return 22;
    }
    if (type === 'caption') {
      return 12;
    }
    if (type === 'label' || type === 'code') {
      return 13;
    }
    return 15;
  }

  private color(type: string): string {
    if (type === 'caption' || type === 'label') {
      return COLOR_MUTED;
    }
    if (type === 'link') {
      return '#1B4DBE';
    }
    if (type === 'code') {
      return '#7A3E00';
    }
    return COLOR_TEXT;
  }

  private dispatchAction(action: string): void {
    const handler = this.context?.onDILAction;
    if (typeof handler === 'function') {
      handler(action);
    }
  }
}

/**
 * @ViewModel
 * @ExportModel
 */
export interface AppViewModel {
  document?: string;
}

/**
 * @Component
 * @ExportModel
 */
export class App extends Component<AppViewModel, AppContext> {
  onRender(): void {
    const root = parseDocument(this.viewModel.document);
    <scroll width="100%" height="100%" backgroundColor="#F7F8FA">
      <view width="100%" padding={16} flexDirection="column">
        {root ? (
          <DilNodeView node={root} depth={0} />
        ) : (
          <label value="DIL 文档为空或无法解析" font={systemFont(13)} color={COLOR_FAINT} numberOfLines={0} />
        )}
      </view>
    </scroll>;
  }
}

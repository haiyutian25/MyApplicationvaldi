import { Component } from 'valdi_core/src/Component';
import { systemFont } from 'valdi_core/src/SystemFont';

import { childNodes, childText, DILNode, progressFraction } from './DILTypes';

/**
 * Renders a `model_dil_v2` node tree with native Valdi elements.
 *
 * Note this is *emission based* TSX: JSX statements are side effects of the
 * enclosing `onRender`, helpers emit into the current parent, and lists use
 * `forEach` (never `map`).
 */

export interface DILNodeViewModel {
  node: DILNode;
  depth: number;
}

export interface DILNodeContext {
  onAction?: (action: string) => void;
}

/**
 * @Component
 */
export class DILNodeView extends Component<DILNodeViewModel, DILNodeContext> {
  onRender(): void {
    const type = this.viewModel.node.type;
    if (type === 'document') {
      this.renderDocument();
      return;
    }
    if (type === 'card') {
      this.renderCard();
      return;
    }
    if (type === 'list') {
      this.renderList();
      return;
    }
    if (type === 'list-item') {
      this.renderListItem();
      return;
    }
    if (type === 'heading' || type === 'title') {
      this.renderHeading();
      return;
    }
    if (type === 'paragraph' || type === 'text' || type === 'label') {
      this.renderParagraph();
      return;
    }
    if (type === 'progress') {
      this.renderProgress();
      return;
    }
    if (type === 'button') {
      this.renderButton();
      return;
    }
    if (type === 'divider') {
      this.renderDivider();
      return;
    }
    this.renderFallback();
  }

  private onTapText(text: string): void {
    console.log('[DIL] tapped: ' + text);
    this.context?.onAction?.(text);
  }

  private emitChildren(): void {
    const nodes = childNodes(this.viewModel.node.children);
    const depth = this.viewModel.depth + 1;
    nodes.forEach((child, index) => {
      <DILNodeView key={`${depth}-${index}`} node={child} depth={depth} />;
    });
  }

  private renderDocument(): void {
    const node = this.viewModel.node;
    <view width="100%" flexDirection="column">
      <view
        backgroundColor="#f2f4f7"
        borderRadius={8}
        padding={8}
        marginBottom={8}
        flexDirection="row"
      >
        <label
          value={`DIL ${node.version ?? 'v2'} · ${node.code ?? 'unknown-code'}`}
          font={systemFont(11)}
          color="#5b6470"
        />
      </view>
      {this.emitChildren()}
    </view>;
  }

  private renderCard(): void {
    <view
      backgroundColor="#ffffff"
      borderRadius={12}
      padding={14}
      marginBottom={12}
      flexDirection="column"
      borderColor="#e3e6ea"
      borderWidth={1}
    >
      {this.emitChildren()}
    </view>;
  }

  private renderList(): void {
    <view width="100%" flexDirection="column" marginTop={4} marginBottom={4}>
      {this.emitChildren()}
    </view>;
  }

  private renderListItem(): void {
    const text = childText(this.viewModel.node.children);
    <view flexDirection="row" alignItems="center" marginBottom={4}>
      <label value="•" font={systemFont(14)} color="#8a93a0" marginRight={6} />
      <label value={text} font={systemFont(14)} color="#1f2329" flexShrink={1} />
    </view>;
  }

  private renderHeading(): void {
    const text = childText(this.viewModel.node.children);
    <label
      value={text}
      font={systemFont(18)}
      color="#111418"
      marginBottom={6}
      marginTop={4}
      numberOfLines={0}
    />;
  }

  private renderParagraph(): void {
    const text = childText(this.viewModel.node.children);
    <label
      value={text}
      font={systemFont(14)}
      color="#31363d"
      marginBottom={8}
      numberOfLines={0}
    />;
  }

  private renderProgress(): void {
    const node = this.viewModel.node;
    const fraction = progressFraction(node);
    const caption = childText(node.children);
    <view width="100%" flexDirection="column" marginTop={6} marginBottom={6}>
      <label
        value={caption.length > 0 ? caption : '进度'}
        font={systemFont(12)}
        color="#5b6470"
        marginBottom={4}
      />
      <view height={8} width="100%" backgroundColor="#e6e9ee" borderRadius={4}>
        <view
          height={8}
          width={`${Math.round(fraction * 100)}%`}
          backgroundColor="#10a37f"
          borderRadius={4}
        />
      </view>
    </view>;
  }

  private renderButton(): void {
    const text = childText(this.viewModel.node.children);
    <view
      backgroundColor="#10a37f"
      borderRadius={10}
      paddingLeft={16}
      paddingRight={16}
      paddingTop={10}
      paddingBottom={10}
      marginTop={6}
      marginBottom={2}
      alignItems="center"
      onTap={() => this.onTapText(text)}
    >
      <label value={text} font={systemFont(14)} color="#ffffff" />
    </view>;
  }

  private renderDivider(): void {
    <view height={1} width="100%" backgroundColor="#e3e6ea" marginTop={8} marginBottom={8} />;
  }

  private renderFallback(): void {
    const node = this.viewModel.node;
    const text = childText(node.children);
    <view width="100%" flexDirection="column" marginBottom={6}>
      <label value={`[${node.type}]`} font={systemFont(12)} color="#8a93a0" marginBottom={2} />
      <label value={text} font={systemFont(14)} color="#31363d" numberOfLines={0} />;
      {this.emitChildren()}
    </view>;
  }
}

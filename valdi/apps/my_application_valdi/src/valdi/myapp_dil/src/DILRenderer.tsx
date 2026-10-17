import { Component } from 'valdi_core/src/Component';
import { systemFont } from 'valdi_core/src/SystemFont';

import { chartEntries, childNodes, childText, DILNode, progressFraction } from './DILTypes';

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
    if (type === 'avatar') {
      this.renderAvatar();
      return;
    }
    if (type === 'badge') {
      this.renderBadge();
      return;
    }
    if (type === 'rating') {
      this.renderRating();
      return;
    }
    if (type === 'image') {
      this.renderImagePlaceholder();
      return;
    }
    if (type === 'grid') {
      this.renderGrid();
      return;
    }
    if (type === 'chart') {
      this.renderChart();
      return;
    }
    if (type === 'stats') {
      this.renderStats();
      return;
    }
    if (type === 'stat') {
      this.renderStat();
      return;
    }
    if (type === 'quantity-selector') {
      this.renderQuantitySelector();
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

  private renderAvatar(): void {
    const text = childText(this.viewModel.node.children);
    const words = text.trim().split(/\s+/);
    let initials = '';
    words.forEach((word, index) => {
      if (index < 2 && word.length > 0) {
        initials += word.charAt(0).toUpperCase();
      }
    });
    <view flexDirection="row" alignItems="center" marginBottom={8}>
      <view
        width={56}
        height={56}
        borderRadius={28}
        backgroundColor="#dbe7ff"
        alignItems="center"
        justifyContent="center"
        marginRight={12}
      >
        <label value={initials.length > 0 ? initials : '?'} font={systemFont(20)} color="#1b4dbe" />
      </view>
      <label value={text} font={systemFont(13)} color="#5b6470" numberOfLines={0} flexShrink={1} />
    </view>;
  }

  private renderBadge(): void {
    const text = childText(this.viewModel.node.children);
    <view
      alignSelf="flex-start"
      backgroundColor="#fff2e0"
      borderRadius={10}
      paddingLeft={10}
      paddingRight={10}
      paddingTop={3}
      paddingBottom={3}
      marginBottom={8}
    >
      <label value={text} font={systemFont(11)} color="#a4610a" />;
    </view>;
  }

  private renderRating(): void {
    const text = childText(this.viewModel.node.children);
    const value = parseFloat(text);
    const rounded = isNaN(value) ? 0 : Math.round(value);
    let stars = '';
    for (let index = 0; index < 5; index++) {
      stars += index < rounded ? '★' : '☆';
    }
    <view flexDirection="row" alignItems="center" marginBottom={6}>
      <label value={stars} font={systemFont(14)} color="#f5a623" marginRight={6} />
      <label value={isNaN(value) ? text : value.toFixed(1)} font={systemFont(13)} color="#5b6470" />;
    </view>;
  }

  private renderImagePlaceholder(): void {
    const name = childText(this.viewModel.node.children);
    <view
      width="100%"
      height={120}
      borderRadius={10}
      backgroundColor="#eef1f5"
      alignItems="center"
      justifyContent="center"
      marginBottom={10}
    >
      <label value={name.length > 0 ? name : 'image'} font={systemFont(12)} color="#8a93a0" />;
    </view>;
  }

  private renderGrid(): void {
    const nodes = childNodes(this.viewModel.node.children);
    <view flexDirection="row" flexWrap="wrap" justifyContent="space-between" width="100%">
      {nodes.forEach((child, index) => {
        <view key={`grid-${this.viewModel.depth}-${index}`} width="48%">
          <DILNodeView node={child} depth={this.viewModel.depth + 1} />;
        </view>;
      })}
    </view>;
  }

  private renderChart(): void {
    const entries = chartEntries(this.viewModel.node);
    let max = 1;
    entries.forEach(entry => {
      if (entry.value > max) {
        max = entry.value;
      }
    });
    <view width="100%" backgroundColor="#ffffff" borderRadius={12} padding={14} marginBottom={12}>
      <label value="周趋势" font={systemFont(12)} color="#5b6470" marginBottom={8} />
      <view flexDirection="row" alignItems="flex-end" height={120} width="100%">
        {entries.forEach((entry, index) => {
          const height = Math.max(8, Math.round((entry.value / max) * 96));
          <view key={`bar-${index}`} flexGrow={1} flexDirection="column" alignItems="center" marginRight={6}>
            <label value={String(entry.value)} font={systemFont(10)} color="#5b6470" marginBottom={4} />;
            <view width="70%" height={height} backgroundColor="#10a37f" borderRadius={4} />;
            <label value={entry.label} font={systemFont(10)} color="#8a93a0" marginTop={4} />;
          </view>;
        })}
      </view>
    </view>;
  }

  private renderStats(): void {
    <view flexDirection="row" width="100%" marginTop={8} marginBottom={8}>
      {this.emitChildren()}
    </view>;
  }

  private renderStat(): void {
    const text = childText(this.viewModel.node.children);
    <view
      flexGrow={1}
      backgroundColor="#f6f8fb"
      borderRadius={10}
      padding={10}
      marginRight={6}
      alignItems="center"
    >
      <label value={text} font={systemFont(12)} color="#31363d" numberOfLines={0} />;
    </view>;
  }

  private renderQuantitySelector(): void {
    const text = childText(this.viewModel.node.children);
    <view flexDirection="row" alignItems="center" marginTop={6} marginBottom={6}>
      <view
        width={32}
        height={32}
        borderRadius={8}
        backgroundColor="#eef1f5"
        alignItems="center"
        justifyContent="center"
        onTap={() => this.onTapText('数量-')}
      >
        <label value="−" font={systemFont(16)} color="#31363d" />;
      </view>
      <label
        value={text.length > 0 ? text : '1'}
        font={systemFont(14)}
        color="#111418"
        marginLeft={14}
        marginRight={14}
      />
      <view
        width={32}
        height={32}
        borderRadius={8}
        backgroundColor="#eef1f5"
        alignItems="center"
        justifyContent="center"
        onTap={() => this.onTapText('数量+')}
      >
        <label value="+" font={systemFont(16)} color="#31363d" />;
      </view>
    </view>;
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

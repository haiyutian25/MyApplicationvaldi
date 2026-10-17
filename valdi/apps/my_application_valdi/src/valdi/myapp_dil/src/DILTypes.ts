/**
 * Types and helpers for the `model_dil_v2` document the server sends.
 *
 * The node vocabulary mirrors what ChatGPT renders: text-ish nodes (`heading`,
 * `paragraph`), DIL elements (`card`, `list`, `list-item`, `progress`, `button`,
 * `divider`) and the `document` envelope carrying `version` / `code`.
 */
export interface DILNode {
  type: string;
  version?: string;
  code?: string;
  children?: DILNodeChildren;
  props?: DILNodeProps;
}

export type DILNodeProps = Record<string, string | number | boolean | undefined>;

export type DILNodeChildren = string | number | DILNode | DILScalarOrNode[] | undefined;

export type DILScalarOrNode = string | number | DILNode | null | undefined;

/** Text of a leaf node, i.e. the concatenation of its scalar children. */
export function childText(children: DILNodeChildren): string {
  if (children === undefined || children === null) {
    return '';
  }
  if (typeof children === 'string' || typeof children === 'number') {
    return String(children);
  }
  if (Array.isArray(children)) {
    let out = '';
    children.forEach(child => {
      if (typeof child === 'string' || typeof child === 'number') {
        out += String(child);
      }
    });
    return out;
  }
  return '';
}

/** Nested nodes of a container. */
export function childNodes(children: DILNodeChildren): DILNode[] {
  if (!Array.isArray(children)) {
    return [];
  }
  const nodes: DILNode[] = [];
  children.forEach(child => {
    if (child !== null && typeof child === 'object') {
      nodes.push(child as DILNode);
    }
  });
  return nodes;
}

/** 0..1 value of a `progress` node, from `props.value` or a `"NN%"` child. */
export function progressFraction(node: DILNode): number {
  const raw = node.props?.value;
  let value: number | undefined;
  if (typeof raw === 'number') {
    value = raw;
  } else if (typeof raw === 'string') {
    const parsed = parseFloat(raw);
    if (!isNaN(parsed)) {
      value = parsed;
    }
  }
  if (value === undefined) {
    const text = childText(node.children);
    const match = text.match(/(\d+(?:\.\d+)?)\s*%/);
    if (match) {
      value = parseFloat(match[1]) / 100;
    }
  }
  if (value === undefined) {
    return 0.5;
  }
  if (value > 1) {
    value = value / 100;
  }
  return Math.max(0, Math.min(1, value));
}

/** One bar of a `chart` node. */
export interface DILChartEntry {
  label: string;
  value: number;
}

/**
 * Entries of a `chart` node: its `data` children, each written as `"label：value"`
 * (the full-width colon the server uses works, and so does an ASCII one).
 */
export function chartEntries(node: DILNode): DILChartEntry[] {
  const entries: DILChartEntry[] = [];
  childNodes(node.children).forEach(child => {
    const text = childText(child.children);
    const match = text.match(/^([^:：]*)[:：]\s*([\d.]+)\s*$/);
    if (!match) {
      return;
    }
    const value = parseFloat(match[2]);
    if (!isNaN(value)) {
      entries.push({ label: match[1].trim(), value });
    }
  });
  return entries;
}

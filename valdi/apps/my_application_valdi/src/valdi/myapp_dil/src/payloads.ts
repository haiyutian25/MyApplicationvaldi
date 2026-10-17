import { CompressedWidgetState } from './CompressedWidgetState';
import { DILNode } from './DILTypes';

/**
 * The payload the server actually sends for an Intelligent UI response: plain JSON,
 * a node tree with `type` / `version` / `code` / `children`. Nothing is compressed.
 */
export const MODEL_DIL_V2_DOCUMENT: DILNode = {
  type: 'document',
  version: 'v2',
  code: 'intelligent-ui-demo',
  children: [
    {
      type: 'heading',
      children: '欢迎使用智能界面',
    },
    {
      type: 'paragraph',
      children: '这是一个由节点结构组成的 Intelligent UI 示例，支持标题、文本和交互操作。',
    },
    {
      type: 'card',
      children: [
        { type: 'heading', children: '今日任务' },
        { type: 'paragraph', children: '完成你的每日计划' },
        {
          type: 'list',
          children: [
            { type: 'list-item', children: '阅读文档' },
            { type: 'list-item', children: '整理项目进度' },
            { type: 'list-item', children: '完成本周计划' },
          ],
        },
        { type: 'progress', children: '任务完成进度', props: { value: 0.66 } },
      ],
    },
    { type: 'button', children: '开始使用' },
  ],
};

/** Same document, but as a *compressed* widget state (the path that hits native zlib). */
export const COMPRESSED_WIDGET_STATE: CompressedWidgetState = {
  __encoding: 'gzip-json-base64url-v1',
  // base64url(gzip({state:{quizId:"demo-1",question:"1 + 1 = ?",choices:["1","2","3"],
  //                  answerIndex:1,answered:true}}))
  __compressed:
    'H4sIAAAAAAAC_6tWKi5JLElVsqpWKizNrPJMUbJSSknNzdc1VNIBiqQWl2Tm5wHFDBW0FQwVbBXsgcLJGfmZyanFSlbRSiBVRkBsrBSro5SYV1yeWuSZl5JaoWRlCOOnAo0sKSpNra0FAOoesLhsAAAA',
};

/** JSON text of the compressed state, in case a caller wants to go through the string API. */
export function compressedWidgetStateJson(): string {
  return JSON.stringify(COMPRESSED_WIDGET_STATE);
}

/** Weather card: heading + card with a big value, a caption and a list. */
export const WEATHER_DOCUMENT: DILNode = {
  type: 'document',
  version: 'v2',
  code: 'weather-panel',
  children: [
    { type: 'heading', children: '东京天气' },
    {
      type: 'card',
      children: [
        { type: 'text', children: '22°C' },
        { type: 'text', children: '晴间多云' },
        {
          type: 'list',
          children: [
            { type: 'list-item', children: '体感温度：24°C' },
            { type: 'list-item', children: '风速：12 km/h' },
            { type: 'list-item', children: '湿度：55%' },
          ],
        },
      ],
    },
  ],
};

/** Profile card: avatar, heading, badge-free text, list, stats row and a button. */
export const PROFILE_DOCUMENT: DILNode = {
  type: 'document',
  version: 'v2',
  code: 'profile-card',
  children: [
    {
      type: 'card',
      children: [
        { type: 'avatar', children: 'Alex Morgan' },
        { type: 'heading', children: 'Alex Morgan' },
        { type: 'text', children: '产品设计师 · 创意工作室' },
        {
          type: 'list',
          children: [
            { type: 'list-item', children: 'UI 设计' },
            { type: 'list-item', children: '原型制作' },
            { type: 'list-item', children: '用户研究' },
          ],
        },
        {
          type: 'stats',
          children: [
            { type: 'stat', children: '28 个项目' },
            { type: 'stat', children: '16 位客户' },
            { type: 'stat', children: '5 年经验' },
          ],
        },
        { type: 'button', children: '查看个人档案' },
      ],
    },
  ],
};

/** Analytics dashboard: heading, two KPI cards in a grid, and a bar chart. */
export const ANALYTICS_DOCUMENT: DILNode = {
  type: 'document',
  version: 'v2',
  code: 'analytics-dashboard',
  children: [
    { type: 'heading', children: '月度经营报告' },
    {
      type: 'grid',
      children: [
        {
          type: 'card',
          children: [
            { type: 'text', children: '总收入' },
            { type: 'heading', children: '$48,290' },
            { type: 'text', children: '增长 12.8%' },
          ],
        },
        {
          type: 'card',
          children: [
            { type: 'text', children: '订单数量' },
            { type: 'heading', children: '1,284' },
            { type: 'text', children: '增长 8.4%' },
          ],
        },
      ],
    },
    {
      type: 'chart',
      children: [
        { type: 'data', children: '第1周：8200' },
        { type: 'data', children: '第2周：10500' },
        { type: 'data', children: '第3周：9200' },
        { type: 'data', children: '第4周：13800' },
      ],
    },
  ],
};

/** Product card: image placeholder, badge, heading, rating, price, quantity and button. */
export const PRODUCT_DOCUMENT: DILNode = {
  type: 'document',
  version: 'v2',
  code: 'product-card',
  children: [
    {
      type: 'card',
      children: [
        { type: 'image', children: 'headphones-product-image' },
        { type: 'badge', children: '热门商品' },
        { type: 'heading', children: 'Studio Wireless Pro' },
        { type: 'text', children: '无线降噪耳机 · 雾面白' },
        { type: 'rating', children: '4.8' },
        { type: 'text', children: '$129.00' },
        { type: 'quantity-selector', children: '1' },
        { type: 'button', children: '加入购物车' },
      ],
    },
  ],
};

export interface DILSample {
  /** Short chip label in the UI. */
  label: string;
  document: DILNode;
}

/** Everything the demo can switch between. */
export const SAMPLE_DOCUMENTS: DILSample[] = [
  { label: '示例', document: MODEL_DIL_V2_DOCUMENT },
  { label: '天气', document: WEATHER_DOCUMENT },
  { label: '资料卡', document: PROFILE_DOCUMENT },
  { label: '报表', document: ANALYTICS_DOCUMENT },
  { label: '商品', document: PRODUCT_DOCUMENT },
];

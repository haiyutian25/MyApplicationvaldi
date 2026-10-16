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

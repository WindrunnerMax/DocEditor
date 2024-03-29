import type { BaseNode, Editor } from "doc-editor-delta";
import { Node } from "doc-editor-delta";
import { isBlock, isText, isTextBlock } from "doc-editor-utils";

import type { Plugin } from "../plugin/types";
import { KEY_EVENT } from "../plugin/types";

export const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, keyDownPlugins: Plugin[]) => {
  if (event.nativeEvent.isComposing) return void 0;
  for (const item of keyDownPlugins) {
    if (item.onKeyDown && item.onKeyDown(event) === KEY_EVENT.STOP) break; // 返回`STOP`则停止继续执行
  }
};

export const onCopy = (event: React.ClipboardEvent<HTMLDivElement>, editor: Editor) => {
  // TODO: clipboard module
  const fragments = editor.getFragment();
  const parseText = (fragment: BaseNode[]): string => {
    return fragment
      .map(item => {
        if (isText(item)) return Node.string(item);
        else if (isTextBlock(editor, item)) return parseText(item.children) + "\n";
        else if (isBlock(editor, item)) return parseText(item.children);
        else return "";
      })
      .join("");
  };
  const text = parseText(fragments).replace(/\n$/, "");
  event.clipboardData.setData("text/plain", text);
  event.preventDefault();
};

import type {
  BaseRange,
  BlockElement,
  Location,
  Node,
  Path,
  TextBlockElement,
} from "doc-editor-delta";
import { Editor, Point, Range } from "doc-editor-delta";
import { isEmptyValue, isObject } from "laser-utils";

import { getBlockNode } from "./get";
import { isBlock, isText } from "./ref";

export const isWrappedNode = (editor: Editor) => {
  const match = getBlockNode(editor);
  return match && match.path.length >= 2;
};

export const isMatchedAttributeNode = (
  editor: Editor,
  key: string,
  value: unknown | null,
  path?: Path
) => {
  const [firstKey, ...keys] = key.split(".");
  const match = getBlockNode(editor, { at: path, key: firstKey });
  if (!match) return false;
  const matchedValue = match.block[firstKey];
  let preKeyData: unknown = matchedValue;
  for (let i = 0, n = keys.length; i < n; ++i) {
    if (isObject(preKeyData)) preKeyData = preKeyData[keys[i]];
    else return false;
  }
  if (isEmptyValue(value)) return true;
  return preKeyData === value;
};

export const isEmptyLine = (editor: Editor, path: Path) => {
  const start = Editor.start(editor, path);
  const end = Editor.end(editor, path);
  return Point.equals(start, end);
};

export const isCollapsed = (editor: Editor, at = editor.selection): at is BaseRange => {
  return !at || Range.isCollapsed(at);
};

export const isFocusLineStart = (editor: Editor, path: Path) => {
  const start = Editor.start(editor, path);
  return isCollapsed(editor, editor.selection) && Point.equals(start, editor.selection.anchor);
};

export const isFocusLineEnd = (editor: Editor, path: Path) => {
  const end = Editor.end(editor, path);
  return isCollapsed(editor, editor.selection) && Point.equals(end, editor.selection.anchor);
};

export const isMatchedEvent = (event: React.KeyboardEvent<HTMLDivElement>, ...args: string[]) => {
  const key = event.key;
  return args.indexOf(key) > -1;
};

export const isTextBlock = (editor: Editor, node: Node): node is TextBlockElement => {
  if (isBlock(editor, node)) {
    return node.children.every(child => isText(child));
  }
  return false;
};

type MatchNode = { block: BlockElement; path: Path } | null;
export function isWrappedEdgeNode(
  editor: Editor,
  mode: "first" | "last" | "or",
  options: { at?: Location; wrapKey: string; itemKey: string }
): boolean;
export function isWrappedEdgeNode(
  editor: Editor,
  mode: "first" | "last" | "or",
  options: { at?: Location; wrapNode: MatchNode; itemNode: MatchNode }
): boolean;
export function isWrappedEdgeNode(
  editor: Editor,
  mode: "first" | "last" | "or" = "last",
  options: {
    at?: Location;
    wrapKey?: string;
    itemKey?: string;
    wrapNode?: MatchNode;
    itemNode?: MatchNode;
  }
): boolean {
  const { at, wrapKey, itemKey } = options;
  const wrapNode = options.wrapNode || getBlockNode(editor, { at, key: wrapKey });
  const itemNode = options.itemNode || getBlockNode(editor, { at, key: itemKey });
  if (wrapNode && itemNode && wrapNode.block.children.length) {
    const children = wrapNode.block.children;
    if (mode === "last") {
      return children[children.length - 1] === itemNode.block;
    } else if (mode === "first") {
      return children[0] === itemNode.block;
    } else {
      return children[0] === itemNode.block || children[children.length - 1] === itemNode.block;
    }
  }
  return false;
}

export function isWrappedAdjoinNode(
  editor: Editor,
  options: { at?: Location; wrapKey: string; itemKey: string }
): boolean;
export function isWrappedAdjoinNode(
  editor: Editor,
  options: { at?: Location; wrapNode: MatchNode; itemNode: MatchNode }
): boolean;
export function isWrappedAdjoinNode(
  editor: Editor,
  options: {
    at?: Location;
    wrapKey?: string;
    itemKey?: string;
    wrapNode?: MatchNode;
    itemNode?: MatchNode;
  }
): boolean {
  const { at, wrapKey, itemKey } = options;
  const wrapNode = options.wrapNode || getBlockNode(editor, { at, key: wrapKey });
  const itemNode = options.itemNode || getBlockNode(editor, { at, key: itemKey });
  if (wrapNode && itemNode && wrapNode.block.children.length) {
    const children = wrapNode.block.children;
    return children.indexOf(itemNode.block) > -1;
  }
  return false;
}

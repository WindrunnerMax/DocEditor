import type { BaseEditor, Path } from "slate";
import { Node } from "slate";

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor;
    Element: BlockElement;
    Text: TextElement;
  }
}

export interface BlockElement {
  children: BaseNode[];
  [key: string]: unknown;
}

export interface TextElement {
  text: string;
  [key: string]: unknown;
}

export interface TextBlockElement {
  children: TextElement[];
  [key: string]: unknown;
}

export type BaseElement = BlockElement | TextElement;
export type BaseNode = BlockElement | TextElement | TextBlockElement;
export type EditorPath = Path;
export const EditorNode = Node;
export type { BaseRange, NodeEntry } from "slate";
export {
  createEditor,
  Editor,
  Element,
  Location,
  Node,
  Path,
  Point,
  Range,
  Text,
  Transforms,
} from "slate";
export { HistoryEditor, withHistory } from "slate-history";
export type { RenderElementProps, RenderLeafProps } from "slate-react";
export {
  Editable,
  Slate as EditorProvider,
  ReactEditor,
  useFocused,
  useReadOnly,
  useSelected,
  useSlate,
  useSlateSelector,
  useSlateStatic,
  withReact,
} from "slate-react";

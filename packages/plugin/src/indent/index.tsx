import type { EditorKit } from "doc-editor-core";
import { BlockPlugin } from "doc-editor-core";
import { Transforms } from "doc-editor-delta";
import { isCollapsed, isMatchedEvent } from "doc-editor-utils";
import { KEYBOARD } from "doc-editor-utils";
import type { KeyboardEvent } from "react";

import { INDENT_KEY } from "./types";

export class IndentPlugin extends BlockPlugin {
  public key: string = INDENT_KEY;
  public priority: number = -1;

  constructor(private editor: EditorKit) {
    super();
  }

  public destroy(): void {}

  public match(): boolean {
    return false;
  }

  public onKeyDown(event: KeyboardEvent<HTMLDivElement>): boolean | void {
    if (
      isMatchedEvent(event, KEYBOARD.TAB) &&
      isCollapsed(this.editor.raw, this.editor.raw.selection)
    ) {
      Transforms.insertText(this.editor.raw, "\t");
      event.preventDefault();
      event.stopPropagation();
    }
  }
}

import type { BaseRange } from "doc-editor-delta";
import { Range, Transforms } from "doc-editor-delta";

import type { EditorKit } from "../editor";
import type { EditorRaw } from "../editor/types";

export class Selection {
  private raw: EditorRaw;
  constructor(private editor: EditorKit) {
    this.raw = this.editor.raw;
  }

  public get() {
    const selection = this.raw.selection;
    if (!selection) return null;
    return {
      ...this.raw.selection,
      isCollapsed: () => Range.isCollapsed(selection),
      isBackward: () => Range.isBackward(selection),
    };
  }

  public set(range: BaseRange | null) {
    if (!range) {
      // https://github.com/ianstormtaylor/slate/blob/25be3b/packages/slate/src/transforms/selection.ts#L60
      if (this.raw.selection) {
        this.raw.apply({
          type: "set_selection",
          properties: this.raw.selection,
          newProperties: null,
        });
      }
    } else {
      Transforms.setSelection(this.raw, range);
    }
  }

  public getFocusPath() {
    const selection = this.raw.selection;
    if (!selection) return null;
    return selection.focus.path;
  }
}

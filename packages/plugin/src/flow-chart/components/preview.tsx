import { Image } from "@arco-design/web-react";
import { cs } from "doc-editor-utils";
import type { FC } from "react";
import { useState } from "react";

import styles from "./index.module.scss";

const Preview = Image.Preview;
export const PreviewWrapper: FC<{
  readonly: boolean;
  selected?: boolean;
  disable?: boolean;
  src: () => string | Promise<string | null>;
}> = props => {
  const [src, setSrc] = useState("");

  const needPreview = !props.disable && (props.readonly || props.selected);

  const preview = async () => {
    if (needPreview) {
      const src = await props.src();
      setSrc(src || "");
    }
  };

  return (
    <>
      {src && <Preview src={src} visible={!!src} onVisibleChange={v => !v && setSrc("")} />}
      <div onClick={preview} className={cs(needPreview && styles.preview)}>
        {props.children}
      </div>
    </>
  );
};

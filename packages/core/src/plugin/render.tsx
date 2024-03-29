import type { NodeEntry, Range } from "doc-editor-delta";
import type { RenderElementProps, RenderLeafProps } from "doc-editor-delta";

import { Void } from "../preset/void";
import type { ElementContext, ElementPlugin, LeafContext, LeafPlugin, Plugin } from "./types";

export const renderElement = (props: RenderElementProps, elementPlugins: ElementPlugin[]) => {
  const context: ElementContext = {
    props,
    style: {},
    classList: [],
    element: props.element,
    children: props.children,
  };
  for (const item of elementPlugins) {
    if (item.match(props) && item.render) {
      context.children = (
        <>
          {props.children}
          <Void>{item.render(context)}</Void>
        </>
      );
      break;
    }
  }
  for (let i = elementPlugins.length - 1; i >= 0; i--) {
    const item = elementPlugins[i];
    if (item.match(props) && item.renderLine) {
      context.children = item.renderLine(context);
    }
  }
  return (
    <div {...props.attributes} className={context.classList.join(" ")} style={context.style}>
      {context.children}
    </div>
  );
};

export const renderLeaf = (props: RenderLeafProps, leafPlugins: LeafPlugin[]) => {
  const context: LeafContext = {
    props,
    style: {},
    element: props.leaf,
    classList: [],
    children: props.children,
  };
  for (const item of leafPlugins) {
    if (item.match(props) && item.render) {
      context.children = item.render(context);
    }
  }
  return (
    <span {...props.attributes} className={context.classList.join(" ")} style={context.style}>
      {context.children}
    </span>
  );
};

export const decorate = (entry: NodeEntry, plugins: Plugin[]) => {
  const ranges: Range[] = [];
  for (const item of plugins) {
    if (item.decorate) {
      const result = item.decorate(entry);
      if (result) {
        ranges.push(...result);
      }
    }
  }
  return ranges;
};

import { Menu } from "@arco-design/web-react";
import {
  IconAlignCenter,
  IconAlignLeft,
  IconAlignRight,
  IconBold,
  IconCode,
  IconFontColors,
  IconItalic,
  IconLineHeight,
  IconLink,
  IconMenu,
  IconStrikethrough,
  IconUnderline,
} from "@arco-design/web-react/icon";

import { ALIGN_KEY } from "../../align/types";
import { BOLD_KEY } from "../../bold/types";
import { FONT_BASE_KEY } from "../../font-base/types";
import { HYPER_LINK_KEY } from "../../hyper-link/types";
import { INLINE_CODE_KEY } from "../../inline-code/types";
import { ITALIC_KEY } from "../../italic/types";
import { LINE_HEIGHT_KEY } from "../../line-height/types";
import { STRIKE_THROUGH_KEY } from "../../strike-through/types";
import { UNDERLINE_KEY } from "../../under-line/types";

export const MenuItems = (
  <>
    <Menu.Item key={BOLD_KEY}>
      <IconBold />
    </Menu.Item>
    <Menu.Item key={ITALIC_KEY}>
      <IconItalic />
    </Menu.Item>
    <Menu.Item key={UNDERLINE_KEY}>
      <IconUnderline />
    </Menu.Item>
    <Menu.Item key={STRIKE_THROUGH_KEY}>
      <IconStrikethrough />
    </Menu.Item>
    <Menu.Item key={INLINE_CODE_KEY}>
      <IconCode />
    </Menu.Item>
    <Menu.Item key={HYPER_LINK_KEY}>
      <IconLink />
    </Menu.Item>
    <Menu.Item key={FONT_BASE_KEY}>
      <IconFontColors />
    </Menu.Item>
    <Menu.Item key={LINE_HEIGHT_KEY}>
      <IconLineHeight />
    </Menu.Item>
    <Menu.SubMenu
      key={ALIGN_KEY}
      title={<IconAlignLeft />}
      popup
      triggerProps={{ trigger: "click", position: "bottom" }}
    >
      <Menu.Item key={`${ALIGN_KEY}.left`}>
        <div className="align-menu-center">
          <IconAlignLeft />
        </div>
      </Menu.Item>
      <Menu.Item key={`${ALIGN_KEY}.center`}>
        <div className="align-menu-center">
          <IconAlignCenter />
        </div>
      </Menu.Item>
      <Menu.Item key={`${ALIGN_KEY}.right`}>
        <div className="align-menu-center">
          <IconAlignRight />
        </div>
      </Menu.Item>
      <Menu.Item key={`${ALIGN_KEY}.justify`}>
        <div className="align-menu-center">
          <IconMenu />
        </div>
      </Menu.Item>
    </Menu.SubMenu>
  </>
);

import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Button.module.css";

export function Button({
  as: _Component = _Builtin.Link,
  text = "Blank",

  link = {
    href: "#",
  },

  id,
  makenote = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button")}
      button={true}
      id={id}
      options={link}
      {...makenote}
    >
      {text}
    </_Component>
  );
}

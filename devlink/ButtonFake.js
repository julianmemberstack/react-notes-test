import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ButtonFake.module.css";

export function ButtonFake({
  as: _Component = _Builtin.Block,
  text = "Blank",
  id,
  makenote = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "button", "fake")}
      tag="div"
      id={id}
      {...makenote}
    >
      {text}
    </_Component>
  );
}

import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./H2.module.css";

export function H2({ as: _Component = _Builtin.Heading, text = "Heading" }) {
  return (
    <_Component className={_utils.cx(_styles, "h2")} tag="h2">
      {text}
    </_Component>
  );
}

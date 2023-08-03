import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FormBlock.module.css";

export function FormBlock({ as: _Component = _Builtin.Block, inner }) {
  return (
    <_Component className={_utils.cx(_styles, "form-block")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "inner")} tag="div">
        {inner}
      </_Builtin.Block>
    </_Component>
  );
}

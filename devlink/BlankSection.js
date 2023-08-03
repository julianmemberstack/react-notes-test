import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BlankSection.module.css";

export function BlankSection({ as: _Component = _Builtin.Section, container }) {
  return (
    <_Component className={_utils.cx(_styles, "section")} tag="section">
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        {container}
      </_Builtin.Block>
    </_Component>
  );
}

import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PencilBar.module.css";

export function PencilBar({
  as: _Component = _Builtin.Block,
  text = "😍 This site was built in Webflow, but will be moved to React using Devlink 😍",
}) {
  return (
    <_Component className={_utils.cx(_styles, "pencil-bar")} tag="div">
      {text}
    </_Component>
  );
}

import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./LoadingBlock.module.css";

export function LoadingBlock({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "loading-wrap")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "logo")}
        loading="lazy"
        width="auto"
        height="auto"
        src="https://uploads-ssl.webflow.com/64c9f378fba5cc5ff545eca2/64c9feabe2a7676e8f109793_642c6a9bba6d764c713c1522_template%20logo%20black.svg"
      />
      <_Builtin.Heading className={_utils.cx(_styles, "h3")} tag="h1">
        {"Loading Dashboard"}
      </_Builtin.Heading>
    </_Component>
  );
}

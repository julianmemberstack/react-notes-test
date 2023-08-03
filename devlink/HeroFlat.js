import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HeroFlat.module.css";

export function HeroFlat({
  as: _Component = _Builtin.Section,
  h1 = "Welcome back, member",
  p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
}) {
  return (
    <_Component className={_utils.cx(_styles, "section")} tag="section">
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Heading className={_utils.cx(_styles, "h1")} tag="h1">
          {h1}
        </_Builtin.Heading>
        <_Builtin.Paragraph>{p}</_Builtin.Paragraph>
      </_Builtin.Block>
    </_Component>
  );
}

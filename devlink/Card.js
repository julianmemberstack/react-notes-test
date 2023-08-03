import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Card.module.css";

export function Card({
  as: _Component = _Builtin.Block,
  h3 = "Heading",
  p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
}) {
  return (
    <_Component className={_utils.cx(_styles, "card", "spaced")} tag="div">
      <_Builtin.Heading className={_utils.cx(_styles, "h3")} tag="h3">
        {h3}
      </_Builtin.Heading>
      <_Builtin.Paragraph className={_utils.cx(_styles, "p", "mb-0")}>
        {p}
      </_Builtin.Paragraph>
    </_Component>
  );
}

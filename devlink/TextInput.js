import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TextInput.module.css";

export function TextInput({
  as: _Component = _Builtin.Block,
  label = "Something",
  id = "name-3",
  inputprop = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "input-wrap")} tag="div">
      <_Builtin.FormBlockLabel
        className={_utils.cx(_styles, "input-label")}
        htmlFor="name-3"
      >
        {label}
      </_Builtin.FormBlockLabel>
      <_Builtin.Block tag="div" {...inputprop}>
        <_Builtin.FormTextInput
          className={_utils.cx(_styles, "input")}
          autoFocus={false}
          maxLength={256}
          name="name"
          data-name="name"
          type="text"
          disabled={false}
          required={false}
          id={id}
        />
      </_Builtin.Block>
    </_Component>
  );
}

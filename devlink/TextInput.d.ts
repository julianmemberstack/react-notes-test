import * as React from "react";
import * as Types from "./types";

declare function TextInput(props: {
  as?: React.ElementType;
  label?: React.ReactNode;
  id?: Types.Basic.IdTextInput;
  inputprop?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;

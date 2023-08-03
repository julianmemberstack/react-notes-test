import * as React from "react";
import * as Types from "./types";

declare function Button(props: {
  as?: React.ElementType;
  text?: React.ReactNode;
  link?: Types.Basic.Link;
  id?: Types.Basic.IdTextInput;
  makenote?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;

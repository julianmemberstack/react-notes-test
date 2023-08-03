import * as React from "react";
import * as Types from "./types";

declare function Nav(props: {
  as?: React.ElementType;
  login?: Types.Devlink.RuntimeProps;
  signup?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;

import * as React from "react";
import * as Types from "./types";

declare function Hero(props: {
  as?: React.ElementType;
  h1?: React.ReactNode;
  p?: React.ReactNode;
  button1Text?: React.ReactNode;
  button1Link?: Types.Basic.Link;
  button2Text?: React.ReactNode;
  button2Link?: Types.Basic.Link;
  image?: Types.Asset.Image;
}): React.JSX.Element;

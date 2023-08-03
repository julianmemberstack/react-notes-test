import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ValueSection.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-21":{"id":"e-21","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-22"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ea0b925a-841c-29b9-3f52-270a7a8fc92f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ea0b925a-841c-29b9-3f52-270a7a8fc92f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1690960780868}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ValueSection({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section", "dark")} tag="section">
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Grid className={_utils.cx(_styles, "grid_values")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "wrapper_left-text", "flex-gap_20")}
            id={_utils.cx(
              _styles,
              "w-node-ea0b925a-841c-29b9-3f52-270a7a8fc92f-7a8fc92c"
            )}
            data-w-id="ea0b925a-841c-29b9-3f52-270a7a8fc92f"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "wrapper_left-text", "mb-40")}
              tag="div"
            >
              <_Builtin.Heading className={_utils.cx(_styles, "h2")} tag="h2">
                {"We've got strong values"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className={_utils.cx(_styles, "p")}>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "value-item")}
              tag="div"
            >
              <_Builtin.Heading className={_utils.cx(_styles, "h3")} tag="h3">
                {"Integrity"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className={_utils.cx(_styles, "p", "mb-0")}>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "value-item")}
              tag="div"
            >
              <_Builtin.Heading className={_utils.cx(_styles, "h3")} tag="h3">
                {"Strength"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className={_utils.cx(_styles, "p", "mb-0")}>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "value-item")}
              tag="div"
            >
              <_Builtin.Heading className={_utils.cx(_styles, "h3")} tag="h3">
                {"Honesty"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className={_utils.cx(_styles, "p", "mb-0")}>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "value-item")}
              tag="div"
            >
              <_Builtin.Heading className={_utils.cx(_styles, "h3")} tag="h3">
                {"Diversity"}
              </_Builtin.Heading>
              <_Builtin.Paragraph className={_utils.cx(_styles, "p", "mb-0")}>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Image
            className={_utils.cx(_styles, "image_stretch", "sticky")}
            id={_utils.cx(
              _styles,
              "w-node-ea0b925a-841c-29b9-3f52-270a7a8fc949-7a8fc92c"
            )}
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/64c9f378fba5cc5ff545eca2/64ca0089a1974f6da42f62b6_pexels-kevin-malik-9032693.jpg"
          />
        </_Builtin.Grid>
      </_Builtin.Block>
    </_Component>
  );
}

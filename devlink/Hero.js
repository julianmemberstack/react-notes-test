import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Hero.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"06a29d81-e628-8800-7847-89bd04d52765","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"06a29d81-e628-8800-7847-89bd04d52765","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":150,"direction":"BOTTOM","effectIn":true},"createdOn":1690960667828}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Hero({
  as: _Component = _Builtin.Section,
  h1 = "Save your notes with our amazing React app",
  p = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  button1Text = "Get started",

  button1Link = {
    href: "#",
  },

  button2Text = "Learn more",

  button2Link = {
    href: "#",
  },

  image = "https://uploads-ssl.webflow.com/64c9f378fba5cc5ff545eca2/64c9f6a58ad487d0a8a8c706_pexels-anna-nekrashevich-7550891.jpg",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section")} tag="section">
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Grid className={_utils.cx(_styles, "grid_section")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "wrapper_left-text")}
            id={_utils.cx(
              _styles,
              "w-node-_06a29d81-e628-8800-7847-89bd04d52765-04d52762"
            )}
            data-w-id="06a29d81-e628-8800-7847-89bd04d52765"
            tag="div"
          >
            <_Builtin.Heading className={_utils.cx(_styles, "h1")} tag="h1">
              {h1}
            </_Builtin.Heading>
            <_Builtin.Paragraph className={_utils.cx(_styles, "p", "mb-40")}>
              {p}
            </_Builtin.Paragraph>
            <_Builtin.Block
              className={_utils.cx(_styles, "wrapper_2-buttons")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "button")}
                button={true}
                options={button1Link}
              >
                {button1Text}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "button", "secondary")}
                button={true}
                options={button2Link}
              >
                {button2Text}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Image
            className={_utils.cx(_styles, "image_hero")}
            id={_utils.cx(
              _styles,
              "w-node-_06a29d81-e628-8800-7847-89bd04d5276f-04d52762"
            )}
            loading="lazy"
            width="auto"
            height="auto"
            src={image}
          />
        </_Builtin.Grid>
      </_Builtin.Block>
    </_Component>
  );
}

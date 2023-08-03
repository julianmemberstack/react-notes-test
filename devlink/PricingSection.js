import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./PricingSection.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-47":{"id":"e-47","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-48"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"955ecdb6-d1c5-20ac-27ed-c6784ab4889c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"955ecdb6-d1c5-20ac-27ed-c6784ab4889c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1690965844423},"e-49":{"id":"e-49","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-50"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"955ecdb6-d1c5-20ac-27ed-c6784ab48896","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"955ecdb6-d1c5-20ac-27ed-c6784ab48896","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1690965844423},"e-51":{"id":"e-51","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-52"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"955ecdb6-d1c5-20ac-27ed-c6784ab488d2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"955ecdb6-d1c5-20ac-27ed-c6784ab488d2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":300,"direction":"BOTTOM","effectIn":true},"createdOn":1690965844423},"e-53":{"id":"e-53","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-54"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"955ecdb6-d1c5-20ac-27ed-c6784ab488b4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"955ecdb6-d1c5-20ac-27ed-c6784ab488b4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":150,"direction":"BOTTOM","effectIn":true},"createdOn":1690965844423}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function PricingSection({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section")} tag="section">
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "wrapper_center-text", "mb-40")}
          data-w-id="955ecdb6-d1c5-20ac-27ed-c6784ab48896"
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "h2", "center")}
            tag="h2"
          >
            {"Fair pricing for all companies"}
          </_Builtin.Heading>
          <_Builtin.Paragraph className={_utils.cx(_styles, "p")}>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            }
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.Grid className={_utils.cx(_styles, "grid_cards")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "card_pricing")}
            id={_utils.cx(
              _styles,
              "w-node-_955ecdb6-d1c5-20ac-27ed-c6784ab4889c-4ab48894"
            )}
            data-w-id="955ecdb6-d1c5-20ac-27ed-c6784ab4889c"
            tag="div"
          >
            <_Builtin.Block className={_utils.cx(_styles, "price")} tag="div">
              {"$"}
              <_Builtin.Strong>{"0"}</_Builtin.Strong>
            </_Builtin.Block>
            <_Builtin.Heading className={_utils.cx(_styles, "h3")} tag="h3">
              {"Free forever"}
            </_Builtin.Heading>
            <_Builtin.Paragraph className={_utils.cx(_styles, "p")}>
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </_Builtin.Paragraph>
            <_Builtin.Grid
              className={_utils.cx(_styles, "feature-list")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "feature-wrap")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icon-3")}
                  value="%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.0002%2015.172L19.1922%205.979L20.6072%207.393L10.0002%2018L3.63623%2011.636L5.05023%2010.222L10.0002%2015.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "feature-label")}
                  tag="div"
                >
                  {"Some cool feature"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "feature-wrap")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icon-3")}
                  value="%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.0002%2015.172L19.1922%205.979L20.6072%207.393L10.0002%2018L3.63623%2011.636L5.05023%2010.222L10.0002%2015.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "feature-label")}
                  tag="div"
                >
                  {"Some cool feature"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "feature-wrap")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icon-3")}
                  value="%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.0002%2015.172L19.1922%205.979L20.6072%207.393L10.0002%2018L3.63623%2011.636L5.05023%2010.222L10.0002%2015.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "feature-label")}
                  tag="div"
                >
                  {"Some cool feature"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Grid>
            <_Builtin.Link
              className={_utils.cx(_styles, "button")}
              button={true}
              options={{
                href: "#",
              }}
            >
              {"Get started"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "card_pricing", "featured")}
            id={_utils.cx(
              _styles,
              "w-node-_955ecdb6-d1c5-20ac-27ed-c6784ab488b4-4ab48894"
            )}
            data-w-id="955ecdb6-d1c5-20ac-27ed-c6784ab488b4"
            tag="div"
          >
            <_Builtin.Block className={_utils.cx(_styles, "price")} tag="div">
              {"$"}
              <_Builtin.Strong>{"8"}</_Builtin.Strong>
            </_Builtin.Block>
            <_Builtin.Heading className={_utils.cx(_styles, "h3")} tag="h3">
              {"Premium"}
            </_Builtin.Heading>
            <_Builtin.Paragraph className={_utils.cx(_styles, "p")}>
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </_Builtin.Paragraph>
            <_Builtin.Grid
              className={_utils.cx(_styles, "feature-list")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "feature-wrap")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icon-3")}
                  value="%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.0002%2015.172L19.1922%205.979L20.6072%207.393L10.0002%2018L3.63623%2011.636L5.05023%2010.222L10.0002%2015.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "feature-label")}
                  tag="div"
                >
                  {"Some cool feature"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "feature-wrap")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icon-3")}
                  value="%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.0002%2015.172L19.1922%205.979L20.6072%207.393L10.0002%2018L3.63623%2011.636L5.05023%2010.222L10.0002%2015.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "feature-label")}
                  tag="div"
                >
                  {"Some cool feature"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "feature-wrap")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icon-3")}
                  value="%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.0002%2015.172L19.1922%205.979L20.6072%207.393L10.0002%2018L3.63623%2011.636L5.05023%2010.222L10.0002%2015.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "feature-label")}
                  tag="div"
                >
                  {"Some cool feature"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "feature-wrap")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icon-3")}
                  value="%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.0002%2015.172L19.1922%205.979L20.6072%207.393L10.0002%2018L3.63623%2011.636L5.05023%2010.222L10.0002%2015.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "feature-label")}
                  tag="div"
                >
                  {"Some cool feature"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Grid>
            <_Builtin.Link
              className={_utils.cx(_styles, "button")}
              button={true}
              options={{
                href: "#",
              }}
            >
              {"Get started"}
            </_Builtin.Link>
            <_Builtin.Block
              className={_utils.cx(_styles, "featured-text")}
              tag="div"
            >
              {"FEATURED"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "card_pricing")}
            id={_utils.cx(
              _styles,
              "w-node-_955ecdb6-d1c5-20ac-27ed-c6784ab488d2-4ab48894"
            )}
            data-w-id="955ecdb6-d1c5-20ac-27ed-c6784ab488d2"
            tag="div"
          >
            <_Builtin.Block className={_utils.cx(_styles, "price")} tag="div">
              {"$"}
              <_Builtin.Strong>{"25"}</_Builtin.Strong>
            </_Builtin.Block>
            <_Builtin.Heading className={_utils.cx(_styles, "h3")} tag="h3">
              {"Unlimited"}
            </_Builtin.Heading>
            <_Builtin.Paragraph className={_utils.cx(_styles, "p")}>
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </_Builtin.Paragraph>
            <_Builtin.Grid
              className={_utils.cx(_styles, "feature-list")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "feature-wrap")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icon-3")}
                  value="%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.0002%2015.172L19.1922%205.979L20.6072%207.393L10.0002%2018L3.63623%2011.636L5.05023%2010.222L10.0002%2015.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "feature-label")}
                  tag="div"
                >
                  {"Some cool feature"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "feature-wrap")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icon-3")}
                  value="%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.0002%2015.172L19.1922%205.979L20.6072%207.393L10.0002%2018L3.63623%2011.636L5.05023%2010.222L10.0002%2015.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "feature-label")}
                  tag="div"
                >
                  {"Some cool feature"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "feature-wrap")}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icon-3")}
                  value="%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewbox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.0002%2015.172L19.1922%205.979L20.6072%207.393L10.0002%2018L3.63623%2011.636L5.05023%2010.222L10.0002%2015.172Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "feature-label")}
                  tag="div"
                >
                  {"Some cool feature"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Grid>
            <_Builtin.Link
              className={_utils.cx(_styles, "button")}
              button={true}
              options={{
                href: "#",
              }}
            >
              {"Get started"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Block>
    </_Component>
  );
}

import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./FaqSection.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-43":{"id":"e-43","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-44"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".wrap_faq_q","originalId":"ae07735c-f015-a2c3-764e-bde487ab940e","appliesTo":"CLASS"},"targets":[{"selector":".wrap_faq_q","originalId":"ae07735c-f015-a2c3-764e-bde487ab940e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690963371441},"e-44":{"id":"e-44","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-43"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".wrap_faq_q","originalId":"ae07735c-f015-a2c3-764e-bde487ab940e","appliesTo":"CLASS"},"targets":[{"selector":".wrap_faq_q","originalId":"ae07735c-f015-a2c3-764e-bde487ab940e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690963371442},"e-45":{"id":"e-45","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-46"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".wrap_faq","originalId":"ae07735c-f015-a2c3-764e-bde487ab940d","appliesTo":"CLASS"},"targets":[{"selector":".wrap_faq","originalId":"ae07735c-f015-a2c3-764e-bde487ab940d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1690963805536},"e-57":{"id":"e-57","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-58"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".wrap_faq_q","originalId":"64c9f378fba5cc5ff545eca9|df532bf9-e491-52ba-7716-a9432cc7a776","appliesTo":"CLASS"},"targets":[{"selector":".wrap_faq_q","originalId":"64c9f378fba5cc5ff545eca9|df532bf9-e491-52ba-7716-a9432cc7a776","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690965844423},"e-58":{"id":"e-58","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-57"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".wrap_faq_q","originalId":"64c9f378fba5cc5ff545eca9|df532bf9-e491-52ba-7716-a9432cc7a776","appliesTo":"CLASS"},"targets":[{"selector":".wrap_faq_q","originalId":"64c9f378fba5cc5ff545eca9|df532bf9-e491-52ba-7716-a9432cc7a776","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690965844423},"e-59":{"id":"e-59","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-60"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".wrap_faq","originalId":"64c9f378fba5cc5ff545eca9|df532bf9-e491-52ba-7716-a9432cc7a775","appliesTo":"CLASS"},"targets":[{"selector":".wrap_faq","originalId":"64c9f378fba5cc5ff545eca9|df532bf9-e491-52ba-7716-a9432cc7a775","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1690965844423},"e-85":{"id":"e-85","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-86"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"10800dc3-e533-d729-64e1-05d9975ccf31","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"10800dc3-e533-d729-64e1-05d9975ccf31","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1690965897813}},"actionLists":{"a-3":{"id":"a-3","title":"FAQ Open","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".wrap_faq_a","selectorGuids":["90bce76e-28d2-0f25-8a6b-fb6dfa29cd0c"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-3-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["5f4803ce-78c6-0ad1-7e8c-ae2522ab8dc7"]},"zValue":-90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-3-n-5","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".wrap_faq","selectorGuids":["64a0e39d-36f0-365e-238a-7a17ef7b591d"]},"globalSwatchId":"2ec0cb34","rValue":240,"bValue":240,"gValue":240,"aValue":1}}]},{"actionItems":[{"id":"a-3-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".wrap_faq_a","selectorGuids":["90bce76e-28d2-0f25-8a6b-fb6dfa29cd0c"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-3-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["5f4803ce-78c6-0ad1-7e8c-ae2522ab8dc7"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-3-n-6","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"PARENT","selector":".wrap_faq","selectorGuids":["64a0e39d-36f0-365e-238a-7a17ef7b591d"]},"globalSwatchId":"60758858","rValue":7,"bValue":34,"gValue":7,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1690963377706},"a-4":{"id":"a-4","title":"FAQ Close","actionItemGroups":[{"actionItems":[{"id":"a-4-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".wrap_faq_a","selectorGuids":["90bce76e-28d2-0f25-8a6b-fb6dfa29cd0c"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-4-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["5f4803ce-78c6-0ad1-7e8c-ae2522ab8dc7"]},"zValue":-90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-4-n-6","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"PARENT","selector":".wrap_faq","selectorGuids":["64a0e39d-36f0-365e-238a-7a17ef7b591d"]},"globalSwatchId":"2ec0cb34","rValue":240,"bValue":240,"gValue":240,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1690963377706},"a-5":{"id":"a-5","title":"FAQ Open 2","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".wrap_faq_a","selectorGuids":["90bce76e-28d2-0f25-8a6b-fb6dfa29cd0c"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-5-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["5f4803ce-78c6-0ad1-7e8c-ae2522ab8dc7"]},"zValue":-90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-5-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".wrap_faq","selectorGuids":["64a0e39d-36f0-365e-238a-7a17ef7b591d"]},"globalSwatchId":"2ec0cb34","rValue":240,"bValue":240,"gValue":240,"aValue":1}}]},{"actionItems":[{"id":"a-5-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".wrap_faq_a","selectorGuids":["90bce76e-28d2-0f25-8a6b-fb6dfa29cd0c"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-5-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["5f4803ce-78c6-0ad1-7e8c-ae2522ab8dc7"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-5-n-6","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"PARENT","selector":".wrap_faq","selectorGuids":["64a0e39d-36f0-365e-238a-7a17ef7b591d"]},"globalSwatchId":"60758858","rValue":7,"bValue":34,"gValue":7,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1690963377706},"a-6":{"id":"a-6","title":"FAQ Close 2","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".wrap_faq_a","selectorGuids":["90bce76e-28d2-0f25-8a6b-fb6dfa29cd0c"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-6-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon","selectorGuids":["5f4803ce-78c6-0ad1-7e8c-ae2522ab8dc7"]},"zValue":-90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-6-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"PARENT","selector":".wrap_faq","selectorGuids":["64a0e39d-36f0-365e-238a-7a17ef7b591d"]},"globalSwatchId":"2ec0cb34","rValue":240,"bValue":240,"gValue":240,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1690963377706},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FaqSection({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section")} tag="section">
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "wrapper_left-text", "mb-40")}
          data-w-id="10800dc3-e533-d729-64e1-05d9975ccf31"
          tag="div"
        >
          <_Builtin.Heading className={_utils.cx(_styles, "h2")} tag="h2">
            {"Frequently asked questions"}
          </_Builtin.Heading>
          <_Builtin.Paragraph className={_utils.cx(_styles, "p")}>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            }
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "wrap_faq_all")}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "wrap_faq")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "wrap_faq_q")}
              tag="div"
            >
              <_Builtin.Heading className={_utils.cx(_styles, "h4")} tag="h4">
                {"What happens if I go over the plan limits?"}
              </_Builtin.Heading>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icon")}
                value="%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.5899%2016.0039L5.98193%207.39691L7.39593%205.98291L16.0029%2014.5889V7.00391H18.0029V18.0039H7.00293V16.0039H14.5899Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "wrap_faq_a")}
              tag="div"
            >
              <_Builtin.Paragraph className={_utils.cx(_styles, "p", "mb-40")}>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "wrap_faq")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "wrap_faq_q")}
              tag="div"
            >
              <_Builtin.Heading className={_utils.cx(_styles, "h4")} tag="h4">
                {"What happens if I go over the plan limits?"}
              </_Builtin.Heading>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icon")}
                value="%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.5899%2016.0039L5.98193%207.39691L7.39593%205.98291L16.0029%2014.5889V7.00391H18.0029V18.0039H7.00293V16.0039H14.5899Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "wrap_faq_a")}
              tag="div"
            >
              <_Builtin.Paragraph className={_utils.cx(_styles, "p", "mb-40")}>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "wrap_faq")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "wrap_faq_q")}
              tag="div"
            >
              <_Builtin.Heading className={_utils.cx(_styles, "h4")} tag="h4">
                {"What happens if I go over the plan limits?"}
              </_Builtin.Heading>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icon")}
                value="%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.5899%2016.0039L5.98193%207.39691L7.39593%205.98291L16.0029%2014.5889V7.00391H18.0029V18.0039H7.00293V16.0039H14.5899Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "wrap_faq_a")}
              tag="div"
            >
              <_Builtin.Paragraph className={_utils.cx(_styles, "p", "mb-40")}>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "wrap_faq")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "wrap_faq_q")}
              tag="div"
            >
              <_Builtin.Heading className={_utils.cx(_styles, "h4")} tag="h4">
                {"What happens if I go over the plan limits?"}
              </_Builtin.Heading>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icon")}
                value="%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.5899%2016.0039L5.98193%207.39691L7.39593%205.98291L16.0029%2014.5889V7.00391H18.0029V18.0039H7.00293V16.0039H14.5899Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "wrap_faq_a")}
              tag="div"
            >
              <_Builtin.Paragraph className={_utils.cx(_styles, "p", "mb-40")}>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "wrap_faq")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "wrap_faq_q")}
              tag="div"
            >
              <_Builtin.Heading className={_utils.cx(_styles, "h4")} tag="h4">
                {"What happens if I go over the plan limits?"}
              </_Builtin.Heading>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icon")}
                value="%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.5899%2016.0039L5.98193%207.39691L7.39593%205.98291L16.0029%2014.5889V7.00391H18.0029V18.0039H7.00293V16.0039H14.5899Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "wrap_faq_a")}
              tag="div"
            >
              <_Builtin.Paragraph className={_utils.cx(_styles, "p", "mb-40")}>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "wrap_faq")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "wrap_faq_q")}
              tag="div"
            >
              <_Builtin.Heading className={_utils.cx(_styles, "h4")} tag="h4">
                {"What happens if I go over the plan limits?"}
              </_Builtin.Heading>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "icon")}
                value="%3Csvg%20width%3D%22420%22%20height%3D%22420%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.5899%2016.0039L5.98193%207.39691L7.39593%205.98291L16.0029%2014.5889V7.00391H18.0029V18.0039H7.00293V16.0039H14.5899Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E%0A"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "wrap_faq_a")}
              tag="div"
            >
              <_Builtin.Paragraph className={_utils.cx(_styles, "p", "mb-40")}>
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Nav.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"bc9997fb-143e-0df6-7954-bf807de73e8d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bc9997fb-143e-0df6-7954-bf807de73e8d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680617889749},"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"bc9997fb-143e-0df6-7954-bf807de73e8d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bc9997fb-143e-0df6-7954-bf807de73e8d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1680617889749},"e-93":{"id":"e-93","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-94"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"ace055e6-2487-c827-0249-633e3dd10714","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ace055e6-2487-c827-0249-633e3dd10714","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690977403478},"e-94":{"id":"e-94","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-93"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"ace055e6-2487-c827-0249-633e3dd10714","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ace055e6-2487-c827-0249-633e3dd10714","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1690977403478}},"actionLists":{"a":{"id":"a","title":"Hamburger Open","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"value":1,"unit":""}},{"id":"a-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":0,"unit":""}},{"id":"a-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":"none"}},{"id":"a-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":0,"unit":""}},{"id":"a-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":"none"}}]},{"actionItems":[{"id":"a-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":1,"unit":""}},{"id":"a-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":1,"unit":""}},{"id":"a-n-15","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-16","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"yValue":7,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"yValue":-7,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"value":0,"unit":""}},{"id":"a-n-20","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-n-21","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":"flex"}},{"id":"a-n-22","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1680617893763},"a-2":{"id":"a-2","title":"Hamburger Close","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-2-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-2-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"value":1,"unit":""}},{"id":"a-2-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":0,"unit":""}},{"id":"a-2-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-2-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":"none"}}]},{"actionItems":[{"id":"a-2-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1680617893763},"a-7":{"id":"a-7","title":"Hamburger Open 2","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-7-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-7-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"value":1,"unit":""}},{"id":"a-7-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-7-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-7-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":0,"unit":""}},{"id":"a-7-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":"none"}},{"id":"a-7-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":0,"unit":""}},{"id":"a-7-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":"none"}}]},{"actionItems":[{"id":"a-7-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-7-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":1,"unit":""}},{"id":"a-7-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":1,"unit":""}},{"id":"a-7-n-15","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-7-n-16","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-7-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"yValue":7,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-18","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"yValue":-7,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"value":0,"unit":""}},{"id":"a-7-n-20","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-7-n-21","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":"flex"}},{"id":"a-7-n-22","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":"block"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1680617893763},"a-8":{"id":"a-8","title":"Hamburger Close 2","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":500,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"xValue":100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-8-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-8-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.mid","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d24"]},"value":1,"unit":""}},{"id":"a-8-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-8-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-8-n-6","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.bot","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d25"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-8-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".hamburger-line.top","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1f","90e49d80-f42d-8376-7fb8-cc8142445d23"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-8-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":0,"unit":""}},{"id":"a-8-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-8-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":".shadow","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d18"]},"value":"none"}}]},{"actionItems":[{"id":"a-8-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"outQuad","duration":0,"target":{"selector":"._02-nav-menu","selectorGuids":["90e49d80-f42d-8376-7fb8-cc8142445d1c"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1680617893763}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Nav({
  as: _Component = _Builtin.Block,
  login = {},
  signup = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "navbar")} tag="section">
      <_Builtin.Block className={_utils.cx(_styles, "mobile-nav")} tag="div">
        <_Builtin.Link
          className={_utils.cx(_styles, "brand")}
          button={false}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/64c9f378fba5cc5ff545eca2/64c9fee293996cd82511d119_6435356fd7ef3c357bfc5ca2_logo.svg"
          />
        </_Builtin.Link>
        <_Builtin.Block
          className={_utils.cx(_styles, "animated-hamburger")}
          data-w-id="bc9997fb-143e-0df6-7954-bf807de73e8d"
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "hamburger-line", "top")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "hamburger-line", "mid")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "hamburger-line", "bot")}
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "_02-nav-menu")} tag="div">
        <_Builtin.Link
          className={_utils.cx(_styles, "brand", "in-nav")}
          button={false}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/64c9f378fba5cc5ff545eca2/64c9fee293996cd82511d119_6435356fd7ef3c357bfc5ca2_logo.svg"
          />
        </_Builtin.Link>
        <_Builtin.Block
          className={_utils.cx(_styles, "nav-menu-center")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "nav-link")}
            button={false}
            options={{
              href: "#",
            }}
          >
            {"Home"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "nav-link")}
            button={false}
            options={{
              href: "#",
            }}
          >
            {"About us"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "nav-link")}
            button={false}
            options={{
              href: "#",
            }}
          >
            {"Pricing"}
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "nav-button-wrap")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "nav-link")}
            button={false}
            options={{
              href: "#",
            }}
            {...login}
          >
            {"Login"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "button", "nav")}
            button={true}
            data-ms-modal="signup"
            options={{
              href: "#",
            }}
            {...signup}
          >
            {"Signup"}
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "shadow")} tag="div" />
    </_Component>
  );
}

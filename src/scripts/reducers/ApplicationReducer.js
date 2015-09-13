"use strict";

import Immutable from "immutable";

const initialState = Immutable.fromJS({
  "count": 0,
  "notification": null
});

export default function(state = initialState, action) {
  switch ( action.type ) {
    case "BUTTON_PRESS":
      return state.set("count", state.get("count") + 1)
        .set("notification", "Button pressed!");
    default:
      return state;
  }
}

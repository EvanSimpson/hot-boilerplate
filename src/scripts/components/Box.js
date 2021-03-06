import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

import Icon from "./Icon";
import { button, icon, notification } from "./Box.css";

var svg = require("../../assets/images/checkmark.svg");

@connect ( ({ Application }) => {
  return {
    state: Application
  }
})
export default class Box extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired
  }

  handleButtonClick(evt) {
    evt.preventDefault();
    const { props: { dispatch } } = this;
    dispatch({type: "BUTTON_PRESS"});
  }

  getNotification() {
    if ( this.props.state.get("notification") === "Button pressed!") {
      return (
        <div className={ notification }>
          <FormattedMessage
            count={ this.props.state.get("count") }
            message={ "Button clicked {count} times!" }
            />
        </div>
      );
    }
    return null;
  }

  render() {
    const notification = this.getNotification();
    return (
      <div>
        { notification }
        <h3>{ "Click the button to see devtools in action" }</h3>
        <button className={ button } onClick={ ::this.handleButtonClick }>
          { "Button!" }
        </button>
        <Icon
          className={ icon }
          svg={ svg }
          />
      </div>
    );
  }
}

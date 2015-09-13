import React, { PropTypes } from "react";

export default class Icon extends React.Component {

    static propTypes = {
      svg: PropTypes.string.isRequired
    }

    render() {
      return (
          <i { ...this.props }
             dangerouslySetInnerHTML={ { __html: this.props.svg } }
             svg={ null }
             >
          </i>
      );
    }
}

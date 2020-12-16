
import React from "react";

export default class HeaderAppClass extends React.Component {
    constructor(props) {
        super(props)
        this.defaultText = "MISSING_HEADER_TEXT";
        this.classNameFromCss = "classNameFromCss"
    }

    render() {
        return (<h2 style={{ color: this.props.color }} className={this.classNameFromCss}>
            {this.props.headerText || this.defaultText}
        </h2>)
    }
}
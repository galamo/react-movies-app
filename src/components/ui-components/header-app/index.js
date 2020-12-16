import React from "react"


export default function HeaderApp(props) {
    const classNameFromCss = "uglyHeader";
    // if (!props.headerText) return null;
    const defaultText = "MISSING_HEADER_TEXT";
    return (
        <h2 style={{ color: props.color }} className={classNameFromCss}>
            {props.headerText || defaultText}
        </h2>
    );
}
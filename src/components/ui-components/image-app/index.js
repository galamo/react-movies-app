import React from "react"

export default function ImageApp(props) {
    // const { src } = props;
    const src = props.src;
    const defaultSrcImage =
        "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483097.jpg";
    const srcParam = src || defaultSrcImage;
    return (
        <img className="card-img-top" src={srcParam} height={300} width={300} />
    );
}
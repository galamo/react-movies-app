import React, { useState } from "react"
import { StarFill, Star } from 'react-bootstrap-icons';



export default function RankComponent(props) {
    const { rank = 1 } = props
    const stars = _getStars()
    return <span> {stars}</span>

    function _getStars() {
        const starsIcons = [];
        for (let index = 0; index < rank; index++) {
            starsIcons.push(<StarFill />)

        }
        return starsIcons;
    }
}





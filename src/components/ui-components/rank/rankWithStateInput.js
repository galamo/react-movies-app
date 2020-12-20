import React, { useState } from "react"
import { StarFill, Star } from 'react-bootstrap-icons';




export default function RankWithStateInput() {

    const [numberOfStars, setNumberOfStars] = useState(-1)

    const stars = _getStars()

    return <div>
        <input type={"number"} onChange={(event) => { setNumberOfStars(Number(event.target.value)) }} />
        <span> {stars}</span>
    </div>

    function _getStars() {
        const starsIcons = [];
        for (let index = 0; index < numberOfStars; index++) {
            starsIcons.push(<StarFill key={index} />)

        }
        return starsIcons;
    }
}




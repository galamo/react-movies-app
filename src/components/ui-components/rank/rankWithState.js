import React, { useState } from "react"
import { StarFill, Star } from 'react-bootstrap-icons';




export default function RankWithState() {

    const [selectedStars, setSelectedStars] = useState(-1)

    const stars = _getStars()
    return <span> {stars}</span>

    function _getStars() {
        const starsIcons = [];
        for (let index = 0; index < 10; index++) {
            const props = { key: index, onClick: () => setSelectedStars(index) }
            const currentStar = selectedStars >= index ? <StarFill {...props} /> : <Star {...props} />
            starsIcons.push(currentStar)
        }
        return starsIcons;
    }
}




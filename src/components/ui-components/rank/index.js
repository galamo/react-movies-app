import React from "react"



export default function RankComponent(props) {
    const { rank = 1 } = props
    return <span> {rank} </span>
}
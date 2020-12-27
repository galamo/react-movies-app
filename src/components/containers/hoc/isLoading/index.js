import React from "react"
import "./index.css" // global CSS
import css from "./style.module.css" // local CSS


export default function WithLoading(Component) {
    return function withLoadingComponent(props) {
        const { isLoading, ...restOfProps } = props
        if (!isLoading) return <Component  {...restOfProps} />
        return <div className={css.customContainer}>
            <div className={"loader"}></div>
        </div>
    }
    // props = { isLoading:true, a:1 , b:1, moviesList:[], bb: "blabla" }
}


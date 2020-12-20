
import React from "react";

export default class FilterAppClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = { searchValue: "" }
    }

    filterOperation = () => {
        const { filterOutside } = this.props
        if (typeof filterOutside !== "function") return;
        filterOutside(this.state.searchValue)
    }

    render() {
        console.log("render on change input...")
        return (<div>
            <div className="container">
                <div className="row mb-2">
                    <input type="text" onChange={(e) => {
                        this.setState({
                            ...this.state, searchValue: e.target.value
                        })
                    }} />
                    <button className="btn btn-primary" onClick={this.filterOperation} > Filter </button>
                </div>
            </div>
        </div>)
    }
}
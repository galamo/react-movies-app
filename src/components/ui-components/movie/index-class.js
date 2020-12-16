import React from "react"
import ImageApp from "../image-app";
import RankComponent from "../rank/index";



export default class MovieCardClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = { isAdditionalInfoOpened: false, cardColor: "white" } // initial state 
    }

    additionalInfoAction = () => {
        console.log("this.state.isAdditionalInfoOpened", this.state.isAdditionalInfoOpened)
        const isOpen = this.state.isAdditionalInfoOpened
        this.setState({
            ...this.state, isAdditionalInfoOpened: !isOpen
        })
    }

    changeColor = () => {
        const isWhite = this.state.cardColor === "white"
        this.setState({
            ...this.state, cardColor: isWhite ? "red" : "white"
        })
    }

    showAdditionalInfo = () => {
        const { isAdditionalInfoOpened } = this.state
        return isAdditionalInfoOpened ? <div>
            Additional info2
             </div> : null
    }

    render() {
        console.log("RenderMovie executed", this.props.Title)
        const { Title, Year, Poster, Type, imdbID, showImage, Rank } = this.props;
        return (
            <div style={{ background: this.state.cardColor }} className="card col-lg-3">
                {showImage && <ImageApp src={Poster} />}
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text">{Year}</p>
                    <p className="card-text">{Type}</p>
                    <p className="card-text">{imdbID}</p>

                    <a
                        href={`http://www.omdbapi.com/?apikey=ce8afb69&i=${imdbID}`}
                        className="btn btn-primary"
                    >
                        Go to Movie
                  </a>
                    <div className="row mt-2">
                        <button className={"btn btn-primary col-6"} onClick={this.additionalInfoAction} > More Info </button>
                        <button className={"btn btn-primary col-6"} onClick={this.changeColor} > color </button>
                    </div>
                    <div className="row mt-2">
                        <RankComponent rank={Rank} />
                        <RankComponent rank={Rank} />
                        <RankComponent rank={Rank} />
                        <RankComponent rank={Rank} />
                    </div>
                    {this.showAdditionalInfo()}
                </div>
            </div>
        );
    }
}
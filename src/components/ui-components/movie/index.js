import React, { useState } from "react"
import ImageApp from "../image-app";
import RankComponent from "../rank/index";
import RankWithState from "../rank/rankWithState";


export default function Movie(props) {
    // this.state.isAdditionalInfoOpened  this.setState    // this.state = {isAdditionalInfoOpened:false}
    const [isAdditionalInfoOpened, setAdditionalInfo] = useState(false)
    const [cardColor, setCardColor] = useState(null)

    const showAdditionalInfo = () => {
        return isAdditionalInfoOpened ? <div>
            <div>
                <div>Please Rank:</div>
                <RankWithState />
            </div>
        </div> : null
    }

    const additionalInfoAction = () => {
        setAdditionalInfo(!isAdditionalInfoOpened)
    }
    const setCardColorAction = () => {
        setCardColor("red")
    }

    const { Title, Year, Poster, Type, imdbID, showImage, Rank } = props;
    return (
        <div style={{ background: cardColor }} className="card col-lg-3">
            {showImage && <ImageApp src={Poster} />}
            <div className="card-body">
                <h5 className="card-title">{Title}</h5>
                <p className="card-text">{Year}</p>

                <p className="card-text">{imdbID}</p>

                <a
                    href={`http://www.omdbapi.com/?apikey=ce8afb69&i=${imdbID}`}
                    className="btn btn-primary"
                >
                    Go to Movie
              </a>
                <div className="row mt-2">
                    <button className={"btn btn-primary col-6"} onClick={additionalInfoAction} > More Info </button>
                    <button className={"btn btn-primary col-6"} onClick={setCardColorAction} > color </button>
                </div>
                <div className="row mt-2">
                    <RankComponent rank={Rank} />

                </div>
                <div className="row mt-2">

                </div>
                {showAdditionalInfo()}
            </div>
        </div>
    );
}



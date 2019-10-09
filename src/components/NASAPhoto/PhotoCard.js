import React from "react";


const PhotoCard = props => {
    return (
        <div className="photo-img" >
            <img src={props.data.url} />
            <h2>Photo Title: {props.data.title}</h2>
            <p>Explanation:  {props.data.explanation}</p>
            <div className="bottom">
                <p>Qoute: </p>
                <p>Date: {props.data.date}</p>
            </div>
        </div>
    );
};
export default PhotoCard;
import React from "react";


const PhotoCard = props => {
    return (
        <div className="photo-img" >
            <img src={props.data.url} alt='NASA pick of the day' />
            <h2>Photo Title: {props.data.title}</h2>
            <p>Date: {props.data.date}</p>
            <p>Explanation:  {props.data.explanation}</p>
            <div className="bottom">
                <p>"{props.qdata.quote}"</p>
                <p>{props.qdata.author} - author</p>
                {/* <p>Date: {props.qdata.date}</p> */}
            </div>
        </div>
    );
};
export default PhotoCard;
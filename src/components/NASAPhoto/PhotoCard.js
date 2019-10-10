import React from "react";


const PhotoCard = props => {
    return (
        <div className="photo-nasa" >
            <img src={props.data.url} alt='NASA pick of the day' />
            <h2>Photo Title: {props.data.title}</h2>
            <span>Date: 🚀{props.data.date}🚀</span>
            <p>Explanation:  {props.data.explanation}</p>
            <div className="bottom-quote">
                <p>"{props.qdata.quote}"</p>
                <p>- {props.qdata.author}</p>
                {/* <p>Date: {props.qdata.date}</p> */}
            </div>
        </div>
    );
};
export default PhotoCard;
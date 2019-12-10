import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";


export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState({});
    const [qData, setQData] = useState({});
    useEffect(() => {
        axios
            .get(`http://quotes.rest/qod.json`)
            .then((response) => {
                console.log(response);
                setQData(response.data.contents.quotes[0]);

            })
            .catch(error => {
                console.log("the data was not return", error);
            });
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(response => {
                console.log(response);
                setPhotoData(response.data);
            })
            .catch(error => {
                console.log("the data was not return", error);
            });
    }, []);
    return (
        <div className="photoOfTheDay">
            {
                <PhotoCard
                    data={photoData}
                    qdata={qData}
                />
            }
        </div>
    );
}

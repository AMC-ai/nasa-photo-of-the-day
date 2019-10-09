import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";


export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState({});

    useEffect(() => {
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
        <span className="photoOfTheDay">
            {
                <PhotoCard
                    data={photoData}


                />
            }
        </span>
    );
}

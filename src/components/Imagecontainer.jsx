import React from "react";

export default function ImageContainer({url}){
    return(
        <div className="image-container">
            <img className="carousel-image" src={url}/>
        </div>
    )
}
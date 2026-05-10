import React from "react";
import { useEffect, useState } from "react";
import ImageContainer from "./Imagecontainer";

export default function Carousel({images}) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (!images.length) return;

        const intervalId = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [images.length]);
    
    useEffect(()=>{
        if (index == images.length){
            setIndex(0)
        }
    }, [index])

    return(
        <div className="carousel-container">
            <ImageContainer url={images[index]}/>
        </div>
    )
}
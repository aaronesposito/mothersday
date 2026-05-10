import React from "react";
import { useEffect, useState } from "react";
import ImageContainer from "./Imagecontainer";

export default function Carousel({urls}) {
    const [count, setCount] = useState(0)
    const [currImage, setCurrImage] = useState(0)
    const [url, setUrl] = useState(urls[currImage])

    const handleImageChange=()=>{
        if (currImage == urls.length-1) {
            setCurrImage(0)
        }else{
            setCurrImage(currImage+1)
        }
        setUrl(urls[currImage])
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(intervalId);

    }, []); 
    
    useEffect(()=>{
        if (count%5==0){
            handleImageChange()
        }
    }, [count])

    return(
        <div className="carousel-container">
            <ImageContainer url={url}/>
        </div>
    )
}
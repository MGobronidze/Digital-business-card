import React from "react";
import imageF from "./images/Facebook-icon.png";
import imageG from "./images/GitHub-icon.png";
import imageI from "./images/Instagram-icon.png";
import imageT from "./images/Twitter-icon.png";


export default function Footer(){
    return (
        <div id="Footer-container">
            <a href="https://www.facebook.com/" target="_blank"><img src={imageF}></img></a>
            <a href="https://github.com/" target="_blank"><img src={imageG}></img></a>
            <a href="https://www.instagram.com/" target="_blank"><img src={imageI}></img></a>
            <a href="https://twitter.com/?lang=en" target="_blank"><img src={imageT}></img></a>
        </div>
    )
}
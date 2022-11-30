import React from "react";
import AIimage from "./images/random-ai-portrait.jpg";
import Email from "./images/email.png";
import linkedin from "./images/linkedin.png";


export default function Info(){

    return(
        <div className="info">
            <img src={AIimage} className="Pic"></img>
            <h4>Frontend Developer</h4>
            <div className="social">
                <a href="https://mail.google.com/mail/u/0/" target="_blank"><img src={Email} id="email--icon"></img></a>
                <a href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&trk=login_reg_redirect" target="_ blank"><img src={linkedin} id="linkedin--icon"></img></a>
            </div>
        </div>
    )
}
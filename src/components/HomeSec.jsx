import React from "react";
import { Button } from "react-bootstrap";
import Img from "../images/pic1.jpg"
import "../styles/Homesec.css"

const Homesec = () => {
    return (
        <div className="home">
            <div className="text">
                <h1>Hello,My name is <span>Mohamed Essam</span></h1>
                <h2>I am <span>FrontEnd Developer</span></h2>
                <p>Experience of make web application by PSD design or Figma Design , Experience in Problem Solving</p>
                <Button className="btn-danger"><a href="#">Download my CV</a></Button>
            </div>
            <div className="img">
                <span className="af-one for-img"></span>
                <span className="af-two for-img"></span>
                <img src={Img} alt="personal pic of me" />
                <span className="af-three for-img"></span>
                <span className="af-four for-img"></span>
            </div>
        </div>
    )
}

export default Homesec
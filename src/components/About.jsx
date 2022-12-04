import React from "react";
import { Button, ProgressBar } from "react-bootstrap";
import "../styles/about.css"

const About = () => {
    return (
        <div className="about d-flex flex-column h-100 justify-content-evenly" >
            <div className="text2">
                <h3>About Me</h3>
                <h4>I am <span>Mohamed Essam</span> and I'm a <span>Frontend Developer</span></h4>
                <p>I am Graduated from Egyptian American school , I Studied Frontend as start point to be a Mern stuck ,i had made a loot of personal project feel free to see it in Portfolio section </p>
            </div>
            <div className="info-and-progress d-flex justify-content-between">
                <div className="info">
                    <p><span>Address</span>: Alexandria,Egypt</p>
                    <p><span>Age</span>: 21</p>
                    <p><span>Email</span>:<a href="mailto:mohamedessam33362@gmail.com" className="mailto">mohamedessam33362@gmail.com</a></p>
                    <p><span>Phone</span>: 01211929145</p>
                    <p><span>Language</span>: English & Arabic</p>
                    <Button className="btn-danger">Hire me</Button>
                </div>
                <div className="progress-sec">
                    <div className="labels d-flex justify-content-between">
                    <label htmlFor="HTML">HTML5</label>
                    <label htmlFor="HTML">95%</label>
                    </div>
                    <ProgressBar animated now={95} id="HTML" variant="danger" className="my-2" />
                    <div className="labels d-flex justify-content-between">
                        <label htmlFor="css">CSS3</label>
                        <label htmlFor="css">90%</label>
                    </div>
                    
                    <ProgressBar animated now={90} id="css" variant="danger" className="my-2" />
                    <div className="labels d-flex justify-content-between">
                        <label htmlFor="bootstrap">BootStrap</label>
                        <label htmlFor="bootstrap">85%</label>
                    </div>
                    
                    <ProgressBar animated now={85} id="bootstrap" variant="danger" className="my-2" />
                    <div className="labels d-flex justify-content-between">
                        <label htmlFor="java">JAVASCRIPT</label>
                        <label htmlFor="java">79%</label>
                    </div>
                    
                    <ProgressBar animated now={79} id="java" variant="danger" className="my-2" />
                    <div className="labels d-flex justify-content-between">
                        <label htmlFor="react">React.js</label>
                        <label htmlFor="react">82%</label>
                    </div>
                    <ProgressBar animated now={82} id="react"variant="danger" className="my-2"/>
                </div>
            </div>
        </div>
    )
}

export default About
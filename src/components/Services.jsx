import React from "react";
import "../styles/Services.css"
import { Card } from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLaptopCode , faPalette , faLayerGroup} from "@fortawesome/free-solid-svg-icons"
import {faHtml5,faCss3,faSquareJs,faReact,faBootstrap} from "@fortawesome/free-brands-svg-icons"

const Services = () => {
  return (
    <div className="Services">
      <div className="Head">
        <h5>Services</h5>
      </div>
      <div className="services d-flex justify-content-between">
        <Card>
          <Card.Body>
            <FontAwesomeIcon
              icon={faLaptopCode}
              size="2x"
              className="my-2"
              color="#0d6efd"
            />
            <Card.Title>Web Development</Card.Title>
            <Card.Text>
              Reliable and Experienced Partner for Your Web Application
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <FontAwesomeIcon
              icon={faPalette}
              size="2x"
              className="my-2"
              color="#0d6efd"
            />
            <Card.Title>Graphic Design</Card.Title>

            <Card.Text>Get Award Winning UI & UX Design Applications</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <FontAwesomeIcon
              icon={faLayerGroup}
              size="2x"
              className="my-2"
              color="#0d6efd"
            />
            <Card.Title>Redesign With React js</Card.Title>
            <Card.Text>Make Your Application Smoother With React JS</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Services
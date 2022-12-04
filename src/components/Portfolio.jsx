import React from "react";
import "../styles/portfolio.css"
import MocoImage from "../images/مشروع _ محمدعصام.png"
import GabooFashion from "../images/Gaboo.png"
import Appo from "../images/appo.png"
import Doc1 from "../images/Document.png"
import Capture from "../images/Capture.png"
import Doc2 from "../images/Document2.png"
import FrontEndM1 from "../images/Frontend Mentor _ Project tracking intro component.png"
import FrontEndM2 from "../images/Frontend-Mentor-News-homepage.png"
import FrontEndM3 from "../images/Frontend-Mentor-Notifications-page.png"
import FrontEndM4 from "../images/Frontend-Mentor-Interactive-rating-component.png"
import FrontEndM5 from "../images/Frontend-Mentor-QR-code-component.png"
import FrontEndM6 from "../images/Frontend-Mentor-Social-proof-section.png"
import Ket from "../images/Ket.png"
import Moderno from "../images/Moderno.png"
import ImageEdiator from "../images/Image-Ediator.png"
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Portofolio = () => {
    return (
      <div className="d-flex gap-2 Porto flex-column">
        <div className="head">
          <h6>Portofolio</h6>
        </div>
        <div className="last-project">
          <span className="span" id="span">
            My Last Projects :
          </span>
        </div>
        <Carousel variant="dark">
          <Carousel.Item>
            <a href="https://mohamed33362.github.io/MOCO-for-Advirtising/">
              <img className="d-block " src={MocoImage} alt="First slide" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://mohamed33362.github.io/Gaboo-Fashion/">
              <img className="d-block " src={GabooFashion} alt="Second slide" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://mohamed33362.github.io/Kit-project/">
              <img className="d-block " src={Ket} alt="Third slide" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://mohamed33362.github.io/moderno/">
              <img className="d-block" src={Moderno} alt="Third slide" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://mohamed33362.github.io/Appo-Project/">
              <img className="d-block" src={Appo} alt="Third slide" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://mohamed33362.github.io/drag/">
              <img className="d-block" src={Doc1} alt="Third slide" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href=" https://mohamed33362.github.io/frontend-challange-7/">
              <img className="d-block " src={FrontEndM1} alt="Third slide" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://mohamed33362.github.io/Frontend-challange-5/">
              <img className="d-block " src={FrontEndM2} alt="Third slide" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://mohamed33362.github.io/Frontend-challange-4/">
              <img className="d-block " src={FrontEndM3} alt="Third slide" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://mohamed33362.github.io/FrontEnd-Mentor-Challange-3/">
              <img className="d-block " src={FrontEndM4} alt="Third slide" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://mohamed33362.github.io/Frontend-mentor-Challange/">
              <img className="d-block " src={FrontEndM5} alt="Third slide" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://mohamed33362.github.io/Front-end-Mentor-Challange2/">
              <img className="d-block " src={FrontEndM6} alt="Third slide" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://mohamed33362.github.io/Frontend-challange-6/">
              <img className="d-block " src={Capture} alt="Third slide" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://mohamed33362.github.io/CRUD-product-managment/">
              <img className="d-block " src={Doc2} alt="Third slide" />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://mohamed33362.github.io/Image-Ediator/">
              <img className="d-block " src={ImageEdiator} alt="Third slide" />
            </a>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default  Portofolio
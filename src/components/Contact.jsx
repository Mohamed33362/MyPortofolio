import React from "react";
import "../styles/contact.css"
import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone , faLocationDot ,faEnvelope ,faEarthAmerica } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <div className="Contact d-flex flex-column ">
            <span id="HeadSpan">Contact Me</span>
            <div className="title">
                <p className="tit">Do you have any Question ?</p>
                <p className="des">I'm at Your Service</p>
            </div>
            <Row sm="2" lg="3">
                <Col>
                    <Card className="my-5">
                        <Card.Body>
                            <FontAwesomeIcon icon={faPhone} size="2x" className="my-3" color="#0d6efd"/>
                            <Card.Title>Call Me Now</Card.Title>
                                <Card.Text>
                                    +20-121-192-9145
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="my-5">
                        <Card.Body>
                            <FontAwesomeIcon icon={faLocationDot} size="2x" className="my-3" color="#0d6efd"/>
                            <Card.Title>Location</Card.Title>
                                <Card.Text>
                                    Falky , Alexandria
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: "18rem" }} className="my-5">
                        <Card.Body>
                            <FontAwesomeIcon icon={faEnvelope} size="2x" className="my-3" color="#0d6efd"/>
                            <Card.Title>Email</Card.Title>
                                <Card.Text>
                                    mohamedessam33362<br/>@gmail.com
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="flex-column">
                <Col>
                    <div className="title last-title">
                        <p className="tit last-tit">Send Me an Email</p>
                        <p className="des last-des">I'm Very Responsive To Massage</p>
                    </div>
                </Col>
                <Col className="inputs">
                    <input type="text" className="form-control my-2" placeholder="Name"/>
                    <input type="text" className="form-control my-2" placeholder="Email"/>
                </Col>
            </Row>
        </div>
    )
}

export default Contact
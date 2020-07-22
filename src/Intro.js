import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";

class Intro extends Component {
  
    render() {
        return (
            <React.Fragment>
                <div className="background" id="Intro">
                    <div className="Intro-title" width= "100%">
                        <Col sm>
                        <img  width="100%" eight="auto" src="../assets/Logo.png" alt="Logo" />
                        <p className="Vimetro">Vimetro </p>
                        </Col>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Intro;
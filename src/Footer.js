import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar bg="light">
                    <Navbar.Brand >© Vimetro - 2020</Navbar.Brand>
                </Navbar>
            </React.Fragment>
        );

    }

}

export default Footer;
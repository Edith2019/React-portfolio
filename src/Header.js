import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import {Link} from "react-scroll";
import { withTranslation } from "react-i18next";
import ENDE from "./ende.js"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import PropTypes from 'prop-types';

 class HeaderApp extends React.Component {
      constructor(props) {
          super(props);

          this.state = {
              show: false,
          }
      }

        handleClose(){
            this.setState({
                show: false
            });

        }
        handleShow() {
         this.setState({
             show: true
         });
     }


        render() {
            const {t} = this.props;
        return (

            <React.Fragment>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" >
                    <Navbar.Brand>
                        <Link to="Intro"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}>Vimetro
                            </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav fill className="mr-auto">
                        <Nav.Link>
                            <Link to="About"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}>{t("About")}
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="Collaboration"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}>{t("WhatWeCanDo")}
                            </Link>
                        </Nav.Link>

                            <Nav.Link>
                                <Link to="Contact"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}>{t("Contact")}
                                </Link>
                            </Nav.Link>   
                                <DropdownButton
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                    variant="link"
                                    title={t("Projects")}
                                    id="input-group-dropdown-1"
                                    role="menuitem"
                                    aria-checked="true">

                                        <Dropdown.Item> 
                                    <Link to="Projects"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}>{t("AllProjects")}</Link>
                                        </Dropdown.Item>
                                <Dropdown.Divider />

                                <Dropdown.Item>
                                    <Link to="Description1"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}>{t("ProjectInfoOne")}</Link>
                                </Dropdown.Item>

                                <Dropdown.Item>
                                    <Link to="Description2"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}>{t("ProjectInfoTwo")}</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="Description3"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}>{t("ProjectInfoThree")}</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="Description4"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}>{t("ProjectInfoFour")}</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="Description5"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}>{t("ProjectInfoFive")}</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="Description6"
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}>{t("ProjectInfoSix")}</Link>
                                </Dropdown.Item>

                                </DropdownButton>
              
                            <Nav.Link>
                                <Button id="modalButton" variant=" light" onClick={e => this.handleShow(e)}>
                                    TandC
                                </Button>

                                <Modal show={this.state.show} onHide={e => this.handleClose(e)}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{t("OurTermsAndCondition")}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>{t("ModalContent")}</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={e => this.handleClose(e)}>
                                            {t("Close")}
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <ENDE />

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        );
        }
    }


export default (withTranslation()(HeaderApp))

HeaderApp.propTypes = {
    t: PropTypes.func
}
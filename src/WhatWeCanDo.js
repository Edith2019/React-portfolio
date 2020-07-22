import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-scroll";
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';


class WhatWeCanDo extends Component {

    render() {
        const { t } = this.props;

        return (
            <React.Fragment>
                <div className="WhatWeCanDo" id="Collaboration">
                    <Card.Body className="Title-projects">{t("WhatWeCanDo")}</Card.Body>

                    <Container>
                        <Row className="text-center">
                            <Col lg={true} >
                                <Image src="../assets/aperture.svg" alt="aperture" />
                                <Accordion >
                                    <Card border="0" >
                                        <p id="title-WhatWeDo">{t("WhatWeCanDoOne")}</p>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="card-header" >
                                            <Image src="../assets/chevron-down.svg" alt="chevron" />
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>{t("The Times is a British daily national newspaper based in London, England. It began in 1785 under the title The Daily Universal Register, adopting its current name on 1 January 1788")}</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                            <Col lg={true}>
                                <Image src="../assets/codepen.svg" alt="codepen" />
                                <Accordion >
                                    <Card border="0" >
                                        <p id="title-WhatWeDo">{t("WhatWeCanDoTwo")}</p>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="card-header" >
                                            <Image src="../assets/chevron-down.svg" alt="chevron" />
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>{t("Times is a British daily national newspaper based in London, England. It began in 1785 under the title The Daily Universal Register, adopting its current name on 1 January 1788")}</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                            <Col lg={true}>
                                <Image src="../assets/settings.svg" alt="setting" />
                                <Accordion >
                                    <Card border="0" >
                                        <p id="title-WhatWeDo">{t("WhatWeCanDoThree")}</p>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="card-header" >
                                            <Image src="../assets/chevron-down.svg" alt="chevron" />
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>{t("is a British daily national newspaper based in London, England. It began in 1785 under the title The Daily Universal Register, adopting its current name on 1 January 1788")}</Card.Body>
                                        </Accordion.Collapse>

                                    </Card>
                                </Accordion>
                            </Col>
                        </Row>
                    </Container>

                    <div className="contact-WhatWeDo">
                        <Container className="text-center">
                            <Row>
                                <Col sm><p id="getInTouch" >{t("WhatWeCanDoGetInTouch")}</p></Col>
                            </Row>
                        </Container>
                        <Container className="text-center">
                            <Row>
                                <Col sm>
                                    <p>{t("Do you want to know more?")}</p>
                                    <p>{t("Do you have questions?")} </p>
                                    <p>{t("Do you have comments?")} </p>

                                </Col>
                                <Col sm >
                                    <Button id="contact-button">
                                    <Link to="Contact" 
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                            duration={500}>{t("Contact")}
                            </Link>
                                    </Button>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default (withTranslation()(WhatWeCanDo));

WhatWeCanDo.propTypes = {
    t: PropTypes.func
}
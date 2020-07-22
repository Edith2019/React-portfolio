import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';


class ProjectsInfo extends Component {

    render() {
const { t } = this.props;
        return (
            <React.Fragment>
                <div className="ProjectsInfo">
                    <Alert id="Description1" className="projectInfo">
                        <Accordion>
                            <Alert.Heading >{t("ProjectInfoOne")}</Alert.Heading>
                            <Card>
                                <Card.Header>
                                    <p> {t("DescriptionOne")}
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            {t("more info...")}      </Accordion.Toggle> </p>
                                    <a href="#somethingpicture">somthingpicture</a>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body><p className="mb-0">
                                        {t("Some quick example text to build on the card title and make up the bulk of the card& apos; s content.")} 
                                        {t("quick example text to build on the card title and make up the bulk of the card& apos; s content.")} 
                                        {t("example text to build on the card title and make up the bulk of the card& apos; s content.")} 

                                        
                                        </p></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Alert>

                    <Alert id="Description2" className="projectInfo">

                        <Accordion>
                            <Alert.Heading >{t("ProjectInfoTwo")}</Alert.Heading>
                            <Card>
                                <Card.Header>
                                    <p> {t("DescriptionTwo")}

                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            {t("more info...")}      </Accordion.Toggle> </p>
                                    <a href="#somethingpicture">somthingpicture</a>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body><p className="mb-0">
                                        {t("text to build on the card title and make up the bulk of the card& apos; s content.")}
                                        {t("to build on the card title and make up the bulk of the card& apos; s content.")}
                                        {t("build on the card title and make up the bulk of the card& apos; s content.")} 
                                    </p></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Alert>

                    <Alert id="Description3" className="projectInfo">

                        <Accordion>
                            <Alert.Heading >{t("ProjectInfoThree")}</Alert.Heading>
                            <Card>
                                <Card.Header>
                                    <p> {t("DescriptionThree")}

                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            {t("more info...")}      </Accordion.Toggle> </p>
                                    <a href="#somethingpicture">somthingpicture</a>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body><p className="mb-0">
                                        {t("on the card title and make up the bulk of the card& apos; s content.")}
                                        {t("the card title and make up the bulk of the card& apos; s content.")}
                                        {t("card title and make up the bulk of the card& apos; s content.")} 
                                    </p></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Alert>

                    <Alert id="Description4" className="projectInfo">

                        <Accordion>
                            <Alert.Heading >{t("ProjectInfoFour")}</Alert.Heading>
                            <Card>
                                <Card.Header>
                                    <p> {t("DescriptionFour")}

                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            {t("more info...")}     
                                            </Accordion.Toggle> </p>
                                    <a href="#somethingpicture">somthingpicture</a>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body><p className="mb-0">
                                        {t("title and make up the bulk of the card& apos; s content.")}
                                        {t("and make up the bulk of the card& apos; s content.")}
                                        {t("make up the bulk of the card& apos; s content.")} 
                                    </p></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Alert>

                    <Alert id="Description5" className="projectInfo">

                        <Accordion>
                            <Alert.Heading >{t("ProjectInfoFive")}</Alert.Heading>
                            <Card>
                                <Card.Header>
                                    <p> {t("DescriptionFive")}

                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            {t("more info...")}      </Accordion.Toggle> </p>
                                    <a href="#somethingpicture">&apos;#&apos;somthingpicture</a>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body><p className="mb-0">
                                        {t("the bulk of the card& apos; s content.")}
                                        {t("bulk of the card& apos; s content.")}
                                        {t("of the card& apos; s content.")} 
                                    </p></Card.Body> 
                                    </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Alert>

                    <Alert id="Description6" className="projectInfo">
                        <Accordion>
                            <Alert.Heading >{t("ProjectInfoSix")}</Alert.Heading>
                            <Card>
                                <Card.Header>
                                    <p> {t("DescriptionSix")}
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            {t("more info...")}     </Accordion.Toggle> </p>
                                    <a href="#somethingpicture">somthingpicture</a>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body><p className="mb-0">
                                        {t("the card& apos; s content.")}
                                        {t("card& apos; s content.")}
                                        {t("apos; s content.")} 
                                    </p></Card.Body>                                
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Alert> 
                </div>
            </React.Fragment>
        );
    }
}

export default (withTranslation()(ProjectsInfo));

ProjectsInfo.propTypes = {
    t: PropTypes.func
}
import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';


class About extends React.Component {


    render() {
        const { t } = this.props;

        return (
            <React.Fragment>
                <div className="About-container">
                    <Card.Body className=" Title-projects" id="About">{t("About")}</Card.Body>
                    <Container id="Karsten" >
                    <Row>
                        <Col lg={6}>
                        <img width="100%" eight="auto" src="../assets/Karsten.png" alt="Logo" rounded />
                        </Col>
                        <Col lg>
                        <Card border="white" style={{ width: "100%" }}>
                            <Card.Header>Karsten Pufahl, CEO</Card.Header>
                            <Card.Body >
                                        <Card.Title>{t("AboutTitle")}</Card.Title>
                                <Card.Text> 
                                        {t("AboutDescription")}
                                            {t("Some quick example text to build on the card title and make up the bulk of the card& apos; content.")}
                                            {t("quick example text to build on the card title and make up the bulk of the card& apos; content.")}
                                </Card.Text>
                            </Card.Body> 
                        </Card>
                        </Col>
                    </Row>
                    </Container> 
                    </div>
            </React.Fragment>
        );

    }

}

export default (withTranslation()(About));

About.propTypes = {
    t: PropTypes.func
}
import React from "react";
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import axios from "axios";


class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
validated: false,

        }
    }

        handleSubmit(event){
        const form = event.currentTarget;

            event.preventDefault();
            event.stopPropagation();
        console.log("event.currentTarget", event.currentTarget)
            console.log("testing First", event.currentTarget.FirstName.value)
            console.log("testing Last", event.currentTarget.LastName.value)
            console.log("testing Email", event.currentTarget.Email.value)
            console.log("testing message", event.currentTarget.Message.value)
const data = {
    FirstName: event.currentTarget.FirstName.value,
    LastName: event.currentTarget.LastName.value,
    Email: event.currentTarget.Email.value,
    Message: event.currentTarget.Message.value

}
console.log("data", data);

axios.post('/contact', {data})
.then(()=> {
    this.setState({ error: null, submitted: true });
console.log("something")

})

           
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // }

        // this.setState({
        //     validated: true
        // });
    }


    render() {
        const { t } = this.props;

        return (
        <React.Fragment>
            <div className="Contact-Container">
                    <Card.Body className=" Title-projects" id="Contact">{t("ContactForm")}</Card.Body>
                <Card.Text className="text-center">
                        {t("ContactDescription")}
    </Card.Text>

        <Form noValidate validated={this.state.validated} onSubmit={e => this.handleSubmit(e)} id="formContact">
            <Form.Row>
                        <Form.Group as={Col} controlId="validationCustom01">
                                <Form.Label>{t("FirstName")}</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder={t("FirstName")}
                        id="FirstName"
                        name="FirstName"
                    />
                            <Form.Control.Feedback>L{t("Looks Good")}</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                    {t("Please provide your first Name.")}
            </Form.Control.Feedback>
                </Form.Group>
                        <Form.Group as={Col} controlId="validationCustom02">
                                <Form.Label>{t("Last name")}</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder={t("Last name")}
                        id= "LastName"
                        name="LastName"
                    />
                            <Form.Control.Feedback type="invalid">
                                    {t("Please provide your last Name.")}
            </Form.Control.Feedback>
                </Form.Group>
                        <Form.Group as={Col} controlId="validationCustomUsername">
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            aria-describedby="inputGroupPrepend"
                            id="Email"
                            name="Email"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                                        {t("Please provide your email address.")}
            </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}  controlId="validationCustom03">
                                <Form.Label>{t("Your Message")}</Form.Label>
                                <Form.Control type="text" as="textarea" placeholder={t("Message")} id="Message" name="Message" required />
                    <Form.Control.Feedback type="invalid">
                                    {t("Please provide a valid message.")}
          </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
                        <Form.Group id="formCheck">
                <Form.Check
                    required
                    label={t("Agree to terms and conditions")}
                    feedback={t("You must agree before submitting.")}
                    id="formCheck"
                />
                        
            </Form.Group>
                        <Button id="submit-button" type="submit">{t("Submit form")}</Button>
        </Form>
            </div>
        </React.Fragment>
        )}
        
}

export default (withTranslation()(Contact)); 

Contact.propTypes = {
    t: PropTypes.func
}
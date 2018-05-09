import React, {Component} from 'react';
import {
    Container,
    Jumbotron,
    Row,
    Col,
    Button,
    Card,
    CardTitle,
    CardText,
    CardImg,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';
import Stepper from "react-stepper-horizontal";
import {Icon} from 'react-fa';
import "../style/Lending.css";

class Lending extends Component {
    render() {
        return (
            <React.Fragment>

                <React.Fragment className="lending-row">
                    <Jumbotron className="lending-row main">
                        <Row>
                            <Col md="6">
                                <img src={require('../images/smart-home-smart-i.png')} width="100%" height="100%"/>
                            </Col>
                            <Col md="6">
                                <h1 className="headline-top">Your home</h1>
                                <h2 className="headline">your command</h2>
                                <div className="description">
                                    <p>With the Home app, you can easily and securely control all
                                        your HomeKit accessories. The Home app makes all your connected devices work
                                        harder
                                        and smarter for you.
                                    </p>
                                </div>
                                <Button color="success">GET STARTED NOW</Button>
                            </Col>
                        </Row>
                    </Jumbotron>
                </React.Fragment>

                <React.Fragment className="lending-row">
                    <Jumbotron className="concept">
                        <Container>
                            <Row>
                                <Col md="6">
                                    <h1 className="headline">One app for all your home accessories</h1>
                                    <div className="description">
                                        <p>No matter which compatible accessories you choose, the Home app makes it easy
                                            to set up and control all of them, all from one place.
                                        </p>
                                        <p>50 brands worldwide are committed to providing accessories that are
                                            compatible with the HomeKit framework, and the number available is growing
                                            every day.
                                        </p>
                                    </div>
                                </Col>
                                <Col md="6">
                                    <img src={require('../images/iotecosystem_icon_final_0.png')} width="100%"
                                         height="100%"/>
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </React.Fragment>

                <React.Fragment className="lending-row">
                    <Jumbotron className="features">
                        <Container>
                            <Row className="block-heading-center">
                                <h1 className="headline">Our core features</h1>
                            </Row>
                            <Row>
                                <Col md="4">
                                    <Card body className="text-center">
                                        <div className="img-holder">
                                            <CardImg center width="100%"
                                                     src={require('../images/smart-home-house-512.png')}
                                                     alt="Card image cap"/>
                                        </div>

                                        <CardBody>
                                            <CardTitle>Manage your home devices</CardTitle>
                                            <CardText>No matter which compatible accessories you choose, the Home app
                                                makes it easy to set up and control all of them, all from one
                                                place.</CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="4">
                                    <Card body className="text-center">
                                        <div className="img-holder">
                                            <CardImg center width="100%"
                                                     src={require('../images/blockchain-icon.png')}
                                                     alt="Card image cap"/>
                                        </div>

                                        <CardBody>
                                            <CardTitle>Blockchain transactions</CardTitle>
                                            <CardText>No matter which compatible accessories you choose, the Home app
                                                makes it easy to set up and control all of them, all from one
                                                place.</CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="4">
                                    <Card body className="text-center">
                                        <div className="img-holder">
                                            <CardImg center width="100%"
                                                     src={require('../images/crystal-icon.svg')}
                                                     alt="Card image cap"/>
                                        </div>

                                        <CardBody>
                                            <CardTitle>Crypto currency</CardTitle>
                                            <CardText>No matter which compatible accessories you choose, the Home app
                                                makes it easy to set up and control all of them, all from one
                                                place.</CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </React.Fragment>

                <React.Fragment className="lending-row">
                    <Jumbotron className="getting-started">
                        <Container>
                            <Row className="block-heading-center">
                                <h1 className="headline">Getting started</h1>
                            </Row>
                            <Row>
                                <Stepper
                                    size={96}
                                    completeColor={"#ff9740"}
                                    steps={[
                                        {title: 'Sign in or sign up if you don\'t have an account yet'},
                                        {title: 'Manage devices in your account'},
                                        {title: 'Switch on/off lightning bulbs, change brightness'},
                                        {title: 'Check the balance your user account'}
                                    ]}
                                    activeStep={4}/>
                            </Row>
                        </Container>
                    </Jumbotron>
                </React.Fragment>

                <React.Fragment className="lending-row">
                    <Jumbotron className="contact-us">
                        <Container>
                            <Row className="block-heading-center">
                                <h1 className="headline">Contact us</h1>
                            </Row>
                            <Row>
                                <Col md="5">
                                    <h5>Contact us and we'll get back to you within 24 hours</h5>
                                    <div className="credentials">
                                        <h6><Icon size="1x" name="map-marker"/>   Kharkov, Ukraine</h6>
                                        <h6><Icon size="1x" name="phone"/>   +380 66 799 05 09</h6>
                                        <h6><Icon size="1x" name="envelope"/>   blockchain@gmail.com</h6>
                                    </div>

                                </Col>
                                <Col md="7">
                                    <Form>
                                        <FormGroup row>
                                            <Label for="exampleEmail" sm={2}>Email</Label>
                                            <Col>
                                                <Input type="email" name="email" id="exampleEmail"/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="name" sm={2}>Name</Label>
                                            <Col>
                                                <Input type="text" name="name" id="name"/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="comments" sm={2}>Comments</Label>
                                            <Col>
                                                <Input type="textarea" name="comments" id="comments"/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup>
                                            <Col md={{size: 1, offset: 2}}>
                                                <Button>Send</Button>
                                            </Col>
                                        </FormGroup>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </React.Fragment>

            </React.Fragment>

        );
    }
}

export default Lending;

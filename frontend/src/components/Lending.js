import React, {Component} from 'react';
import {Slide, Fade, LightSpeed} from 'react-reveal';
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
    Input
} from 'reactstrap';
import Stepper from "react-stepper-horizontal";
import {Icon} from 'react-fa';
import "../style/Lending.css";
import {Element} from 'react-scroll';

class Lending extends Component {
    render() {
        return (
            <React.Fragment>

                <React.Fragment>
                    <Jumbotron className="lending-row main">
                        <Row>

                            <Col md="6">
                                <Slide left>
                                    <img alt="" src={require('../images/smart-home-smart-i.png')}
                                         width="100%" height="100%"/>
                                </Slide>
                            </Col>


                            <Col md="6">
                                <Slide right cascade>
                                    <div>
                                        <h1 className="headline-top">Your home</h1>
                                        <h2 className="headline">your command</h2>
                                        <div className="description">
                                            <p>With the Home app, you can easily and securely control all
                                                your HomeKit accessories. The Home app makes all your connected devices
                                                work
                                                harder
                                                and smarter for you.
                                            </p>
                                        </div>
                                        <Button size="lg" color="success">GET STARTED NOW</Button>
                                    </div>
                                </Slide>
                            </Col>

                        </Row>
                    </Jumbotron>
                </React.Fragment>

                <Element name="concept">
                    <React.Fragment>
                        <Jumbotron className="lending-row concept">
                            <Container>
                                <Row>
                                    <Col md="6">
                                        <Fade top>
                                            <h1 className="headline">One app for all your home accessories</h1>
                                        </Fade>
                                        <div className="description">
                                            <Fade left>
                                                <p>No matter which compatible accessories you choose, the Home app makes
                                                    it
                                                    easy
                                                    to set up and control all of them, all from one place.
                                                </p>
                                            </Fade>
                                            <Fade left>
                                                <p>50 brands worldwide are committed to providing accessories that are
                                                    compatible with the HomeKit framework, and the number available is
                                                    growing
                                                    every day.
                                                </p>
                                            </Fade>
                                        </div>
                                    </Col>
                                    <Col md="6">
                                        <img alt="" src={require('../images/iot-diagram.png')} width="100%"
                                             height="85%"/>
                                    </Col>
                                </Row>
                            </Container>
                        </Jumbotron>
                    </React.Fragment>
                </Element>

                <Element name="features">
                    <React.Fragment>
                        <Jumbotron className="lending-row-bg features">
                            <Container>
                                <Row className="block-heading-center">
                                    <h1 className="headline">Our core features</h1>
                                </Row>
                                <Row>
                                    <Col md="4">
                                        <Slide bottom>
                                            <Card body className="text-center">
                                                <div className="img-holder">
                                                    <CardImg width="100%"
                                                             src={require('../images/smart-home-house-512.png')}
                                                             alt="Card image cap"/>
                                                </div>

                                                <CardBody>
                                                    <CardTitle>Manage your home devices</CardTitle>
                                                    <CardText>No matter which compatible accessories you choose, the
                                                        Home
                                                        app
                                                        makes it easy to set up and control all of them, all from one
                                                        place.</CardText>
                                                </CardBody>
                                            </Card>
                                        </Slide>
                                    </Col>
                                    <Col md="4">
                                        <Slide bottom>
                                            <Card body className="text-center">
                                                <div className="img-holder">
                                                    <CardImg width="100%"
                                                             src={require('../images/blockchain-icon.png')}
                                                             alt="Card image cap"/>
                                                </div>

                                                <CardBody>
                                                    <CardTitle>Blockchain transactions</CardTitle>
                                                    <CardText>No matter which compatible accessories you choose, the
                                                        Home
                                                        app
                                                        makes it easy to set up and control all of them, all from one
                                                        place.</CardText>
                                                </CardBody>
                                            </Card>
                                        </Slide>
                                    </Col>
                                    <Col md="4">
                                        <Slide bottom>
                                            <Card body className="text-center">
                                                <div className="img-holder">
                                                    <CardImg width="100%"
                                                             src={require('../images/crystal-icon.svg')}
                                                             alt="Card image cap"/>
                                                </div>

                                                <CardBody>
                                                    <CardTitle>Crypto currency</CardTitle>
                                                    <CardText>No matter which compatible accessories you choose, the
                                                        Home
                                                        app
                                                        makes it easy to set up and control all of them, all from one
                                                        place.</CardText>
                                                </CardBody>
                                            </Card>
                                        </Slide>
                                    </Col>
                                </Row>
                            </Container>
                        </Jumbotron>
                    </React.Fragment>
                </Element>

                <Element name="getting-started">
                    <React.Fragment>
                        <Jumbotron className="lending-row-sm getting-started">
                            <Container>
                                <Row className="block-heading-center">
                                    <h1 className="headline">Getting started</h1>
                                </Row>
                                <Row>
                                    <LightSpeed top>
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
                                    </LightSpeed>
                                </Row>
                            </Container>
                        </Jumbotron>
                    </React.Fragment>
                </Element>

                <Element name="contact-us">
                    <React.Fragment>
                        <Jumbotron className="lending-row contact-us">
                            <Container>
                                <Row className="block-heading-center">
                                    <h1 className="headline">Contact us</h1>
                                </Row>
                                <Row>
                                    <Col md="5">
                                        <h5>Contact us and we'll get back to you within 24 hours</h5>
                                        <div className="credentials">
                                            <h6><Icon name="map-marker"/> Kharkov, Ukraine</h6>
                                            <h6><Icon name="phone"/> +380 66 799 05 09</h6>
                                            <h6><Icon name="envelope"/> blockchain@gmail.com</h6>
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
                </Element>

            </React.Fragment>

        );
    }
}

export default Lending;

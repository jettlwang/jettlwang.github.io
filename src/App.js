import React, { Component } from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';


import { projects, Luna , Noofie , Huawei , Freelance } from './partials/Projects';

import {Container , Row, Col }from 'react-bootstrap';
import { Badge, Jumbotron, Carousel } from 'react-bootstrap';




class App extends Component {
    render(){
        return(<div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/huawei' component={Huawei}/>
                        <Route exact path='/noofie' component={Noofie}/>
                        <Route exact path='/luna' component={Luna}/>
                        <Route exact path='/freelance' component={Freelance}/>
                    </Switch>
                </BrowserRouter>

                <Container>
                    <Row><Col lg={{span:2,offset:10}} className="text-lg-right">Hi Im footer</Col></Row>
                </Container>
            </div>);
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.bkgX = Math.floor(Math.random() * 125) - 25;
        this.bkgY = Math.floor(Math.random() * 75) - 20;
    }

    render(){
        return(<div>
                <div id="header-after" style={{
                        "backgroundImage" : "url('src/assets/pfp.png')",
                            "backgroundPosition" : this.bkgX + "% " + this.bkgY + "vh"
                    }}>
                </div>

                <Container>
                    <Row>
                        <Col lg={10}>

                            <Row className="vertical-center" id="header">
                                <Col xs lg={{ span: 10, offset: 2 }} >
                                    <h1>Hi, I&#39;m Jett.</h1>
                                    <h2>I&#39;m a product designer.</h2>
                                    <p>I&#39;m currently the design lead at <a href="https://meetluna.com">Luna</a>.</p>
                                    <p>My background is in front end development and behavioural economics.</p>
                                    <p><a href="src/assets/resume.pdf">Resume</a> / <a href="https://linkedin.com/in/jettlwang">LinkedIn</a> / <a href="mailto:jettlwang@gmail.com">Get in Touch</a></p>
                                </Col>
                            </Row>

                            <PjPreview id="huawei" link />
                            <PjPreview id="noofie" link />

                            <Row id="others">
                                <Col lg={8}>
                                    <p>Here are other things my attention goes to:</p>
                                    <ul>
                                        <li>Maintaining <a href="https://tellmeaboutyourlife.com/">tellmeaboutyourlife.com</a></li>
                                        <li><a href="https://www.nonviolentcommunication.com/pdf_files/4part_nvc_process.pdf">Nonviolent Communication</a></li>
                                        <li>Design ethics & <a href="http://humanetech.com/designers/">humane technology</a></li>
                                        <li><a href="http://freakonomics.com/podcast/richard-thaler/">Nudge</a></li>
                                        <li><a href="https://www.goodreads.com/user/show/45864430-jett-wang">Important Social Media</a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={2} id="menu-container">
                        </Col>

                    </Row>


                </Container>
            </div>);}
}


class PjPreview extends Component {
    render(){
        var pj = projects[this.props.id];
        return <div id={this.props.id}>
            <Row className="align-col-baseline">
                <Col lg={2}  className="text-lg-right py-3"><h6>1</h6></Col>
                <Col lg={10} className="py-3">
                    <h3>{pj.title}
                        {this.props.link && <a href={this.props.id}><Badge>CASE STUDY</Badge></a>}</h3>
                </Col>
            </Row>

            <Row>
                <Col lg={2} className="text-lg-right py-3 d-none d-lg-block">
                    <small>{(pj.role).split(" / ").join("\n")}</small>
                </Col>



                <Col lg={{span:10,order:2}}>
                    <Row>
                        <Col lg={10} className="py-3">{pj.blurb}</Col>
                        <Col xs className="text-lg-right py-3 d-lg-none">
                            <small>{(pj.role)}</small>
                        </Col>
                        <Col lg={12} className="py-3">
                            <Carousel interval={null}>
                                {React.Children.map( pj.piece.props.children , (child, i) => {
                                    if (child.type.name != "Img") return
                                    return <Carousel.Item>{child}</Carousel.Item>
                                })}
                            </Carousel>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>;
    }
}

export default App;

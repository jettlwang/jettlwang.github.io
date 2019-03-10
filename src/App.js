import React, { Component } from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';

import { projects, Luna , Noofie , Huawei , Freelance } from './partials/Projects';
import { MenuXS, MenuLG } from './partials/Menu'

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import {Container , Row, Col }from 'react-bootstrap';
import { Badge, Carousel } from 'react-bootstrap';

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
                    <Row><Col className="text-lg-right small pb-3">Jett Wang 2019 ©</Col></Row>
                </Container>
            </div>);
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.bkgX = Math.floor(Math.random() * 125) - 25;
        this.bkgY = Math.floor(Math.random() * 75) - 20;

        this.scrollToTop = this.scrollToTop.bind(this);

        this.items = ["noofie","noofie"];
        this.name = ["壹","贰"];
    }

    componentDidMount(){
        Events.scrollEvent.register('begin', function () {  });
        Events.scrollEvent.register('end', function () {    });
     }

    scrollToTop() {scroll.scrollToTop();}
    scrollTo() {scroller.scrollTo('scroll-to-element', {duration: 800,delay: 0,smooth: 'easeInOutQuart'})}
    scrollToWithContainer() {let goToContainer = new Promise((resolve, reject) => {Events.scrollEvent.register('end', () => {resolve();Events.scrollEvent.remove('end');});scroller.scrollTo('scroll-container', {duration: 800,delay: 0,smooth: 'easeInOutQuart'});});goToContainer.then(() =>scroller.scrollTo('scroll-container-second-element', {duration: 800,delay: 0,smooth: 'easeInOutQuart',containerId: 'scroll-container'}));}

     componentWillUnmount() {
          Events.scrollEvent.remove('begin');
          Events.scrollEvent.remove('end');
     }


    render(){
        return(<div >
                <div id="header-after" style={{
                        "backgroundImage" : "url('src/assets/pfp.png')",
                            "backgroundPosition" : this.bkgX + "% " + this.bkgY + "vh"
                    }}>
                </div>

                <Container>
                    <Row  id="top">
                        <Col lg={10}>
                            <Row className="vertical-center" id="header">
                                <Col xs lg={{ span: 8, offset: 2 }} >
                                    <h1>👋 I&#39;m Jett</h1>
                                    <h2>I&#39;m a <b>product designer</b></h2>
                                    <p>I&#39;m currently the design lead at <a href="https://meetluna.com">Luna</a>.<br/>My background is in front end development and behavioural economics.</p>
                                    <p className="caption small"><a href="src/assets/resume.pdf">Resume</a> / <a href="https://linkedin.com/in/jettlwang">LinkedIn</a> / <a href="mailto:jettlwang@gmail.com">Get in Touch</a></p>
                                </Col>
                            </Row>

                            <PjPreview id="noofie" name="壹" link />
                            <PjPreview id="noofie" name="贰" link />

                            <div id="others"><Row className="d-flex vertical-center justify-center">
                                <Col xs md={{span:5,offset:4}} lg={{span:3,offset:2}} className="text-md-right text-lg-left py-2 blockquote">
                                    <p>Here are other things my attention goes to</p>
                                </Col>
                                <Col xs md={{span:6,offset:3}} lg={{span:7,offset:5}} className="py-2">
                                    <ul className="list-unstyled">
                                        <li>Maintaining <a href="https://tellmeaboutyourlife.com/">tellmeaboutyourlife.com</a></li>
                                        <li><a href="https://www.nonviolentcommunication.com/pdf_files/4part_nvc_process.pdf">Nonviolent Communication</a></li>
                                        <li>Design ethics & <a href="http://humanetech.com/designers/">humane technology</a></li>
                                        <li><a href="http://freakonomics.com/podcast/richard-thaler/">Nudge</a></li>
                                        <li><a href="https://www.goodreads.com/user/show/45864430-jett-wang">Important Social Media</a></li>
                                    </ul>
                                </Col>
                            </Row></div>
                        </Col>

                        <MenuLG items={this.items} name={this.name} style={{"top":"30vh"}}/>
                    </Row>
                    <MenuXS items={this.items} name={this.name} />
                </Container>
            </div>);}
}


class PjPreview extends Component {
    render(){
        var pj = projects[this.props.id];
        return <div id={this.props.id}>
            <Row className="align-col-baseline">
                <Col lg={2}  className="text-lg-right py-3"><h6>{this.props.name}</h6></Col>
                <Col lg={10} className="py-3">
                    <h3>{pj.title}
                        {this.props.link && <a href={this.props.id}><Badge className="caption px-2">CASE STUDY</Badge></a>}</h3>
                </Col>
            </Row>
            <Row  className="align-col-baseline">
                <Col lg={2} className="text-lg-right py-3 d-none d-lg-block">
                    {/*<div className="small">{(pj.role).split(" / ").join("\n")}</div>*/}
                    <ul className="nav flex-column justify-right small">
                    {pj.role.split(" / ").map( (e,i) =>
                            <li key={i}>{e}</li>
                       )}
                    </ul>
                </Col>
                <Col lg={{span:10,order:2}}>
                    <Row>
                        <Col xl={10} className="py-3">{pj.blurb}</Col>
                        <Col xs className="text-lg-right py-3 d-lg-none">
                            <div className="small">{(pj.role)}</div>
                        </Col>
                        <Col lg={12}>
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

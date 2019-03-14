import React, { Component } from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';

import { PjPreview, Luna , Noofie , Huawei , Freelance } from './partials/Projects';
import { MenuXS, MenuLG } from './partials/Menu'

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


import {Container , Row, Col }from 'react-bootstrap';

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
        this.bkgX = Math.floor(Math.random() * 75) - 5;
        this.bkgY = Math.floor(Math.random() * 85) - 5;

        this.scrollToTop = this.scrollToTop.bind(this);

        this.items = ["noofie","others"];
        this.name = ["壹","others"];
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
                            "backgroundPosition" : this.bkgX + "vw " + this.bkgY + "vh"
                    }}>
                </div>

                <Container>
                    <Row  id="top">
                        <Col lg={10}>
                            <Row className="vertical-center" id="header">
                                <Col xs lg={{ span: 8, offset: 2 }} >
                                    <h1> 你好👋 I&#39;m Jett</h1>
                                    <h2>I&#39;m a <b>product designer</b></h2>
                                    <p>I&#39;m currently the design lead at <a href="https://meetluna.com">Luna</a>.<br/>My background is in front end development and behavioural economics.</p>
                                    <p className="caption small"><a href="src/assets/resume.pdf" className="text-nowrap">Resume</a> / <a href="https://linkedin.com/in/jettlwang" className="text-nowrap">LinkedIn</a> / <a href="mailto:jettlwang@gmail.com" className="text-nowrap">Get in Touch</a></p>
                                </Col>
                            </Row>

                            <PjPreview id="noofie" name="壹" link />

                            <div id="others"><Row className="d-flex vertical-center justify-center">
                                <Col xs md={{span:6,offset:4}} lg={{span:3,offset:2}} className="text-md-right text-lg-left py-2 blockquote">
                                    <p>Here are other things my attention goes to</p>
                                </Col>
                                 <div className="w-100"></div>
                                <Col xs md={{span:8,offset:2}} lg={{span:7,offset:5}} className="py-2">
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

                        <MenuLG items={this.items} name={this.name} style={{"top":"33vh"}}/>
                    </Row>
                    <MenuXS items={this.items} name={this.name} />
                </Container>
            </div>);}
}




export default App;

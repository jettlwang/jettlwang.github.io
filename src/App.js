import React, { Component } from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {Container , Row, Col }from 'react-bootstrap';
import { PjPreview, Luna , Noofie } from './partials/Projects';
import { MenuXS, MenuLG } from './partials/Menu'

class App extends Component {
    render(){
        return(<div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/resume' component={() => { window.location.replace('src/assets/JettWangResume_UX.pdf')}} />
                        <Route path='/noofie' component={() => { window.location.replace("src/assets/cs/Noofie.pdf")}} />
                        <Route path='/luna' component={() => { window.location.replace('src/assets/cs/Luna.pdf')}} />
                        <Route path='/lunafull' component={() => { window.location.replace('https://www.icloud.com/keynote-live/sc:09JKbeC5YOAhh8JUVaX8fE3up7UuOXoQqfr_UMYgGgCHMcg_baTs-DB41lnRIZ6P0T0')}} />
                    </Switch>
                </BrowserRouter>

                <Container className="px-4 px-lg-0">
                    <Row><Col className="text-lg-right small pb-3">Designed & Built, Jett Wang 2019 / <a href="https://github.com/jettlwang/jettlwang.github.io">source code</a></Col></Row>
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

        this.items = ["luna","noofie","honeit","huawei","others"];
        this.name = ["Luna | 壹","Noofie | 贰","honeit | 叁","huawei | 肆","other"];
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

                <Container className="px-4 px-lg-0">
                    <Row  id="top">
                        <Col lg={10}>
                            <Row className="vertical-center" id="header">
                                <Col xs lg={{ span: 8, offset: 2 }} >
                                    <h1> 你好👋 I&#39;m Jett</h1>
                                    <h2>I&#39;m a <strong>product designer</strong></h2>
                                    <p>I&#39;m currently the design lead at <a href="https://meetluna.com">Luna</a>.<br/>Qualities I value are collaboration, authenticity and accountability, and I embody them in both my work and myself.</p>
                                    <p className="caption small"><a href="resume" className="text-nowrap">Resume</a> / <a href="https://linkedin.com/in/jettlwang" className="text-nowrap">LinkedIn</a> / <a href="mailto:jettlwang@gmail.com" className="text-nowrap">Get in Touch</a></p>
                                </Col>
                            </Row>

                            <PjPreview id="luna" name="壹"/>
                            <PjPreview id="noofie" name="贰" />
                            <PjPreview id="honeit" name="叁" />
                            <PjPreview id="huawei" name="肆" />

                            <div id="others"><Row className="d-flex vertical-center justify-center">
                                <Col xs md={{span:6,offset:4}} lg={{span:3,offset:2}} className="text-md-right text-lg-left py-2 blockquote">
                                    <p>Here are other things my attention goes to</p>
                                </Col>
                                 <div className="w-100"></div>
                                <Col xs md={{span:8,offset:2}} lg={{span:7,offset:5}} className="py-2">
                                    <ul className="list-unstyled">
                                        <li>Maintaining <a href="https://tellmeaboutyourlife.com/">tellmeaboutyourlife.com</a></li>
                                        <li><a href="https://generalassemb.ly/marketing/digital-marketing">Certified Didital Marketing Level 1</a> online course</li>
                                        <li><a href="https://www.nonviolentcommunication.com/pdf_files/4part_nvc_process.pdf">Nonviolent Communication</a></li>
                                        <li><a href="https://humanebydesign.com/">Design ethics</a> & <a href="http://humanetech.com/designers/">humane technology</a></li>
                                        <li><a href="http://freakonomics.com/podcast/richard-thaler/">Nudge</a></li>
                                        <li><a href="https://www.goodreads.com/user/show/45864430-jett-wang">Important Social Media</a></li>
                                    </ul>
                                </Col>
                            </Row></div>
                        </Col>

                        <MenuLG items={this.items} name={this.name} />
                    </Row>
                    <MenuXS items={this.items} name={this.name} />
                </Container>
            </div>);}
}




export default App;

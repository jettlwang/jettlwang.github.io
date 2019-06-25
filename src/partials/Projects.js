import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ReactMarkdown from 'react-markdown';
import ReactImageFallback from "react-image-fallback";
import {Container , Row, Col }from 'react-bootstrap';
import { Badge, Carousel, Image, Button } from 'react-bootstrap';
import { MenuXS, MenuLG } from './Menu'

export const proojs = {
  "noofie": {
    "title": "Noofie App",
    "blurb":
"Noofie is a professional social network for students and young professionals aiming to address career anxiety among college students. I conducted **expert interviews** and **comparative studies** to arrive to the concept. Then I iterated with 4 **usability tests** from **wireframes** to **UI design**. I even created a landing page and a pitch deck.\r\n",
    "role": 
    "ideation / UX / UI / research / prototyping / mobile / branding / marketing",
    "imgCount" : 7,
    "cs" : true,
  },
  "huawei": {
    "title": "Huwei Shanghai Internship",
    "blurb":
"I **brainstormed** for [EMUI 8.0](https:\/\/consumer.huawei.com\/en\/emui\/emui-8\/)\'s AI assistant module and the later  **high fidelity prototyping**  with [Flinto](https:\/\/www.flinto.com) & [Origami Studio](https:\/\/origami.design\/). I also conducted various **guerrilla user research** and collected user data & feedback.",
    "role":
    "ideation / UX / research / prototyping / mobile",
    "imgCount" : 4,
    "cs" : false,
  },
  "luna": {
    "title": "Luminos by Luna",
    "blurb":
"I joined [Luna](meetluna.com) during a pivot and lead the design of iteration 2.0 later known as Luminos. I facilitated **design sprints**, built **prototypes**, launched the Proof of Concept, and shipped the Luminos **MVP**. I was also responsible for the communication from Luminos, from **branding** to **visual identity**, to **design systems** and **UI components**.\r\n",
    "role":
    "ideation / research / UX / UI / prototyping / research / mobile / branding / marketing",
    "imgCount" : 5,
    "cs": true,
  },
  "honeit": {
    "title": "Honeit UX Consulting",
    "blurb":
"A 3-week consulting project with 2 other designers for [HoneIt](https:\/\/www.honeit.com\/). Together, we ran **usability tests** and **user interviews**, synthesized our findings with **affinity mapping**, compiled and presented detailed **documentation** of our **usability audit** and **redesign**.",
    "role":
    "ideation / UX / research / presentation / web",
    "imgCount" : 8,
    "cs" : false,
  },
}

export class PjPreview extends Component {

    render(){
        var pj = proojs[this.props.id];

        var casItems = [];
        for(var i =0; i < pj.imgCount; i++) {
          var url = "src/assets/"+this.props.id+"/"+(i+1).toString();
          var item = <Carousel.Item key={i}>
               <ReactImageFallback className="img-fluid" src={url+".jpg"} fallbackImage={[url+".gif",url+".png"]} />
          </Carousel.Item>;
            casItems.push(item);
        }
        return <div id={this.props.id} className="pt-6">
            <Row className="align-col-baseline mb-4">
                <Col lg={2}  className="text-lg-right caption grey2"><h6></h6></Col>
                <Col sm={6} className="mt-2">
                    <h3>{pj.title}</h3>
                </Col>
                <Col className="text-sm-right">
                  {pj.cs && <Button variant="outline-primary"  size="lg" className="caption small" href={"/"+this.props.id}>case study</Button>}
                </Col>
            </Row>

            <Row>
                <Col lg={2} className="text-lg-right d-none d-lg-block grey1">
                    <strong><hr /></strong>
                    <ul className="nav flex-column justify-right small text-capitalize">
                    {pj.role.split(" / ").map( (e,i) =>
                            <li key={i}>{e}</li>
                       )}
                    </ul>
                </Col>
                <Col lg={{span:10,order:2}}>
                    <Row>
                        <Col xl={11} className=""><ReactMarkdown source={pj.blurb} /></Col>
                        <Col xs className="d-lg-none small">{pj.role}</Col>
                        <Col lg={12}>
                            <Carousel interval={null} className="mt-3">
                                   {casItems}
                            </Carousel>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>;
    }
}

export class PjPreviewSM extends Component {

    render(){
        var pj = proojs[this.props.id];

        var casItems = [];
        for(var i =0; i < pj.imgCount; i++) {
          var url = "src/assets/"+this.props.id+"/"+(i+1).toString();
          var item = <Carousel.Item key={i}>
               <ReactImageFallback className="img-fluid" src={url+".jpg"} fallbackImage={[url+".gif",url+".png"]} />
          </Carousel.Item>;
            casItems.push(item);
        }
        return <div id={this.props.id} className="pt-6">
            <Row className="align-col-baseline mb-4">
                <Col lg={true} md={{span:10,offset:1}}>
                    <Row>
                        <Col lg={5} className="">
                          <h3>{pj.title}</h3>
                          <ReactMarkdown source={pj.blurb} />
                          <span className="small">{pj.role}</span>
                        </Col>
                        
                        <Col lg={7} >
                            <Carousel interval={null} className="mt-3">
                                   {casItems}
                            </Carousel>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>;
    }
}

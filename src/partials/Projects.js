import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';
import ReactImageFallback from "react-image-fallback";


import { MenuXS, MenuLG } from './Menu'

import {Container , Row, Col }from 'react-bootstrap';
import { Badge, Carousel, Image } from 'react-bootstrap';


import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { Img } from './ArticleUtil'

export const proojs = {
  "noofie": {
    "title": "Noofie App",
    "blurb":
    "Noofie is a professional social network for students and young professionals. It is a continuum of my final, individual project completed at General Assembly UX Design Immersive in 2016. I set out to examine **career anxieties** among college students. I conducted **expert interviews** and **comparative studies**, and arrived at networking and **mentorship** as my solution. I then created and iterated, with **user feedback**, from **wireframes** to final **UI design**. I even created a landing page and a pitch deck.",
    "role": "research & synthesis / systems design / interaction design / prototyping / UI design / web design / presentation",
    "imgCount" : 18
  }
}

export class PjPreview extends Component {

    render(){
        var pj = proojs[this.props.id];

        var casItems = [];
        for(var i =0; i < pj.imgCount; i++) {
          var url = "src/assets/"+this.props.id+"/"+(i+1).toString();
          var item = <Carousel.Item key={i}>
               <ReactImageFallback className="img-fluid" src={url+".jpg"} fallbackImage={[url+".png",url+".gif"]} />
          </Carousel.Item>;
            casItems.push(item);
        }
        console.log(pj.imgCount);
        return <div id={this.props.id} className="mt-6">
            <Row className="align-col-baseline">
                <Col lg={2}  className="text-lg-right caption"><h6>{this.props.name}</h6></Col>
                <Col lg={10} className="mt-2">
                    <h3>{pj.title}
                        {this.props.link && <a href={this.props.id}><Badge className="caption px-2">CASE STUDY</Badge></a>}
                        {this.props.comesoon && <Badge className="caption px-2 small">coming soon</Badge>} </h3>
                </Col>
            </Row>
            <Row  className="align-col-baseline">
                <Col lg={2} className="text-lg-right d-none d-lg-block">
                    <ul className="nav flex-column justify-right small">
                    {pj.role.split(" / ").map( (e,i) =>
                            <li key={i}>{e}</li>
                       )}
                    </ul>
                </Col>
                <Col lg={{span:10,order:2}}>
                    <Row>
                        <Col xl={10} className="mb-2"><ReactMarkdown source={pj.blurb} /></Col>
                        <Col xs className="d-lg-none small">{pj.role}</Col>
                        <Col lg={12}>
                            <Carousel interval={null} className="mt-4">
                                   {casItems}
                            </Carousel>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>;
    }
}

class ArticleView extends Component {
    constructor(props) {
        super(props);

        this.scrollToTop = this.scrollToTop.bind(this);

        this.pj= proojs[this.props.id];

        this.items = [];
        this.name = [];
        this.artic = <Artic items={this.items} name={this.name}/>;

    }

    componentDidMount(){
        document.title = this.pj.title + " / Jett Wang / Product Designer"

        this.forceUpdate();

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
        return <Container>
               <span id="top" />
            <Row>
               <Col lg={{span:8,offset:2}} className="py-5" id={this.props.id}>
                   <h1>{this.pj.title}</h1>
                    <ReactMarkdown source={this.pj.blurb} />
                    {this.artic}
                </Col>
                <MenuLG items={this.items} name={this.name} />
            </Row>
            <MenuXS items={this.items} name={this.name} />
            </Container>;
    }
}

export const Artic = (props) => {
     var i = 0;
    return <div>
          {/*1. use Render to find code blocks, find headings inside & push to queue. This is a no show.*/}
         <ReactMarkdown source={require('../assets/md/noofie.md')} className="d-none"
          renderers={{
               code : ((e) => {
                        return <ReactMarkdown source={e.value}
                                   renderers = {{
                                        heading : ((e) => {
                                            var myname = e.children[0].props.value;
                                            var myid = myname.toLowerCase().replace(/\W/g, '-');
                                            props.items.push(myid);
                                            props.name.push(myname);
                                            return "a";
                                       }),
                                   }}/>
                              }),
          }}
         />
          {/*2. use Render to find code blocks, and put id to code block*/}
         <ReactMarkdown
                  source={require('../assets/md/noofie.md')}
                  renderers={{
                    code : ((e) => {
                         let temp = props.items[i];
                         i++;
                        return <div id={temp}>
                        <ReactMarkdown source={e.value} />
                        </div>;
                    }),
                  }}
                  includeNodeIndex={true}
             />
    </div>;
}


export const Noofie = (props) => {
    return <ArticleView id="noofie" /> ;
}

export const Huawei = (props) => {
    return <ArticleView id="huawei" /> ;
}

export const Luna = (props) => {
    return <ArticleView id="luna" /> ;
}

export const Freelance = (props) => {
    return <ArticleView id="freelance" /> ;
}

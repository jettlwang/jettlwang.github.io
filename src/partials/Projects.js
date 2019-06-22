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
"I worked under the international innovation team within Huawei\'s mobile OS(EMUI) team.\u2029 I took part in  **brainstorming** defining [EMUI 8.0](https:\/\/consumer.huawei.com\/en\/emui\/emui-8\/)\'s AI assistant module and the later  **high fidelity prototyping**  with [Flinto](https:\/\/www.flinto.com) & [Origami Studio](https:\/\/origami.design\/). I also conducted various **guerrilla user research** and collected user data & feedback.\r\n",
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
"I took on a 3-week consulting project with 2 other designers to improve the user experience for [HoneIt](https:\/\/www.honeit.com\/), an interview technology platform. Together, we ran **usability tests** and **user interviews**, synthesized our findings with **affinity mapping**, compiled and presented detailed **documentation** of our **usability audit** and **redesign**.",
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
                <Col lg={2}  className="text-lg-right caption grey2"><h6>{this.props.name}</h6></Col>
                <Col sm={6} className="mt-2">
                    <h3>{pj.title}
                        {this.props.link && <a href={this.props.id}><Badge className="caption px-2">CASE STUDY</Badge></a>}
                        {this.props.comesoon && <Badge className="caption px-2 small">coming soon</Badge>} </h3>
                </Col>
                <Col className="text-sm-right">
                  {pj.cs && <Button variant="outline-primary"  size="lg" className="caption small" href={"/"+this.props.id}>case study</Button>}
                </Col>
            </Row>
            <Row  className="">
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

export const Luna = (props) => {
    return <ArticleView id="luna" /> ;
}
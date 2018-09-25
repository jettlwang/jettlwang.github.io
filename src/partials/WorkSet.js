import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import { Noun } from './Noun';
//import {imgs} from './data'

export const Caption = (props) =>{
//    props = { set : "null"};
    return <span className="caption">{props.children}</span>;
} 
const imgs = {
    'huawei' : [
        {
            'src' : 'hwdiagram.png',
            'title' : 'Huawei Thought Diagrams',
            'cap' : <Caption>A collection of <b>thought diagrams</b> I used to help myself work through complex problems and present to my manager.</Caption>
        },{
            'src' : 'huawei.gif',
            'title' : 'Huawei Touch Position Menu',
            'cap' : <Caption>A slide-up menu I made in <Noun name="origami"/> based on touch position.</Caption>
        },{
            'src' : 'huawei2.gif',
            'title' : 'Huawei Text Selection Prototype',
            'cap' : <Caption>A text-selection interaction that I made also in <Noun name="origami"/>.</Caption>
        }],
    'cssa' : [
        {
             'src' : 'cssa0.jpg',
             'title' : "CSSA Homepage Evolution",
             'cap' : <Caption>A side-by-side comparision for the 3 versions of CSSA homepage from 2013, my redesign in 2016, and again in 2018.</Caption>
         },{
             'src' : 'cssa1.png',
             'title' : "CSSA Homepage",
             'cap' : <Caption>The homepage for the CSSA website I designed in 2018.</Caption>
         },{
             'src' : 'cssa2.png',
             'title' : "CSSA Single Even Page",
             'cap' : <Caption>A single event page for the CSSA website I designed.</Caption>
         },{
             'src' : 'cssa3.png',
             'title' : "CSSA About Page",
             'cap' : <Caption>The about for the CSSA website I designed.</Caption>
         },{
             'src' : 'cssaia.jpg',
             'title' : "CSSA IA",
             'cap' : <Caption>The redesign reduced the complexity of the website and presents relevant information more effectively.</Caption>
         },
        
        
    ],
     'noof' : [
         {
             'src' : 'noof1.png',
             'title' : "Noofie Visual Assets",
             'cap' : <Caption>A simple reference of the UI design of Noofie that shows the <b>color pallet</b> and <b>typefaces</b>.</Caption>
         },{
             'src' : 'noof3.png',
             'title' : "Noofie Personas",
             'cap' : <Caption>A set of <b>personas</b> I created based on my 3 target user groups, with the last being the primary/ideal user.</Caption>
         },{
             'src' : 'noof4.png',
             'title' : "Noofie Wireframs",
             'cap' : <Caption>Two snapshots of <b>wireframes</b> that I made into <b>prototypes</b> with <Noun name="pop"/> and <Noun name="marvel"/> to test my ideas & further designs.</Caption>
         },{
             'src' : 'noof5.png',
             'title' : "Noofie UI",
             'cap' : <Caption>Some shots of the UI designs.</Caption>
         },{
             'src' : 'noof9.png',
             'title' : "Noofie UI Compoments",
             'cap' : <Caption>A sheet of UI Components used to guide the design in <Noun name="sketch"/>.</Caption>
         },{
             'src' : 'noof6.gif',
             'title' : "Noofie App Demo",
             'cap' : <Caption>A demo of the the homepage swiping interaction I coded with iOS Swift.</Caption>
         },{
             'src' : 'noof7.png',
             'title' : "Noofie Webpage",
             'cap' : <Caption>Promotional single-page website I made for Noofie with <Noun name="wix"/> that demostrates <b>visual consistency</b>.</Caption>
         },{
             'src' : 'noofdeck.png',
             'title' : "Noofie Pitch Deck",
             'cap' : <Caption>The <b>pitchdeck</b> I creatde for Noofie in Apple Keynote that demostrates <b>visual consistency</b>.</Caption>
         },
     ],
    'honeit' : [
        {
             'src' : 'honeit3.jpg',
             'title' : "HoneIt Usability Report",
             'cap' : <Caption>An annotated usability report I made in <Noun name="omni"/> on then HoneIT interface based on common feedback we got from <b>usability testing</b>.</Caption>
         },{
             'src' : 'honeitred1.jpg',
             'title' : "HoneIt Annotated Redesign I",
             'cap' : <Caption>An annotated redesign I made in <Noun name="omni"/> on our suggested redesign wireframes for the "Interviewing" screen explaining our details and rationales.</Caption>
         },{
             'src' : 'honeitred2.jpg',
             'title' : "HoneIt Annotated Redesign II",
             'cap' : <Caption>An annotated redesign I made in <Noun name="omni"/> on our suggested redesign wireframes for the "Schedule Interview" screen explaining our details and rationales.</Caption>
         },{
             'src' : 'honeit4.jpg',
             'title' : "HoneIt Redesigned User Flows",
             'cap' : <Caption>A set of <b>user flows</b> demostrating how our redesigns will fit into the platform navigation and task flow.</Caption>
         },{
             'src' : 'honeitdeck.png',
             'title' : "HoneIt Presentation Deck",
             'cap' : <Caption>Our keynote for the final client <b>presentation</b>.</Caption>
         },
    ],
    'freelance' : [
        {
             'src' : 'free1.png',
             'title' : "Mid-fi Wireframes",
             'cap' : <Caption></Caption>
         },{
             'src' : 'free2.png',
             'title' : "Andriod UI Design",
             'cap' : <Caption>A set of app UI design I did for startup Yttor in 2017.</Caption>
         },{
             'src' : 'free3.png',
             'title' : "Andriod UI Design",
             'cap' : <Caption>A set of screen concepts I designed for an citizen-engagement app following the (then) <b>Material Design Guidelines</b> in 2016.</Caption>
         },{
             'src' : 'free4.png',
             'title' : "iOS UI Design",
             'cap' : <Caption>A set of app design I did for startup Orange Capital in 2016.</Caption>
         },{
             'src' : 'free5.png',
             'title' : "Web Design",
             'cap' : <Caption>The homepage of the website I made for Palo ALto VC Amino Capital in <Noun name="webflow"/> in 2016.</Caption>
         },{
             'src' : 'free6.png',
             'title' : "Infographics I",
             'cap' : <Caption></Caption>
         },{
             'src' : 'free7.png',
             'title' : "Infographics II",
             'cap' : <Caption></Caption>
         },
    ],
    'parallax' : [
        {
            'src' : 'helloworld.png',
            'title' : "Hello World Parallax Webpage",
            'cap' : <Caption></Caption>
        }
    ]
    };
//dynamically add repetitive augumentations...
for( var setKey in imgs ){
    imgs[setKey].forEach(function(e){
        e.src = "/src/assets/work/"+e.src;
        e.title = <span className='title'>{e.title}</span>;
    });
}


//=====================================================
export class WorkSet extends Component {
    render(){
        let set = this.props.set;
        var rows = [];
        imgs[set].forEach(function(e,i){
            rows.push(<Thumb set={set} index={i} key={"a"+i}/>)
        });
        return (<span>
            {rows}
        </span>);
    }
}

class Thumb extends Component {
    constructor(props) {
        super(props);
        this.toggleLightbox = this.toggleLightbox.bind(this);
        
        this.state = {
            isOpen: false,
            photoIndex:this.props.index
        };
      }
    
    toggleLightbox(){
        this.setState({ isOpen : !this.state.isOpen });
        this.setState({photoIndex:this.props.index});
    }
    
    render(){
        var {set,index} = this.props;
        var photoIndex  = this.state.photoIndex;
        let length = imgs[set].length;
        
        return (<span>
            <div className="workImg"><img onClick={this.toggleLightbox} src={imgs[set][index].src} alt={imgs[set][index].title}/></div>
 
            {this.state.isOpen && (
              <Lightbox
                wrapperClassName="lightbox"
                mainSrc={imgs[set][photoIndex].src}
                nextSrc={imgs[set][(photoIndex + 1) % length].src}
                prevSrc={imgs[set][(photoIndex + length - 1) % length].src}
                imageTitle={imgs[set][photoIndex].title}
                imageCaption={imgs[set][photoIndex].cap}
                onCloseRequest={this.toggleLightbox}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + length - 1) % length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % length,
                  })
                }
              />
            )}
        </span>);
    }
}
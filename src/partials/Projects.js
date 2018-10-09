import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

import { Img, TopLink } from './ArticleUtil'
import { WorkSet } from './WorkSet';
import { Noun } from './Noun';


const projects = {


    "noof" :
        {"title" : "Noofie App",
    "blurb" : <span>
         Noofie App is a solution to young professional networking. Starting at <Noun name='ga'/> and continuing after, I completed a full design cycle of an app as a personal project in 2 month, from <b>ideas</b> and <b>research</b> to multiple <b>iterations</b> of <b>wireframes</b> and <b>tested protytopes</b>, along with a <b>website</b> & <b>pitch deck</b>. For prototpying, I used <Noun name='pop'/> and <Noun name='marvel' />. For UI, I used <Noun name='sketch'/> templates. I even <b>coded</b> the main interface on iOS with Swift.</span>,
        "role" : "research & synthesis / systems design / interaction design / prototyping / UI design / web design / presentation",
    "piece" : <article>
    <Img src='src/assets/noofie/cover.jpg'/>
    <b><a href="/noofie"><h3 className="text-center">GOTO CASE STUDY</h3></a></b>
    </article>,
        
        },

    "honeit" :
        {"title" : "HoneIt Consulting Project",
    "blurb" : <span>
         I did a two week <b>usability</b> consulting project with 2 fellow peers at <Noun name='ga'/> for recruting startup HoneIt. We conducted <b>user interviews & usability audit</b> on the existing product and created wireframes for <b>redesign</b> in <Noun name='sketch'/>. I also created a detailed <b>usability report</b> from user feedback and <b>documentation</b> for our redesign in <Noun name='omni'/>. Since then, the founders have implemented many of our redesigns and still use our research today.</span>,
        "role" : "research & synthesis / presentation",
         "piece" : <article>
         <Img src='src/assets/honeit/deck.jpg' size="lg"/>
    <b><a href="/honeit"><h3 className="text-center">GOTO CASE STUDY</h3></a></b>
    </article>,
        },
    "huawei" :
        {"title" : "Huawei Shanghai Internship",
        "blurb" : <span>I took part in <b>brainstorming sessions </b>pertaining high-level systems design for Huawei’s AI assistant. I also worked on <b>mobile prototyping</b> with <Noun name='flinto'/> & <Noun name='origami' />. I was able to prototype <b>complex interations</b>. I also conducted a few field user research tasks to gather data & feedback, and was able to leverage technology to deliver results.</span>,
         "role": "systems design / interaction design / prototyping",
         "piece" : <article className="scroll">
         <p>For the next major mobile OS release, Huawei want to introduce an AI assistant leveraging it's avaliable sensor data. My task was to help strategize on new features made possible by the data, and brainstorm for a seamless feedback system to help the assistant learn.</p>
         <p>I produced different <b>system diagrams</b> and <b>sketches</b> of screens and interactions. In meetings, I would walk through them with my manager and teammates and discuss.</p>
         <Img src='src/assets/work/hwdiagram.png' />
         <p>Some of my suggestions were taken into futher steps such as digital wireframes and mock-ups.</p>
         <p>When prototyping for complex interactions in <Noun name='origami' />, I was able to quickly and efficiently utilize logical to calculate triggers. Here are examples of interactions I made:</p>
         <Img src='src/assets/work/huawei.gif' size='sm' />
         <Img src='src/assets/work/huawei2.gif' size='sm' />
         <p>And here's an example of logical expressions I used. This is the circle zooming animation calculation in the above example.</p>
         <Img src='src/assets/work/hwori.png' />
         <p>With logic & calculation, I was able to prototype interactions that would've been handed to development team. My prototypes gave our team great insights on the interaction flows and informed our decisions for next steps.</p>
         
    </article>,
        },
    "cssa" :
        {"title" : "CSSA 2018 Website",
        "blurb" : <span>When I joined the Tech Team of the <Noun name='uiuc'/> Chinese Student & Scholar Association in 2016, I quickly assumed the position of <b>webmaster</b> and worked on a <b>redesign</b> of the website. After becoming the <b>Tech Officer</b> in 2018, I <b>updated</b> my old design again I also led <b>workshops</b> explaining my work so future teammates could easily maintain and further develop the site. (See my <a href='https://uiuccssa.github.io/uiuc-cssa-web-2018/'>initial launch</a> vs <a href="http://uiuccssa.org/2018/#home">what it looks like now</a>)</span>,
         "role" : "web design / web development / UI design",
         "piece" :<article className="scroll">
         <p>When I joined in 2016, the website hasn't been updated since 2008 and retains very outdated looks and information. I took the responsibility of a <b>webmaster</b> and lead of team of 5 to completely re-make the site. I condensed the site by removing no longer updated sections and created a visual brand using Chinese visual elements, resulting in a modern, memorable look.</p>
         <p>In 2018, with improved knowledge of coding and design, I realized both aspects of the site can be improved. So I and further condensed the <b>information structure</b> and improved <b>visual tidiness</b>, this time with future collaboration in mind.</p>
    <Img src='src/assets/work/cssa0.jpg' />
    <p>For the 2018 redesign, I used <Noun name='bootstrap'/>, <Noun name='sass'/>, and a simple front-end <Noun name='jquery'/> framework. I also provided a thorough <a href="https://github.com/uiuccssa/uiuc-cssa-web-2018">documentation</a> on github.</p>
    <Img src='src/assets/work/cssa1.png' size="md"/>
    <Img src='src/assets/work/cssa2.png' size="md"/>
    <Img src='src/assets/work/cssa3.png' size="md"/>
    <p>Here's a comparsion of the information architecture of the site in 2016 and 2018.</p>
    <Img size="sm" src='src/assets/work/cssaia.jpg' />
    <p>New members have since been building on my original site.(See my <a href='https://uiuccssa.github.io/uiuc-cssa-web-2018/'>initial launch</a> vs <a href="http://uiuccssa.org/2018/#home">what it looks like now</a>)</p>
    </article>,
        },
/*

    "parallax" :
        {"title" : "Hello, World! Parallax Experiment",
    "blurb" : <span>A single-page website I first made two years ago to experiment with <b>parallax scrolling</b> that featured my (then) resume. Made with <Noun name='htmlcss'/> and <a href='https://github.com/Prinzhorn/skrollr'>Skrollr JS</a>. All visual assets are also drawn by me in <Noun name='sketch'/> and <Noun name='illustrator'/>. <a href='https://jettlwang.github.io/static/parallax/'>See it live(Best on desktop)!</a></span>,},
*/

    "freelance" :
        {"title" : "Startup & Freelance Works",
    "blurb" : <span>I worked on various projects in <b>web</b> & <b>mobile</b> as well as <b>information</b> design.</span>,
        "role" :"web design / UI design / interaction design",
    "piece" : <article className="scroll">
    <Img src='src/assets/work/free6.png'/>
    <Img src='src/assets/work/free2.png'/>
    <Img src='src/assets/work/free3.png' />
    <Img src='src/assets/work/free4.png' />
    <Img src='src/assets/work/free1.png'/>
    <Img src='src/assets/work/free8.png'/>
    <Img src='src/assets/work/free5.png' size="sm"/>
    <Img src='src/assets/work/free7.png' size="sm"/>         
    </article>
    },
    
    "tmayl" :
        {"title" : <a href='https://tellmeaboutyourlife.com'>TellMeAboutYourLife.com</a>,
         "blurb" : <span>TellMeAboutYourLife.com is a casual conversation game that promotes "big talks" and a hackathon project. I came up with some questions with my friend, and designed the <b>structure</b> and <b>interface</b> as a <b>mobile-friendly website</b>. I styled the frontend with <Noun name="react"/> and <Noun name="sass"/>.</span>,
         "role" : "web design / web development / UI design ",
       "piece" : <article className="scroll">
          <p>TMAYL is a game my friends and I often play offline with a set of cards. In this hackathon, we wanted to create the experience online.</p>
           <Img src='src/assets/work/tmayl1.png'/>
           <p>Based on our offline experience, we decided to make TMAYL a mobile-friendly web app that has a minimalistic interface, and allows question submissions and ratings. I designed the interface in <Noun name="sketch"/> and styled the frontend with <Noun name="react"/> and <Noun name="sass"/>.</p>
           <Img src='src/assets/work/tmayl2.png'/>
           To make the interface <b>minimalistic</b>, I wanted to design question navigation without buttons. Since the question should be presistent on the screen until it's talked about offline, I couldn't use the scoring buttons as navigatioin in case they press it before that. So I decided to use a <b>full screen hot spot</b>. New users can <b>quickly learn</b> after a few clicks, and old users can quickly browse through the questions.
           <Img src='src/assets/work/tmayl.gif' size="sm"/>
           <p>Because time was limited, the live site's navigation is currently done with the scoring buttons and refreshing. Nevertheless, we since enjoyed playing this game with new friends everywhere.</p>
           
           
       </article>,
        },
};

//how each row is defined
export const Project = (props) => {
    var proj = projects[props.id];
    return (<tr style={{display : props.display}}>
        <td><h2>{proj.title}</h2>{proj.blurb}<p>ROLE / {proj.role}</p></td>
        <td><div className="td2nd">{proj.piece}</div></td>
        
    </tr>);
}
            
            
var trs = {};  //pair of projects key:<tr/>
for(var e in projects){
    trs[e]=<Project id={e} key={e}/>;
};
 
const tags = {
    "ALL" : Object.values(trs),
//    "CASE STUDY" : [trs['noof'],trs['honeit']],
    "#web" : [trs['cssa'],trs['honeit'],trs['parallax'],trs['freelance'],trs['tmayl']],
    "#mobile" : [trs['huawei'],trs['noof'],trs['freelance'],trs['tmayl']],
    "#frontend" : [trs['cssa'],trs['parallax'],trs['tmayl']],
    "#UX" : [trs['huawei'],trs['noof'],trs['honeit']],
    "#UI" : [trs['cssa'],trs['noof'],trs['parallax'],trs['freelance']],
}

//tag controller
export class Projects extends Component {
    constructor(props){
        super(props);
        this.selectTag = this.selectTag.bind(this);
        this.state = { tag : 'ALL' }
    }
    
    selectTag(newstate){
        this.setState(newstate);
    }
    
    render(){
        var taglist = [];
        for(var e in tags){
            if( e != "ALL") {taglist.push(" "+"/ ");}
            let newstate = {tag : e};
            taglist.push(<TagController onClick={()=>this.selectTag(newstate)} key={e} name={e} init={e == "ALL"}/>);
         }
        
        return(<table>
            <caption>{taglist}</caption>
            
            <tbody>
                {tags[this.state.tag]}
            </tbody>
        </table>);
    }
}

class TagController extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { isActive : this.props.init };
    }
    
    handleClick(){
        this.setState({ isActive : true });
        this.props.onClick();
    }
    
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevState.isActive){this.setState({ isActive : false })};
        
    }

    
    render(){
        return (
            <a
                onClick={this.handleClick}
                className={''+ (this.state.isActive && "active")}
            >{this.props.name+" "}</a>
        );
    }
}
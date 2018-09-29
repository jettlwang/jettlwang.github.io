import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import { WorkSet } from './WorkSet';
import { Noun } from './Noun';

const projects = {
    "huawei" :
        {"title" : "Huawei Shanghai Internship",
        "blurb" : <span>I took part in <b>brainstorming sessions </b>pertaining high-level systems design for Huawei’s AI assistant. I examined what information was available, how to translate it into potential features, and sketched out <b>flows</b>, <b>wireframes</b> and <b>mock-ups</b> to present to my team.  I also worked on <b>mobile prototyping</b> with <Noun name='flinto'/> & <Noun name='origami' />.  I was able to prototype <b>complex interations</b> including voice input, text selection, and interaction-triggered transitions that would’ve been handed to the development team instead. I also conducted a few field user research tasks to gather data & feedback, and was able to leverage technology to deliver results.</span>,
         "role": "systems design / interaction design / prototyping"
        },

    "noof" :
        {"title" : "Noofie App",
    "blurb" : <span>Noofie App is a solution to young professional networking. Starting at <Noun name='ga'/> and continuing after, I completed a full design cycle of an app as a personal project in 2 month, from <b>ideas</b> and <b>research</b> to multiple <b>iterations</b> of <b>wireframes</b> and <b>tested protytopes</b>, along with a <b>website</b> & <b>pitch deck</b>. For prototpying, I used <Noun name='pop'/> and <Noun name='marvel' />. For UI, I used <Noun name='sketch'/> templates. I even <b>coded</b> the main interface on iOS with Swift.</span>,
        "role" : "research / systems design / interaction design / prototyping / UI design / web design / presentation"
        },

    "honeit" :
        {"title" : "HoneIt Consulting Project",
    "blurb" : <span>I did a two week <b>usability</b> consulting project with 2 fellow peers at <Noun name='ga'/> for recruting startup HoneIt. We conducted <b>user interviews & usability audit</b> on the existing product and created wireframes for <b>redesign</b> in <Noun name='sketch'/>. I also created a detailed <b>usability report</b> from user feedback and <b>documentation</b> for our redesign in <Noun name='omni'/>. I wanted to maintain a <b>sustainable</b> impact of our research even after our collaboration ended, so I included <b>generalizable design principles</b> and <b>key strategic decisions</b> in the documentation. Since then, the founders have implemented many of our redesigns and still use our research today.</span>,
        "role" : "research / presentation"
        },

    "cssa" :
        {"title" : "CSSA 2018 Website",
        "blurb" : <span>When I joined the Tech Team of the <Noun name='uiuc'/> Chinese Student & Scholar Association in 2016, I quickly assumed the position of <b>webmaster</b> and worked on a <b>redesign</b> of the website. I condensed the site by removing no longer updated sections and created a visual brand using Chinese visual elements. After becoming the <b>Tech Officer</b> in 2018, I <b>updated</b> my old design again and further condensed the <b>information structure</b> and improved <b>visual tidiness</b>. I used <Noun name='bootstrap'/>, <Noun name='sass'/>, and a simple front-end <Noun name='jquery'/> framework while providing thorough <a href="https://github.com/uiuccssa/uiuc-cssa-web-2018">documentation</a> on github. I also led <b>workshops</b> explaining my work so future teammates could easily maintain and further develop the site. <a href='https://uiuccssa.github.io/uiuc-cssa-web-2018/'>(see it live)</a></span>,
         "role" : "web design / web development / UI design"
        },
/*

    "parallax" :
        {"title" : "Hello, World! Parallax Experiment",
    "blurb" : <span>A single-page website I first made two years ago to experiment with <b>parallax scrolling</b> that featured my (then) resume. Made with <Noun name='htmlcss'/> and <a href='https://github.com/Prinzhorn/skrollr'>Skrollr JS</a>. All visual assets are also drawn by me in <Noun name='sketch'/> and <Noun name='illustrator'/>. <a href='https://jettlwang.github.io/static/parallax/'>See it live(Best on desktop)!</a></span>,},
*/

    "freelance" :
        {"title" : "Startup & Freelance Works",
    "blurb" : <span>I worked on various projects in <b>web</b> & <b>mobile</b> as well as <b>information</b> design.</span>,},
};

export const Project = (props) => {
    var proj = projects[props.id];
    return (<tr style={{display : props.display}}>
        <td><h2>{proj.title}</h2>{proj.blurb}<p>ROLE / {proj.role}</p></td>
        <WorkSet set={props.id}/>
        
    </tr>);
}
var trs = {};  //pair of projects key:<tr/>
for(var e in projects){
    trs[e]=<Project id={e} key={e}/>;
};
 
const tags = {
    "ALL" : Object.values(trs),
    "#web" : [trs['cssa'],trs['honeit'],trs['parallax'],trs['freelance']],
    "#mobile" : [trs['huawei'],trs['noof'],trs['freelance']],
    "#frontend" : [trs['cssa'],trs['parallax']],
    "#UX" : [trs['huawei'],trs['noof'],trs['honeit']],
    "#UI" : [trs['cssa'],trs['noof'],trs['parallax'],trs['freelance']],
}


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
import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import { WorkSet } from './WorkSet';
import { Noun } from './Noun';

const projects = {
    "huawei" :
        {"title" : "Huawei Shanghai Internship",
        "blurb" : <td>I worked on a lot of high level feature design involving <b>AI</b> through brainstorming and <b>thought diagrams</b>, and later designing <b>wireframes</b> & <b>mock ups</b> for them following Huawei&rsquo;s external & internal <b>design guidelines</b>. I also worked on a lot of <b>mobile prototyping</b> with <Noun name='flinto'/> & <Noun name='origami' />.  I was able to prototype complex interations including <b>voice input</b>, <b>text selection</b>, and <b>interaction-triggered transitions</b>. I also conducted a few field <b>user research</b> tasks to gather data & feedback. Unfortunately, no photography or copying of information was allowed in office.</td>,
        },

    "cssa" :
        {"title" : "CSSA 2018 Website",
        "blurb" : <td>I have been on the Tech Team in our Chinese Student & Scholar Association from 2016-2018 and was the <b>Tech Officer</b> 17-18. In 2018, I <b>redesigned</b> the website for CSSA from my own redesign in 2016 and <b>coded</b> it with <Noun name='bootstrap'/>, <Noun name='sass'/> and a simple front-end <Noun name='jquery'/> framework and produced <b>visual assets</b> for the site. I also organized a series of quick <b>workshops</b> and wrote a brief <a href='https://github.com/uiuccssa/uiuc-cssa-web-2018'>documentation</a> to explain my apporach to the newer members of the web team. <a href='https://uiuccssa.github.io/uiuc-cssa-web-2018/'>(see it live)</a></td>
        },

    "noof" :
        {"title" : "Noofie App</h2><span>#mobile #UI #UX #research</span></td>",
    "blurb" : <td>I went through a full design cycle of an app as a personal project from <b>ideas</b> and <b>research</b> to multiple iterations of <b>wireframes</b> and <b>tested protytopes</b>, along with a <b>website</b> & <b>pitch deck</b>. For prototpying, I used <Noun name='pop'/> and <Noun name='marvel' />. For UI, I used <Noun name='sketch'/> templates. I even <b>coded</b> the main interface on iOS with Swift.</td>,},

    "honeit" :
        {"title" : "HoneIt Consulting Project",
    "blurb" : <td>I did a two week consulting project with 2 fellow peers at <Noun name='ga'/> for recruting startup HoneIt. We conducted <b>user interviews & usability tests</b> on the existing product and created wireframes for <b>potential redesign</b> in <Noun name='sketch'/>. I also created a <b>usability report</b> from user feedback and <b>documentation</b> for our redesign in <Noun name='omni'/>. Many of our design suggestions have been adopted in HoneIt&rsquo;s current design.</td>,},

    "parallax" :
        {"title" : "Hello, World! Parallax Experiment",
    "blurb" : <td>A single-page website I first made two years ago to experiment with <b>parallax scrolling</b> that featured my (then) resume. Made with <Noun name='htmlcss'/> and <a href='https://github.com/Prinzhorn/skrollr'>Skrollr JS</a>. All visual assets are also drawn by me in <Noun name='sketch'/> and <Noun name='illustrator'/>. <a href='https://jettlwang.github.io/static/parallax/'>See it live(Best on desktop)!</a></td>,},

    "freelance" :
        {"title" : "Startup & Freelance Works",
    "blurb" : <td>I worked on various projects in <b>web</b> & <b>mobile</b> as well as <b>information</b> design.</td>,},
};

export const Project = (props) => {
    var proj = projects[props.id];
    return (<tr style={{display : props.display}}>
        <td><WorkSet set={props.id}/></td>
        <td>{proj.title}</td>
        {proj.blurb}
    </tr>);
}
var trs = {};  //pair of projects key:<tr/>
for(var e in projects){
    trs[e]=<Project id={e} key={e}/>;
};

const tags = {
    "all" : Object.values(trs),
    "#web" : [trs['cssa'],trs['honeit'],trs['parallax'],trs['freelance']],
    "#UI" : [trs['huawei'],trs['cssa'],trs['noofie'],trs['parallax'],trs['freelance']],
    "#UX" : [trs['huawei'],trs['noof'],trs['honeit']],
    "#frontend" : [trs['cssa'],trs['parallax']],
}

for(var e in tags){
    
}

export class Projects extends Component {
    constructor(props){
        super(props);
        this.selectTag = this.selectTag.bind(this);
        this.state = { tag : 'all' }
    }
    
    selectTag(newstate){
        this.setState(newstate);
    }
    
    render(){
        var taglist = [];
        for(var e in tags){
            taglist.push(" / ");
            let newstate = {tag : e};
            taglist.push(<a onClick={()=>this.selectTag(newstate)} key={e} className="tag">{e+" "}</a>);
            
         }
        
        return(<table>
            <caption>Tags{taglist}</caption>
            
            <tbody>
                {tags[this.state.tag]}
            </tbody>
        </table>);
    }
}

import React, { Component } from 'react';
//import './App.css';
import { WorkImg } from './WorkImg';

const nounImg = {
    "jett": ["Jett Wang", "jett.png"],
    "htmlcss": ["HTML CSS", "htmlcss.png"],
    "bootstrap": ["BootstrapCSS", "bootstrap.png"],
    "sass" : ["SaSS","sass.png"],
    "jquery" : ["jQuery","jquery.png"],
    "react" : ["ReactJS","react.png"],
    "sketch" : ["Sketch","sketch.png"],
    "photoshop" : ["Photoshop","photoshop.png"],
    "illustrator" : ["Illustrator","illustrator.png"],
    "indesign" : ["Indesign","indesign.png"],
    "origami" : ["Origami Studio","origami.png"],
    "flinto" : ["Flinto","flinto.jpg"],
    "invision" : ["Invision","invision.jpg"],
    "marvel" : ["Marvel","marvelapp.png"],
    "pop" : ["POP","pop.png"],
    "omni" : ["Omnigraffle","omni.png"],
    "wix" : ["Wix","wix.png"],
    "weebly" : ["Weebly","weebly.png"],
    "webflow" : ["Webflow","webflow.jpg"],
    "squarespace" : ["Squarespace","squarespace.svg"],
    "firebase" : ["FirebaseDB","firebase.png"],
    "wp" : ["Wordpress","wp.png"],
    "uiuc" : ["University of Illinois at Urbana-Champaign","uiuc.png"],
    "ga" : ["General Assembly","ga.png"],
    "huawei" : ["Huawei Mobile Technologies","huawei.png"],
    "emc" : ["Dell EMC R&D","emc.png"],
    "lenovo" : ["Lenovo R&D","lenovo.png"]
}

function Noun(props) {
    var name = nounImg[props.name][0];

    var nounElem;
    if(name.indexOf(' ') != -1){
        let tempELem = <span style={{"whiteSpace":"nowrap"}}><img src={"/src/assets/noun/"+ nounImg[props.name][1]} alt="" />{" "+name.substr(0,name.indexOf(' '))}</span>;
        nounElem = <span>{tempELem}{ " "+name.substr(name.indexOf(' ')+1) }</span>;
    }else{
        nounElem = <span style={{"whiteSpace":"nowrap"}}><img src={"/src/assets/noun/"+ nounImg[props.name][1]} alt="" />{" "+name}</span>;
    }
    
    return <span className="noun">{nounElem}</span>;
}


class App extends Component {
    
    render(){
        return(<div>
<a href="mailto:jettlwang@gmail.com" id="float">e m a i l m e</a>

<div id="narrow">               
<div><img id="logo" alt="" src="src/assets/jwhy.svg" /></div>
<h1><span>Hello</span>, I’m <span id="jett"><Noun name="jett"/></span>.</h1>
<h2>I’m a UX <b>Designer</b> & <b>Developer</b>.</h2>
<p>I do web & mobile design and front end development. I have experiences in freelance, start ups & corporates. I am a motivated <b>self-starter</b> & <b>fast learner</b> who thrives on <b>complexity</b> & <b>flexiblility</b>.</p>
<p>Things I&rsquo;ve learned:</p>
<ul>
    <li> <Noun name="htmlcss" /> / <Noun name="bootstrap" /> / <Noun name="sass" /> / <Noun name="jquery" /> / <Noun name="react" /> /</li>
    <li> <Noun name="sketch" /> / <Noun name="photoshop" /> / <Noun name="illustrator" /> / <Noun name="indesign" /> / <Noun name="omni" /> /</li>
    <li> <Noun name="origami" /> / <Noun name="flinto" /> / <Noun name="invision" /> / <Noun name="marvel" /> / <Noun name="pop" /> /</li>
    <li> <Noun name="wix" /> / <Noun name="weebly" /> / <Noun name="webflow" /> / <Noun name="squarespace" /></li>
</ul>
<p>Currently , I am also learning <Noun name="firebase" /> / <Noun name="wp" /></p>
               
<p>I have a degree in <b>Economics</b> at <Noun name="uiuc" />, while also have 21 hours of classes in <b>Computer Science</b> including Data Structure / UI Design & Development / Data Visualization.</p>
<p> I received <b>design education</b> through the 3-month UX Design Immersive at <Noun name="ga" /> in San Francisco, CA.</p>

<p>I've interned as a <b>designer</b> at <br/><Noun name="huawei" /> in Shanghai, China / YTTRO Mobile in Palo Alto, CA. <br/>As a <b>software engineer</b> at <br/><Noun name="emc" /> in Beijing, China / <Noun name="lenovo" /> in Beijing, China.</p><p> I have also done some <b>freelance</b> design work.</p>

<p>In my free time I enjoy stargazing, picnics, Chinese culture, meditation & spiritual matters, and writing raps.</p>               

<p>Here are some examples of my work (& funs):</p>


<table><tbody>
<tr><td><WorkImg src={["huawei.gif","huawei2.gif"]} alt="huawei" /></td>
    <td><h2>Huawei Shanghai Internship</h2></td>
    <td className="td3rd">I worked on a lot of high level feature design involving <b>AI</b> & <b>mobile prototyping</b> with <Noun name="flinto"/> & <Noun name="origami" />. I was able to prototype complex interations including <b>voice input</b>, <b>text selection</b>, <b>interaction-triggered transitions</b>. I also conducted a few field <b>user research</b> tasks to gether data & feedback.</td></tr>
<tr><td><WorkImg src={["cssa1.png","cssa2.png","cssa3.png"]} alt="CSSA" /></td>
    <td><h2>CSSA 2018 Website</h2></td>
    <td>In about a school week, I <b>redesigned</b> the website for our Chinese Student & Scholar Association and <b>coded</b> it with <Noun name="bootstrap"/>, <Noun name="sass"/> and a simple front-end <Noun name="jquery"/> framework. I also organized a series of quick <b>workshops</b> and wrote some basic <b>documentations</b> to explain my apporach to the newer members of the web team. <a href="https://uiuccssa.github.io/uiuc-cssa-web-2018/">(see it live)</a></td></tr>
<tr><td><WorkImg src={["noof1.png","noof3.png","noof4.png","noof5.png","noof6.gif","noof7.png","noof2.jpeg"]} alt="noofie" /></td>
    <td><h2>Noofie App</h2></td>
    <td>I designed this app as a personal project from <b>ideas</b> to multiple iterations of <b>tested</b> low to high fidelity <b>protytopes</b>, along with a <b>website</b> & <b>pitch deck</b>. For prototpying, I used <Noun name="pop"/> and <Noun name="marvel" />. I even <b>coded</b> the main interface on iOS with Swift.</td></tr>
<tr><td><WorkImg src={["honeit1.png","honeit2.jpg","honeit3.jpg","honeit4.jpg"]} alt="honeit" /></td>
    <td><h2>HoneIT Consulting</h2></td>
    <td className="td3rd">I did a two week consulting project with 2 fellow peers at <Noun name="ga"/> for recruting platform startup HoneIt. We conducted <b>user interview & testing</b> on the existing product and created wireframes for <b>potential redesign</b>. I also created a <b>usability report</b> from user feedback and the <b>documentation</b> for our redesign in <Noun name="omni"/>. Many of our design suggestions have been adopted in HoneIt's current design.</td></tr>
<tr><td><WorkImg src={["free1.png","free2.png","free3.png","free4.png","free5.png","free6.png","free7.png"]} alt="freelance" /></td>
    <td><h2>Startup & Freelance Works</h2></td>
    <td className="td3rd">I worked on various projects in <b>web</b> & <b>mobile</b> as well as <b>information</b> design.</td></tr>
</tbody></table>

<p>And here&rsquo;s my <a href="/resume/resume.pdf">resume</a>.</p>

<hr></hr>
<p className="small">Copyright Jett Wang @ 2018. Made with <Noun name="sass"/>, <Noun name="react"/> and <Noun name="jett"/> quirks.</p>
</div>
        </div>
        );}
}

export default App;

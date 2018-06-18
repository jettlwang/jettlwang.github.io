import React, { Component } from 'react';
//import './App.css';
import { Noun } from './Noun';
import { WorkImg } from './WorkImg';

import { WorkSet } from './WorkSet';
import 'react-image-lightbox/style.css';

class App extends Component {
    
    render(){
        return(<div> 
<a href="mailto:jettlwang@gmail.com" id="float">e m a i l m e</a>

<div id="narrow">     
<div><img id="logo" alt="" src="src/assets/jwhy.svg" /></div>
<h1><span>Hello</span>, I’m <span id="jett"><Noun name="jett"/></span>.</h1>
<h2>I’m a UX <b>Designer</b> & <b>Developer</b>.</h2>
<p>I do web & mobile design and front end development. I have experience in freelance, start ups & global firms. I am a motivated <b>self-starter</b> & <b>fast learner</b> who thrives on <b>complexity</b> & <b>flexiblility</b>.</p>
<p>Things I&rsquo;ve learned:</p>
<ul>
    <li> <Noun name="htmlcss" /> / <Noun name="bootstrap" /> / <Noun name="sass" /> / <Noun name="jquery" /> / <Noun name="react" /></li>
    <li> <Noun name="sketch" /> / <Noun name="photoshop" /> / <Noun name="illustrator" /> / <Noun name="indesign" /> / <Noun name="omni" /></li>
    <li> <Noun name="origami" /> / <Noun name="flinto" /> / <Noun name="invision" /> / <Noun name="marvel" /> / <Noun name="pop" /></li>
    <li> <Noun name="wix" /> / <Noun name="weebly" /> / <Noun name="webflow" /> / <Noun name="squarespace" /></li>
</ul>
<p>Currently , I am also learning <Noun name="firebase" /> / <Noun name="wp" /></p>
               
<p>I have a degree in <b>Economics</b> at <Noun name="uiuc" /> and also took classes in <b>Computer Science</b> including Data Structure / UI Design & Development / Data Visualization.</p>
<p>I received my <b>design education</b> through the 3-month UX Design Immersive at <Noun name="ga" /> in San Francisco, CA.</p>

<p>I've interned as a <b>designer</b> at <br/><Noun name="huawei" /> in Shanghai, China,<br/>and as a <b>software engineer</b> at <br/><Noun name="emc" /> in Beijing, China / <Noun name="lenovo" /> in Beijing, China.<br/> I have also done <b>freelance</b> design work for startups, student organizations, and small companies.</p>

<p>In my free time I enjoy stargazing, picnics, Chinese culture, meditation & spiritual matters, and writing raps.</p>               

<p>Here are some examples of my work:</p>


<table><tbody>
<tr><td><WorkSet set="huawei"/></td>
    <td><h2>Huawei Shanghai Internship</h2></td>
    <td>I worked on a lot of high level feature design involving <b>AI</b> & <b>mobile prototyping</b> with <Noun name="flinto"/> & <Noun name="origami" />. I was able to prototype complex interations including <b>voice input</b>, <b>text selection</b>, and <b>interaction-triggered transitions</b>. I also conducted a few field <b>user research</b> tasks to gather data & feedback.</td></tr>
<tr><td><WorkImg src={["cssa1.png","cssa2.png","cssa3.png"]} alt="CSSA" /></td>
    <td><h2>CSSA 2018 Website</h2></td>
    <td>In about a school week, I <b>redesigned</b> the website for our Chinese Student & Scholar Association and <b>coded</b> it with <Noun name="bootstrap"/>, <Noun name="sass"/> and a simple front-end <Noun name="jquery"/> framework. I also organized a series of quick <b>workshops</b> and wrote some brief <a href="https://github.com/uiuccssa/uiuc-cssa-web-2018">documentation</a> to explain my apporach to the newer members of the web team. <a href="https://uiuccssa.github.io/uiuc-cssa-web-2018/">(see it live)</a></td></tr>
<tr><td><WorkImg src={["noof1.png","noof3.png","noof4.png","noof5.png","noof6.gif","noof7.png","noof2.jpeg"]} alt="noofie" /></td>
    <td><h2>Noofie App</h2></td>
    <td>I went through a full design cycle of an app as a personal project. <b>ideas</b> to multiple iterations of <b>tested protytopes</b>, along with a <b>website</b> & <b>pitch deck</b>. For prototpying, I used <Noun name="pop"/> and <Noun name="marvel" />. For UI, I used <Noun name="sketch"/> templates. I even <b>coded</b> the main interface on iOS with Swift.</td></tr>
<tr><td><WorkImg src={["honeit1.png","honeit2.jpg","honeit3.jpg","honeit4.jpg"]} alt="honeit" /></td>
    <td><h2>HoneIT Consulting</h2></td>
    <td>I did a two week consulting project with 2 fellow peers at <Noun name="ga"/> for recruting startup HoneIt. We conducted <b>user interviews & usability tests</b> on the existing product and created wireframes for <b>potential redesign</b> in <Noun name="sketch"/>. I also created a <b>usability report</b> from user feedback and <b>documentation</b> for our redesign in <Noun name="omni"/>. Many of our design suggestions have been adopted in HoneIt's current design.</td></tr>
<tr><td><WorkImg src={["free1.png","free2.png","free3.png","free4.png","free5.png","free6.png","free7.png"]} alt="freelance" /></td>
    <td><h2>Startup & Freelance Works</h2></td>
    <td>I worked on various projects in <b>web</b> & <b>mobile</b> as well as <b>information</b> design.</td></tr>
</tbody></table>

<p>And here&rsquo;s my <a href="/resume.pdf">resume</a>.</p>

     <WorkSet set="noof"/>

<hr></hr>
<p className="small">Copyright Jett Wang @ 2018. Made with <Noun name="sass"/>, <Noun name="react"/> and <Noun name="jett"/> quirks.</p>
</div>
        </div>
        );}
}

export default App;

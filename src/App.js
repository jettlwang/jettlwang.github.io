import React, { Component } from 'react';
//import './App.css';
import { WorkImg } from './WorkImg';

const nounImg = {
    "jett": ["Jett Wang", "jett.png"],
    "htmlcss": ["HTML CSS", "htmlcss.svg"],
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
    "firebase" : ["FirebaseDB",""],
    "wordpress" : ["Wordpress",""],
    "uiuc" : ["University of Illinois at Urbana-Champaign","uiuc.png"],
    "ga" : ["General Assembly","ga.png"],
    "huawei" : ["Huawei Mobile Technologies","huawei.png"],
    "emc" : ["Dell EMC R&D","emc.png"],
    "lenovo" : ["Lenovo R&D","lenovo.png"]
}

function Noun(props) {
    return <span className="noun"><img src={"/src/assets/noun/"+ nounImg[props.name][1]} alt="" />{" "+nounImg[props.name][0]}</span>;
//    return <p>"noun"</p>;
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
    <li> <Noun name="htmlcss" /> / <Noun name="bootstrap" /> / <Noun name="sass" /> / <Noun name="jquery" /> / <Noun name="react" /></li>
    <li> <Noun name="sketch" /> / <Noun name="photoshop" /> / <Noun name="illustrator" /> / <Noun name="indesign" /> / <Noun name="omni" /></li>
    <li> <Noun name="origami" /> / <Noun name="flinto" /> / <Noun name="invision" /> / <Noun name="marvel" /> / <Noun name="pop" /></li>
    <li> <Noun name="wix" /> / <Noun name="weebly" /> / <Noun name="webflow" /> / <Noun name="squarespace" /></li>
</ul>
<p>Currently , I am also learning <Noun name="firebase" /> / <Noun name="wordpress" /></p>
               
<p>I have a degree in <b>Economics</b> at <Noun name="uiuc" />, while also have taken classes in <b>Computer Science</b> including Data Structure / UI Design & Development / Data Visualization.</p>
<p> I received <b>design education</b> through the 3-month UX Design Immersive at <Noun name="ga" /> in San Francisco, CA.</p>

<p>I've interned as a <b>designer</b> at <br/><Noun name="huawei" /> in Shanghai, China / YTTRO Mobile in Palo Alto, CA. <br/>As a <b>software engineer</b> at <br/><Noun name="emc" /> in Beijing, China / <Noun name="lenovo" /> in Beijing, China.</p><p> I have also done some <b>freelance</b> design work.</p>

<p>In my free time I enjoy stargazing, picnics, meditation, Chinese culture, and writing raps.</p>               

<p>Here are some examples of my work (& funs):</p>


<table><tbody>
<tr><td><WorkImg src={["huawei.gif"]} alt="huawei" /></td>
    <td><h2>Huawei Shanghai Internship</h2></td>
    <td className="td3rd">I worked on a lot of high level feature design involving AI & mobile prototyping with <Noun name="flinto"/> & <Noun name="origami" />. I also conducted a few field user research tasks.</td></tr>
<tr><td><WorkImg src={["cssa1.png","cssa2.png","cssa3.png"]} alt="CSSA" /></td>
    <td><h2>CSSA 2018 Website</h2></td>
    <td>In about a school week, I redesigned the website for our Chinese Student & Scholar Association and coded it with <Noun name="bootstrap"/>, <Noun name="sass"/> and a simple front-end <Noun name="jquery"/> framework. I also organized a quick workshop and wrote some basic documentations to explain my apporach to the newer members of the web team.</td></tr>
<tr><td><WorkImg src={["noof1.png","noof2.jpeg","noof3.png","noof4.png","noof5.png","noof6.gif","noof7.png"]} alt="noofie" /></td>
    <td><h2>Noofie App</h2></td>
    <td>I designed this app as a personal project from ideas to multiple iterations of tested low to high fidelity protytopes, along with a website & pitch deck. I even coded the main interface on iOS with Swift.</td></tr>
</tbody></table>

<p>Here's my <a href="#">resume</a>.</p>
</div>
        </div>
        );}
}

export default App;

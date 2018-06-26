import React, { Component } from 'react';
//import './App.css';
import { Noun } from './Noun';
import { WorkSet } from './WorkSet';
import { Projects } from './Projects';
import 'react-image-lightbox/style.css';

class App extends Component {
    
    render(){
        return(<div> 
<a href="mailto:jettlwang@gmail.com" id="float">e m a i l m e</a>

<div id="narrow">     
<div><img id="logo" alt="" src="src/assets/jwhy.svg" /></div>
<h1><span>Hello</span>, I’m <span id="jett"><Noun name="jett"/></span>.</h1>
<h2>I’m a UX <b>Designer</b> & <b>Developer</b>.</h2>
<p>I do <b>web & mobile design</b> and <b>front end development</b>. I have experience in freelance, start ups & global firms. I am a motivated <b>self-starter</b> & <b>fast learner</b> who thrives on <b>complexity</b> & <b>flexiblility</b>.</p>
<p>Things I&rsquo;ve learned:</p>
<ul>
    <li> <Noun name="htmlcss" /> / <Noun name="bootstrap" /> / <Noun name="sass" /> / <Noun name="jquery" /> / <Noun name="react" /></li>
    <li> <Noun name="sketch" /> / <Noun name="photoshop" /> / <Noun name="illustrator" /> / <Noun name="indesign" /> / <Noun name="omni" /></li>
    <li> <Noun name="origami" /> / <Noun name="flinto" /> / <Noun name="invision" /> / <Noun name="marvel" /> / <Noun name="pop" /></li>
    <li> <Noun name="wix" /> / <Noun name="weebly" /> / <Noun name="webflow" /> / <Noun name="squarespace" /></li>
</ul>
<p>Currently , I am also learning <Noun name="firebase" /> / <Noun name="wp" /></p>
               
<p>I have a degree in <b>Economics</b> at <Noun name="uiuc" /> and also took classes in <b>Computer Science</b> including Data Structure / UI Design & Development / Data Visualization.</p>
<p>I received my <b>design education</b> through the 3-month <a href="https://generalassemb.ly/education/user-experience-design-immersive?where=san-francisco">UX Design Immersive</a> at <Noun name="ga" /> in San Francisco, CA.</p>

<p>I&rsquo;ve interned as a <b>designer</b> at <br/><Noun name="huawei" /> in Shanghai, China,<br/>and as a <b>software engineer</b> at <br/><Noun name="emc" /> in Beijing, China / <Noun name="lenovo" /> in Beijing, China.<br/> I have also done <b>freelance</b> design work for startups, student organizations, and small companies.</p>

<p>In my free time I enjoy stargazing, picnics, Chinese culture, meditation & spiritual matters, and writing raps.</p>               

<p>Here are some examples of my design work:</p>


<Projects />

<p>And here&rsquo;s my <a href="/resume.pdf">resume</a>.</p>


<hr></hr>
<p className="small">Copyright Jett Wang @ 2018. Made with <Noun name="sass"/>, <Noun name="react"/> and <Noun name="jett"/> quirks.</p>
</div>
        </div>
        );}
}

export default App;

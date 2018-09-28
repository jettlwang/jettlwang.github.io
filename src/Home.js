import React, { Component } from 'react';

import { Noun } from './partials/Noun.js';
import { WorkSet } from './partials/WorkSet';
import { Projects } from './partials/Projects';
import 'react-image-lightbox/style.css';

export class Home extends Component {
    
    render(){
        return(<div> 
<a href="mailto:jettlwang@gmail.com" id="float">e m a i l m e</a>

<div id="narrow">     
<div><img id="logo" alt="" src="src/assets/jwhy.svg" /></div>
<h1><span>Hello</span>, I’m <span id="jett"><Noun name="jett"/></span>.</h1>
<h2>I’m an Experience <b>Designer</b> & <b>Developer</b>.</h2>
<p>I’m a motivated <b>self starter</b> that always looks to apply my skill set as well as further expand it. I perform best in exciting environments where I’m allowed <b>flexibility</b> and <b>opportunity</b>.</p>

<p>My past experience has been in <b>web/mobile design</b> and <b>front end development</b>.</p>
               
<p>Here&rsquo;s my <a href="/resume.pdf">resume</a>.</p>

<p>Here are examples of my design work:</p>
<Projects />
<br/>



<p>In my free time I enjoy stargazing, picnics, writing clubs, Chinese culture and practicing Chan Buddhism.
</p><p>
In the past summer, I attended the Woodenfish Foundation <a href="https://www.woodenfish.org/hbmlp">Humanistic Buddhist Monastic Life Program</a> with the where 100 students from top schools around the world gather in a Buddhist monastery in rural China, for 3 weeks of <b>monastic life training</b> and a week-long <b>silent meditation retreat</b>. Then, I taught contemplative practices to youths 8-16 at the <a href="https://www.woodenfish.org/world-citizens-youth-camp">World CitiZen Youth Summer Camp</a>.<br/>
I am now the Woodenfish Alumni Chair in NY and uphold <b>daily online meditation</b> and <b>offline meetings</b>.</p>               

<a href="mailto:jettlwang@gmail.com">Let&rsquo;s get in touch.</a>
               
<hr />
<p className="small">Copyright <Noun name="jett"/> @ 2018. Made with <Noun name="sass"/>, <Noun name="react"/> and mindfulness.</p>
</div>
        </div>
        );}
}

import React, { Component } from 'react';

import { Noun } from './partials/Noun.js';
import { WorkSet } from './partials/WorkSet';
import { Projects } from './partials/Projects';
import 'react-image-lightbox/style.css';

export class Home extends Component {
    
    render(){
        return(<div> 


<div id="narrow">     
<h1><span>Hello</span>, I’m <span id="jett"><Noun name="jett"/></span>.</h1>
<h2>I’m an Experience <b>Designer</b> & <b>Developer</b>.</h2>
<p>I’m a <b>self starter</b> that performs best in exciting environments where I’m allowed <b>flexibility</b> and <b>opportunity</b>.</p>

<p>My past experience has been in <b>web/mobile design</b> and <b>front end development</b>.</p>
               
<p>Here&rsquo;s my <a href="/resume.pdf"><b>resume</b></a>.</p>

<p>Here are examples of my design work:</p>
<Projects />
<br/>

<p>In my free time I practice Chan Buddhism and am the <a href="http://woodenfish.org/">Woodenfish</a> Alumni Chair in NY.</p><p>I uphold <b>daily online meditation</b> and offline meetings.</p>

<a href="mailto:jettlwang@gmail.com"><b>Let&rsquo;s get in touch.</b></a>

</div>
        </div>
        );}
}

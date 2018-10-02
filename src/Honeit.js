import React, { Component } from 'react';

import { Noun } from './partials/Noun.js';
import { Img, TopLink } from './partials/ArticleUtil'


export class Honeit extends Component {
    
    render(){
        return(<article>
            <h1>HoneIT UX Consulting</h1>
            
            <h3 id="overview">Overview</h3>
    <p>HoneIt was a 3-week consulting project I did with 2 other designers at General Assembly. Our client HoneIt, an interview technology startup, has a shipped interview assistant products predominantly targeting recruiters. We ran <b>usability tests</b> on their product through <b>user interviews</b> and delivered detailed <b>usability audits</b> and <b>design suggestions</b>.
    </p>

    <Img src="src/assets/honeit/deck.jpg" size="full" />
               
<h3>Scope</h3>

<p>3 weeks in Aug 2016, with 2 teammates
<br/> research & synthesis / presentation</p>

<h3>Identifying the Problem
    </h3><p>Upon seeing HoneIT’s product, we were able to spot many unresolved usability issues. Because our team was strong in research and systems design, we suggested <b>validating the existing product</b> and <b>delivered design suggestions</b> to help HontIT better serve its existing audience - recruiters.
    </p>


<h3>Usability Tests</h3>

<p>We broke down HoneIT’s interview process into 3 components:
    </p>
               <ul>
<li><b>Schedule</b>: scheduling an interview through the platform</li>
<li><b>Record</b>: conduct the interview on the platform through HontIT’s note taking structure</li>
<li><b>Share</b>: reviewing and sharing results with others post-interview</li>
</ul>
               
<p>We wanted to run tests on the entire journey through our own phone interviews. We designed the following interview questions:
    </p>

    <Img size="lg" src="src/assets/honeit/interview.jpg" />


<p>We conducted <b>7 formal tests</b> within 3 days, with 5 subjects being the current targeted users(recruiters), and the rest from industries that interviews regularly (journalism, admissions etc.).
    </p>
<h3>Synthesis</h3>

<p>We gathered many useful insights. To organize them, we decided to make a giant <b>affinity diagram</b>.
    </p>

<Img size="md" src="src/assets/honeit/affinity.jpg" />

<p>We wrote feedback onto sticky notes and used different colors to represent how much that person overlapped with the <b>target audience</b>.
    </p>
<p>To organize, we put different notes under the different components throughout the process and stacked similar/additional feedback into a strip.
    </p>
<p>This system really helped us process all the information and we were able to quickly <b>prioritize</b> with the color code.
    </p>
<p>The feedback contains a lot of valuable information on what the users liked and didn’t like, what they were confused about, and what they would like to see.
    </p>
    
<h3>Suggested Redesign</h3>

<p>Since the “Record” process was one of HoneIT’s most distinguishing features, we decided to work on a redesign.
    </p>
<p>As a team, we discussed together how to best incorporate user feedback into features, to <b>maximize improvements</b> in experience with <b>minimal changes</b> required from our clients end.
    </p>
<p>Here’s a comparison of the main interview recording screen with our redesign that we finalized in <Noun name="sketch" />.
    </p>
<Img size="full" src="src/assets/honeit/redesign.jpg" />


<p>One example of a change we made was adding waveform diagrams to the top. A waveform diagram is included in HoneIT’s existing platform showcasing the entire recording of the interview, but is not shown until the post-interview Share screen. Users were <b>surprised</b> to learn that the entire interview was recorded.
    </p>
<p>By adding the diagram to the screen, we show users that the interview is being recorded realtime, reducing the surprise factor while not adding more development pressure on HoneIT since the diagram already existed.
    </p>
<h3>Presentation & Deliverables</h3>
<p>I took responsibility of creating documentation on both the audit and redesign. Not only did I want to present our client with what the user feedback, I wanted to make sure that they understood that <b>we were on their side</b>, and to see this feedback as valuable.
    </p>
<p>To make understanding easier, I used a <b>numbered annotation system</b> that grouped similar interaction issues under topics. For each annotation, I explained <b>what</b> a potential improvement could be and <b>why</b> based on the user feedback. For long term impact, I also framed it with should/could to convey <b>priority</b>, so that even if HoneIT couldn’t meet the suggestion, they could still make efforts in the right direction.
    </p>
<p>For example, here is the same Recording screen usability audit.
    </p>
    <Img src="src/assets/honeit/audit.jpg" size="full" />

<p>Topic 1 suggests a clearer way to show the recording functionality (reflected in our redesign). Topic 2 explains that users expected more flexibility, and how each interaction under it could reflect this need.
    </p>
<p>In our final presentation, we mainly focused on walking through our redesign so that they could directly see the impact of our research first, and ease into the details of the documentation later.
    </p>

<p>Our client expressed agreement with many of the user insights we've found.
    </p>
<h3>Looking Back & Forward</h3>

<p>There were many other tasks we would have like to do, including validation of our redesign, and more suggestions for the rest of the product.
    </p>
<p>Overall, it was a very enjoyable process for me to be able to incorporate user feedback so closely with design, and to think about each design decision thoroughly.
    </p>
<p>2 years later, I spoke to the founders again, and they were happy about our designs. Many of our suggestions have since been published live on HontIT’s website.
    </p>
        
        <TopLink />
        </article>);}
}

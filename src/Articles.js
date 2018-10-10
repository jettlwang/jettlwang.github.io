import React, { Component } from 'react';

import { Noun } from './partials/Noun.js';
import { Img, TopLink } from './partials/ArticleUtil'


export class Noofie extends Component {
    
    render(){
        return(<article className="fullpage">
            <h1>Noofie App</h1>
            
            <h3 id="overview">Overview</h3>

    <Img src="src/assets/noofie/cover.jpg" size="full" />
               
<h3>Scope</h3>

<p>Aug-Oct 2016<br/>
research / systems design / interaction design / prototyping / UI design / web design / presentation</p>

<h3>Problem</h3>

<p>Networking has always been a shared fear among young professionals. I focused on this problem as an independent study for my final project at GA, using design to <b>make entry-level networking easier</b>.</p>

<p>Specifically, I identified 3 issues:</p>

<ul>
<li>The gap between expectations in school vs. workplace</li>

<li>Learning job search and interview-specific strategies can be overwhelming</li>

<li>It is hard for people with little professional experience  to build a mutually beneficial professional relationship</li>
</ul>

<h3>Early Concepts &amp; Competitive research</h3>

<p>I started with a strategic mind map to gather my thoughts and see the overall strategic direction.</p>

           <Img size="full" src="src/assets/noofie/initialthought.png" />

<p>In this map, I identified the <b>3 issues</b>(top left), listed a few competitors and their respective niche (top right), some ideas for the product &amp; team <b>culture</b>(middle), and a few <b>business analyses</b> like SWOT, PEST and ERRC(bottom). I looked at a few channels that young professionals were using for the job search process: LinkedIn, Glassdoor, alumni &amp; various communities... </p>

<p>Through this exercise, I formed a better idea of the <b>problem space</b> and found that there are indeed opportunities on the market for entry level networking/mentorship that I could specialize in.</p>

<p>Next I wanted to how my skill set in design could play in.</p>

<h3>Expert Interviews</h3>

<p>I reached out to 4 young professionals who didn’t mind networking and asked them about their success to find out if I could leverage design to replicate their experience. I also researched online guides for how young professionals can network.</p>

<p>From their insights and the online guides, I realized that young professionals are more likely  to receive help from each other, so I decided to <b>narrow my target user base</b> toward only people in early stages of their career.</p>

<p>I also found that when students received help through networking, they reported helping other students when they became professionals themselves. Thus, I thought I could build a <b>community for mentorship</b>. I interviewed another friend who&#39;s been in industry for ~5 years and loves mentoring, to gather insight on what being a mentor meant.</p>

<h3>Strategy &amp; Scope</h3>

<p>From these interviews, I found that a successful early stage professional network has the following characteristics, which could  be transferred into features in my community:</p>
        
        <Img size="md" src="src/assets/noofie/interviews.jpg" />

<p>I realized that a lot of these criterion sounded familiar, such as in <b>dating</b>.</p>

<p>I thought of <a href="https://site.coffeemeetsbagel.com/">Coffee Meets Bagel</a>, a Tinder-like dating app that recognizes the difference in dating habits/needs between different genders(gender related social issues aside) and provides a good design solution.</p>

<p>The two-type user distinction is similar to the mentor vs mentee problem I was facing. Furthermore, despite professional networks usually being considered "weak relationships," <b>developing long term mentorship</b> is often times a “bonus” goal. And my target demographic should already be familiar with a tinder-like mobile experience.</p>

<p>Some features I learned from CMB were:</p>

         <Img size="lg" src="src/assets/noofie/CMB.jpg" />

<h3>Personas</h3>
        
<p>To gain insight about my audience, I set up 3 personas based on <b>my experience job searching since I began college</b>. These 3 users form an ideal network for my app, with Sindy being my primary targeted user: most in need of our service, and can benefit from both user profiles we offer.</p>

        <div className="img-gourp">
        <Img size="md" src="src/assets/noofie/p1.jpg" />
        <Img size="md" src="src/assets/noofie/p2.jpg" />
        <Img size="md" src="src/assets/noofie/p3.jpg" />
        </div>


<h3>User Flow</h3>

<p>Based on my 3 personas, I wrote down what each of them could do on our app with the</p><p className="text-center">
        <b>When I want to …, I … so I ... </b>
</p><p>method and wove together a user flow.</p>

        <Img size="full" src="src/assets/noofie/flowmap.png" />

<p>Through this step, I determined what screens and features I should have for my app, and their relationships to each other.</p>

<h3>Wireframes, Prototypes &amp; Iterations</h3>

<p>From the flow map, I constructed the structure of the app. Then, I designed the wireframe based on familiar interaction patterns. I chose to follow the iOS guidelines for simplicity. Apps I drew inspirations from included dating apps (for connecting), messaging apps (for communication), and calendar apps (for scheduling).</p>

<p>I went through <b>5 usability tests</b> as I iterated my <b>wireframes</b> and <b>prototypes</b> from paper to digital, using <Noun name='pop'/>, <Noun name='sketch'/> and <Noun name='marvel'/>.</p>

         <Img size="md" src="src/assets/noofie/wires.png" />
        <p className="small">Latest prototype <a href="https://marvelapp.com/9ic8e2e/screen/48309394">here</a></p>

<p>With feedback, I was able to include an <b>onboarding flow</b>. Even though users had no trouble understanding all the interfaces, they still had trouble developing a mental framework of the networking process. Thus, I decided to put this meta-information in an onboarding flow, and they were able to make sense of all the steps quickly.</p>
        
        <Img size="lg" src="src/assets/noofie/onboard.png" />


<p>I also improved <b>smaller interaction</b>s. During testing, I observed that users would pause during certain processes to try to understand what was going on. So I tweaked these interactions(including wording) to be more familiar, and observed smoother interactions in the next iteration.</p>

        <Img size="lg" src="src/assets/noofie/improvement.jpg" />

<h3>Look &amp; Feel</h3>
        
    <Img size="lg" src="src/assets/noofie/ui.png" />

<p>Overall, I wanted the branding to be <b>professional and trustworthy</b>, but also <b>fun and energetic</b> for the younger audience. The brand was named from the companion dog breed - Newfoundlands, and our product should be just like the dog - reliable at working, but also good companion.</p>

<p>I started off with creating a color palette, and chose the "professional" blue to be the primary color, with a navy tone (noofie is a water breed!). Drawing further inspiration from the name, I chose brown (the color of the pup) to be the accent color. For other colors such as alert and warning, I kept them vibrant but tuned down brightness to create a fun but <b>subtle</b> look.</p>

        <Img size="sm" src="src/assets/noofie/pallet.jpg" />


<p>For the logo, I decided to go with type as for temporary use. I chose a bold but rounded font, and a thinner version for body texts, again, for a <b>casual-reliable</b> feel.</p>
        
          <Img size="md" src="src/assets/noofie/font.png" />


<h3 id="bonus">Bonus</h3>

<p>To build the prototype, I learned Swift for iOS. For the card animation I used the MDCSwipeToChoose className from github. The on-launch screen was built within a week.</p>
        
         <Img size="sm" src="src/assets/noofie/swipe.gif" />

<p>To spread the hype, I created a quick website on <Noun name="wix"/>. I mostly used default stock graphics, while keeping in mind the “fun &amp; professional” feel. The site introduces the app’s purpose, how it works, why it’s different, and features multiple call to actions that lead to the beta sign up.</p>
    
          <Img size="sm" src="src/assets/noofie/web.png" />

<p>The pitch deck featured some key strategic decisions of the app in the overall problem space following the same visual style, where I reiterated what the problem was and how my design  provides the solution.</p>
         <Img size="md" src="src/assets/noofie/deck.png" />


<h3>Looking Back &amp; Forward</h3>

<p>This project ended as school started again and as I was overcoming some personal issues (with a gap semester to China).</p>

<p>Since this app encompassed both an online and offline experience, the most important thing I would’ve done next was to <b>prototype the full experience</b> including the offline interactions, and to see its effectiveness in achieving my design goal. I also would like to <b>validate</b> more assumptions I had to make throughout the process, including my 3 issues themselves.</p>

<p>Nevertheless, I learned a lot about design going through the full process from idea to prototype, as well as creating the “side-products,” like a pitch deck and website, and how a design fits in the business landscape.</p>
        
        <TopLink />
        </article>);}
}
        

export class Honeit extends Component {
    
    render(){
        return(<article className="fullpage">
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

<p>My teammate also worked on developing prototype personas as HoneIT’s primary and secondary audience. </p>              

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
<p>Here’s a comparison of the main interview recording screen with our redesign that my teammate finalized in <Noun name="sketch" />.
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
<p>In our final presentation, we mainly focused on walking through our redesign so that they could directly see the impact of our research first, and ease into the details of the documentation later.The deck is designed my my teammates.</p>


<h3>Looking Back & Forward</h3>

<p>Our client expressed agreement with many of the user insights we've found.
    </p>

<p>There were many other tasks we would have like to do, including validation of our redesign, and more suggestions for the rest of the product.
    </p>
<p>Overall, it was a very enjoyable process for me to be able to incorporate user feedback so closely with design, and to think about each design decision thoroughly.
    </p>
<p>2 years later, I spoke to the founders again, and they were happy about our designs. Many of our suggestions have since been published live on HontIT’s website.
    </p>
        
        <TopLink />
        </article>);}
}
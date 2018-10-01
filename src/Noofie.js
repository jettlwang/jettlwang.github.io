import React, { Component } from 'react';

import { Noun } from './partials/Noun.js';
import Lightbox from 'react-image-lightbox';

export const TopLink = (props) => {
    return <p>
        <b><a onClick={()=> document.documentElement.scrollTop = 0}>Thanks for reading! Go back to top.</a></b>
    </p>;
}

class Img extends Component {
    constructor(props) {
        super(props);
        this.toggleLightbox = this.toggleLightbox.bind(this);
        
        props = {
            size : "",
            src : "",
        };

        this.state = { isOpen : false, };
  }
    
    toggleLightbox(){
        this.setState({ isOpen : !this.state.isOpen });
    }

    render(){
        return (<span>
                <div className={"img img-"+this.props.size }><img onClick={this.toggleLightbox} src={this.props.src} alt="article image"/></div>

                {this.state.isOpen && (
                  <Lightbox
                    wrapperClassName="lightbox"
                    mainSrc={this.props.src}
                    onCloseRequest={this.toggleLightbox}
                  />
                )}
            </span>);
    }
}

export class Noofie extends Component {
    
    render(){
        return(<article>
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

<h3 id="lookfeel">Look &amp; Feel</h3>

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

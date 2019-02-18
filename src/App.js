import React, { Component } from 'react';

import { Noun } from './partials/Noun.js';

import { Projects, ArticleView } from './partials/Projects';
import 'react-image-lightbox/style.css';

class App extends Component {
    constructor(props){
        super(props);
        this.toggleRight = this.toggleRight.bind(this);
        this.state = {
            isRight : false,
        }
    }


    toggleRight() {
        this.setState({isRight:!this.state.isRight});
        console.log(this.state.isRight);
    }

    render(){
        return(<div>
            
           <div id="content" className={this.state.isRight && "isRight"}>
               
                <h1><span>Hello</span>, I&#39;m <span id="jett"><Noun name="jett"/></span>.</h1>
                <h2>I&rsquo;m a <b>mission driven</b> Product Designer and Developer.</h2>
                <p> My background is in <b>human computer interaction</b> and <b>behavioral economics</b>. I design interfaces and have programming abilities necessary to make my designs come to life.</p>


                <p>I&rsquo;m currently with <a href="https://meetluna.com">
                    <Noun name="luna"/></a> curing communal lonliness.</p>
                <p>Here&rsquo;s my <b><a href="/resume.pdf">resume</a></b>.</p>

                <p>Here are examples of my design work:</p>
               
                <Projects isRight={this.state.isRight}/>
               
               
                <br/>
<p>I&#39;m also currently expolring topics on <a href="http://freakonomics.com/podcast/richard-thaler/">nudge</a>, <a href="https://www.gamified.uk/wp-content/uploads/2017/04/Periodic-Table-of-Gamification-Elements-720x340.png">gamification</a>, and <a href="https://read.compassofdesign.com/what-is-design-strategy-497453c9d83a">design strategy</a>.</p>
                <p>In my free time I practice Chan Buddhism and am the <a href="http://woodenfish.org/">Woodenfish</a> Alumni Chair in NY.</p><p>I uphold <b>daily online meditation</b> and offline meetings.</p>
            
               

        <br/>
        <hr />
        
        <small>Copyright <Noun name="jett"/> @ 2018. Made with <Noun name="sass"/>, <Noun name="react"/> and mindfulness.</small>
        </div>
        
        <div className={"hotspot " + (this.state.isRight && "isRight") } onClick={()=>this.toggleRight()}></div>
       
       </div>
        );}
    
}

export default App;

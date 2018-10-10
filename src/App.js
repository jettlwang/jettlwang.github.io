import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Home } from './Home';
import { Noofie,Honeit } from './Articles';
import { Noun } from './partials/Noun.js';


class App extends Component {
    
    render(){
        return(<div>
            <a href="mailto:jettlwang@gmail.com" id="float">email me</a>
            
               <div id="narrow"><a href="/">
                <img id="logo" alt="" src="src/assets/jwhy.svg" /></a></div>

        
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/noofie" component={Noofie} />
               <Route path="/honeit" component={Honeit} />
              <Route path='/resume' component={() => window.location = '/resume.pdf'}/>

            </div>
          </Router>
        
<br/>
        <div className="small" id="narrow"><hr />Copyright <Noun name="jett"/> @ 2018. Made with <Noun name="sass"/>, <Noun name="react"/> and mindfulness.</div>
        </div>);}
    
}

export default App;

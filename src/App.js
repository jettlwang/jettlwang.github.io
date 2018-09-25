import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Home } from './Home';
import { Noofie } from './Noofie';


import { Noun } from './Noun';
import { WorkSet } from './WorkSet';
import { Projects } from './Projects';
import 'react-image-lightbox/style.css';

class App extends Component {
    
    render(){
        return(
        
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/noofie" component={Noofie} />
              <Route path='/resume' component={() => window.location = '/resume.pdf'}/>

            </div>
          </Router>
        
        
        );}
    
}

export default App;

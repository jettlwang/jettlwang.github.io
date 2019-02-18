import React, { Component } from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';

import { Luna , Noofie , Huawei , Freelance } from './partials/Projects';


class App extends Component {
    render(){
        return(
            <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
            <Route exact path='/huawei' component={Huawei}/>
                <Route exact path='/noofie' component={Noofie}/>
                <Route exact path='/luna' component={Luna}/>
                <Route exact path='/freelance' component={Freelance}/>
            </Switch>
            </BrowserRouter>
        );
    }
}

class Home extends Component {
    render(){
        return(<div style={{"max-width":"945px","margin":"auto"}}>
          <img id="logo" src="src/assets/jwhy.svg" />
           <h1>Hi, I&#39;m Jett.</h1>
           <h2>I&#39;m a product designer.</h2>
           <p>I&#39;m currently the design lead at <a href="https://meetluna.com">Luna</a>.</p>
           <p>My background is in front end development and behavioural economics.</p>
            <p><a href="src/assets/resume.pdf">Resume</a> / <a href="https://linkedin.com/in/jettlwang">LinkedIn</a> / <a href="mailto:jettlwang@gmail.com">Get in Touch</a></p>
            <br />
           <p>Here are my projects:</p>
           <table>
              <tbody>
               <tr>
                  <td><img src="src/assets/noofie/cover.jpg" /></td>
                  <td>
                      <h4>Luna</h4>
                      <p>I touch everything involving product and design.</p>
                      <p>strategy / market research / product development / UX / UI / visual / branding / project management</p>
                  </td>
               </tr>
               <tr>
                  <td><img src="src/assets/work/huawei.gif" /></td>
                  <td>
                      <h4>Huawei Shanghai Internship</h4>
                      <p>I worked on the Mobile OS innovation team and helped explore new concepts for EMUI 7.0 & 8.0. I also made hi-fi prototypes and conducted a variety of user interviws.</p>
                      <p>strategy / UX / user research / prototyping </p>
                  </td>
                </tr>
               <tr>
                  <td><img src="src/assets/noofie/cover.jpg" /></td>
                  <td>
                      <h4>Noofie App</h4>
                      <p>An app I worked on from concept to UI. I even did a little bit of code.</p>
                      <p>strategy / market research / UX / UI / code </p>
                  </td>
               </tr>
               <tr>
                  <td><img src="src/assets/work/free6.png" /></td>
                  <td>
                      <h4>Other Designs</h4>
                      <p>A small collection of visual designs I did.</p>
                      <p>strategy / market research / UX / UI / code </p>
                  </td>
               </tr>
               </tbody>
           </table>
               <br />
            <p>Here are other things my attention goes to:</p>
            <ul>
                <li>Developing a list of deep converastional questions at <a href="https://tellmeaboutyourlife.com/">tellmeaboutyourlife.com</a></li>
                <li><a href="https://www.nonviolentcommunication.com/pdf_files/4part_nvc_process.pdf">Nonviolent Communication</a></li>
                <li>Design ethics & <a href="http://humanetech.com/designers/">humane technology</a></li>
                <li><a href="http://freakonomics.com/podcast/richard-thaler/">Nudge</a></li>
               <li><a href="https://www.goodreads.com/user/show/45864430-jett-wang">Important Social Media</a></li>
            </ul>
               <hr />
               <small>Ironically, this website is built in ReactJS.</small>

        </div>);}
    
}

export default App;

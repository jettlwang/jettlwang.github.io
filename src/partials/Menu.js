import React, { Component } from 'react';
import {Container , Row, Col }from 'react-bootstrap';
import Fade from 'react-bootstrap/Fade';

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export const MenuLG = (props) => {
     return <Col lg={2} id="menu-lg" className="menu-container d-none d-lg-block" style={props.style}>
         <div id="menu"><ul className="nav flex-column text-right">
{/*              <li className="nav-item"><a href="/"><img id="logo" src="src/assets/jwhy.svg" /></a></li>*/}
            <li><Link to="top" href='' spy={false} smooth={true} duration={500} ><img id="logo" src="src/assets/jwhy.svg" /></Link></li>
             {props.items.map( (e,i) =>
                   <li key={i}>
                        <Link className="nav-item" href='' activeClass="active" to={props.items[i]} spy={true} smooth={true} duration={500} >{props.name[i]}</Link>
                   </li>
              )}
{/*              <li><Link className="nav-item small-caps" to="top" href='' spy={false} smooth={true} duration={500} >top</Link></li> */}
         </ul></div>
     </Col>
}

export class MenuXS extends React.Component {
     constructor(props, context) {
          super(props, context);

          this.state = {
           open: false,
          };
     }

     render(){
          return <div>
          <Fade in={this.state.open} timeout={500} unmountOnExit>
            <div id="fadeover" className="vertical-center justify-content-center" onClick={() => this.setState({ open: false })}>
                <ul className="nav flex-column align-items-center text-center">
                  <li className="nav-item"><a href="/"><img id="logo" src="src/assets/jwhy.svg" /></a></li>
                     {this.props.items.map( (e,i) =>
                             <li key={i}>
                                  <Link className="nav-item" href='' to={this.props.items[i]} spy={false} smooth={true} duration={500} onClick={() => this.setState({ open: false })}>{this.props.name[i]}</Link>
                             </li>
                        )}
                     <li><Link className="nav-item small-caps" href='' to="top" spy={false} smooth={true} duration={500} onClick={() => this.setState({ open: false })}>top</Link></li>
                </ul>
            </div>
          </Fade>

          <div id="menu-xs" className="menu-container d-lg-none"><Container><Row><Col xs>
                   <ul className="nav justify-content-end">
                        <li><a onClick={() => this.setState({ open: !this.state.open })} aria-controls="fadeover" aria-expanded={open}><img id="logo" src="src/assets/jwhy.svg" /></a></li>
                   </ul>
              </Col></Row></Container></div> 

          </div>
     }
}

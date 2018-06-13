import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import { Noun } from './Noun';

const images = ['/src/assets/work/huawei.gif','/src/assets/work/huawei2.gif',];

const imgs = [
    { 'huawei' : [
        {
            'src' : 'huawei.gif',
            'title' : 'Huawei Touch Position Menu',
            'cap' : <p>I made with <Noun name="origami"/>.</p>
        },
        {
            'src' : 'huawei1.gif',
            'title' : 'Huawei Text Selection Prototype',
            'cap' : <p>I made also with <Noun name="origami"/>.</p>
        }
    ]}
];

export class WorkSet extends Component {
    render(){
        return (<div>
            <Thumb set="huawei" index="0"/>
        </div>);
    }
}

//======================================

class Thumb extends Component {
    constructor(props) {
        super(props);
        this.toggleLightbox = this.toggleLightbox.bind(this);
        
        this.state = { isOpen: false };
      }
    
    toggleLightbox(){
        this.setState({ isOpen : !this.state.isOpen });
        console.log("called toggleLightbox()")
    }
    
    render(){
        return (<div>
            <button onClick={this.toggleLightbox} display={this.state.isOpen.toString()}>OPEN</button>
            {this.state.isOpen && 
                <LightboxSet index='0' onClose={()=> alert("im working") } display={this.state.isOpen.toString()}/> }
        </div>);}
}

//=====================

class LightboxSet extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        
        this.state = {
          photoIndex: this.props.index,
//            isOpen: true,
        };
    }
    
    handleClose(){
        console.log("called handleClose()");
        this.props.onClose;
    }

    render() {
        const { photoIndex } = this.state;
        console.log("LBS is rendering. this.props.display="+this.props.display);

        return (<div>
                {/*<button type="button" onClick={() => this.setState({ isOpen: true })}>{this.props.set+" "+this.props.index}</button>*/}
            {this.props.display && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={this.handleClose}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
        </div>);
    }
}
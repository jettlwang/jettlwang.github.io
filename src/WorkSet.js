import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import { Noun } from './Noun';

const images = ['/src/assets/work/noof1.png','/src/assets/work/noof1.png',];

const imgs = 
    { 'huawei' : [
        {
            'src' : '/src/assets/work/huawei.gif',
            'title' : 'Huawei Touch Position Menu',
            'cap' : <p>I made with <Noun name="origami"/>.</p>
        },
        {
            'src' : '/src/assets/work/huawei2.gif',
            'title' : 'Huawei Text Selection Prototype',
            'cap' : <p>I made also with <Noun name="origami"/>.</p>
        }
    ]};

export class WorkSet extends Component {
    render(){
        var rows = [];
        imgs["huawei"].forEach(function(e,i){
            rows.push(<Thumb set="huawei" index={i} key={"a"+i}/>)
        });
        return (<div>
            {rows}
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
    }
    
    render(){
        let {set,index} = this.props;
        return (<div>
            <a onClick={this.toggleLightbox}>{imgs[set][index].title}</a>
            <LightboxSet index={index} set={set} onClose={this.toggleLightbox} isOpen={this.state.isOpen}/> 
        </div>);}
}

//=====================

class LightboxSet extends Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        
        this.state = {
          photoIndex: this.props.index,
        };
    }
    

    handleClose(){
        this.props.onClose();
        this.setState({photoIndex:this.props.index});
    }

    render() {
        const { photoIndex } = this.state;
        let {set,index} = this.props;
        let length = imgs[set].length;

        return (<div>
            {this.props.isOpen && (
              <Lightbox
                mainSrc={imgs[set][photoIndex].src}
                nextSrc={imgs[set][(photoIndex + 1) % length].src}
                prevSrc={imgs[set][(photoIndex + length - 1) % length].src}
                onCloseRequest={this.handleClose}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + length - 1) % length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % length,
                  })
                }
              />
            )}
        </div>);
    }
}
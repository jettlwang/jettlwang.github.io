import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import { Noun } from './Noun';

const imgs = {
    'huawei' : [
        {
            'src' : 'huawei.gif',
            'title' : 'Huawei Touch Position Menu',
            'cap' : <p>I made with <Noun name="origami"/>.</p>
        },
        {
            'src' : 'huawei2.gif',
            'title' : 'Huawei Text Selection Prototype',
            'cap' : <p>I made also with <Noun name="origami"/>.</p>
        }],
     'noof' : [
         {
             'src' : 'noof1.png',
             'title' : "aaa",
             'cap' : <p>wownoof</p>
         }
     ]
    }

;

function getSrc(src){
    return "/src/assets/work/"+src;
}

export class WorkSet extends Component {
    render(){
        let set = this.props.set;
        var rows = [];
        imgs[set].forEach(function(e,i){
            rows.push(<Thumb set={set} index={i} key={"a"+i}/>)
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
        
        this.state = {
            isOpen: false,
            photoIndex:this.props.index
        };
      }
    
    toggleLightbox(){
        this.setState({ isOpen : !this.state.isOpen });
        this.setState({photoIndex:this.props.index});
    }
    
    render(){
        var {set,index} = this.props;
        var photoIndex  = this.state.photoIndex;
        let length = imgs[set].length;
        
        return (<div>
            <div className="workImg"><img onClick={this.toggleLightbox} src={getSrc(imgs[set][index].src)}/></div>
 
            {this.state.isOpen && (
              <Lightbox
                mainSrc={getSrc(imgs[set][photoIndex].src)}
                nextSrc={getSrc(imgs[set][(photoIndex + 1) % length].src)}
                prevSrc={getSrc(imgs[set][(photoIndex + length - 1) % length].src)}
                imageTitle={imgs[set][photoIndex].title}
                imageCaption={imgs[set][photoIndex].cap}
                onCloseRequest={this.toggleLightbox}
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
        
         {/*<LightboxSet index={index} set={set} onClose={this.toggleLightbox} isOpen={this.state.isOpen}/> */}
    }
}

//=====================

/*class LightboxSet extends Component {
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
}*/
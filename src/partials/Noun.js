import React, { Component } from 'react';

const nounImg = {
    "jett": ["Jett Wang", "jett.png"],
    "htmlcss": ["HTML CSS", "htmlcss.png"],
    "bootstrap": ["BootstrapCSS", "bootstrap.png"],
    "sass" : ["SaSS","sass.png"],
    "jquery" : ["jQuery","jquery.png"],
    "react" : ["ReactJS","react.png"],
    "sketch" : ["Sketch","sketch.png"],
    "photoshop" : ["Photoshop","photoshop.png"],
    "origami" : ["Origami Studio","origami.png"],
    "flinto" : ["Flinto","flinto.jpg"],
    "invision" : ["Invision","invision.jpg"],
    "marvel" : ["Marvel","marvelapp.png"],
    "pop" : ["POP","pop.png"],
    "omni" : ["Omnigraffle","omni.png"],
    "webflow" : ["Webflow","webflow.jpg"],
    "uiuc" : ["University of Illinois at Urbana-Champaign","uiuc.png"],
    "ga" : ["General Assembly","ga.png"],
    "huawei" : ["Huawei Mobile Technologies","huawei.png"],
    "emc" : ["Dell EMC R&D","emc.png"],
    "lenovo" : ["Lenovo R&D","lenovo.png"],
    "luna" : ["Luna","luna.png"],
}

export class Noun extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        var name = nounImg[this.props.name][0];

        var nounElem;
        if(name.indexOf(' ') != -1){
            let tempELem =
                <span style={{"whiteSpace":"nowrap"}}>
                    <span className="nounImg"><img src={"/src/assets/noun/"+ nounImg[this.props.name][1]} alt="" /></span>
                        {" "+name.substr(0,name.indexOf(' '))}
                </span>;
            nounElem = <span>
                {tempELem}
                { name.substr(name.indexOf(' ')+1) }
                </span>;
        }else{
            nounElem = 
                <span style={{"whiteSpace":"nowrap"}}>
                <span className="nounImg"><img src={"/src/assets/noun/"+ nounImg[this.props.name][1]} alt="" /></span>
                {name}
                </span>;
        }

        return <span className="noun">{nounElem}</span>;
    }
}
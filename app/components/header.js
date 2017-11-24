import React, { Component } from 'react';

import css from '../../index.css';

import Wheather from './wheather';

const hours = new Date().getHours();
const isDayTime = hours > 5 && hours < 19;

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            day:"disp",
            night:"no-disp"
        }
    }


     render() {
        
            return(
                <div>
                <div className={ isDayTime ? this.state.day : this.state.night }>
                <div className="scene">
                <img className="sun" src="https://i.imgur.com/MdwJyGi.png"/>
    <img className="cloud sml" src="http://www.dwuser.com/education/content/creating-keyframe-animations-with-css3/images/cloud_sml.png" width="70" height="36"/>
    <img className="cloud med" src="http://www.dwuser.com/education/content/creating-keyframe-animations-with-css3/images/cloud_med.png" width="100" height="52"/>
    <img className="cloud lrg" src="http://www.dwuser.com/education/content/creating-keyframe-animations-with-css3/images/cloud_lrg.png" width="130" height="67"/>
    <img className="blades" src="http://www.dwuser.com/education/content/creating-keyframe-animations-with-css3/images/blades.png" width="120" height="120"/>
    <img className="stand" src="http://www.dwuser.com/education/content/creating-keyframe-animations-with-css3/images/stand.png" width="12" height="130"/>
       <div className="green"> __</div>    
       
                 </div>
                 <h1 className="heading-text">Wheather App</h1>
                 </div>
                <div className={ isDayTime ? this.state.night : this.state.day }>
                 <div className="bg-night">
                 <img className="light" src="https://i.imgur.com/Y2jfB4W.png"/>
                 <img className="moon" src="https://i.imgur.com/A1ODH3N.png"/>
                 <img className="grey-cloud cloud sml" src="https://i.imgur.com/LM2CKD3.png"/>
                 <img className="grey-cloud cloud med" src="https://i.imgur.com/Ek0u6bt.png"/>
                 <img className="sky" src="https://i.imgur.com/ypxixf4.png"/>
                 <div className="black"> __</div>
                 </div>
                 <h1 className="heading-text">Wheather App</h1>
                 </div>  
            </div>
        );
    
    }
}

export default Header;
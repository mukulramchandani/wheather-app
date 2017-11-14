import React, { Component } from 'react';

import css from '../../index.css';

class Header extends Component {
    render() {
        return (
            <div>
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
        );
    }
}

export default Header;
import React, { Component, PropTypes } from 'react';

    //Navigator Success Function
      let  success = (pos) => {
            const crd = pos.coords;
            console.log(`${crd.latitude} \n ${crd.longitude}`);
            console.log(pos); 
        };
    //Navigator Error Function
        let error = (err) => {
            console.log(err.code);
        };
        //JS built-in fn.
    navigator.geolocation.getCurrentPosition(success,error);

    //Snippet for adding Script tag.
    const url1 = 'https://js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js';
    const loadScript = (url) => {
        var script = document.createElement("script");
        script.type = "text/javascript";

        if(script.readyState){ //For IE
            script.onreadystatechange = function(){
                if(script.readyState == "loaded" ||
             script.readyState == "completed"){
                 script.onreadystatechange = null;
             }
            };
        }
        else{ //Others Browsers
            script.onload = function(){
                console.log("Tag added and Script Loaded!");
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    loadScript(url1);

    //GeoIP
    const ipSuccess = (location) => {
        console.log(location);
    };
    const ipError = (err) =>{
        console.log(err);
    }

class Wheather extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {
        
    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
            <p> diff compo </p>
            
         
            </div>
        );
    }
}

Wheather.propTypes = {

};

export default Wheather;
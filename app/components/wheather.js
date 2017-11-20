import React, { Component, PropTypes } from 'react';
    
    //Snippet for adding Script tag.
    // const url1 = 'https://js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js';
    // const loadScript = (url) => {
    //     var script = document.createElement("script");
    //     script.type = "text/javascript";

    //     if(script.readyState){ //For IE
    //         script.onreadystatechange = function(){
    //             if(script.readyState == "loaded" ||
    //          script.readyState == "completed"){
    //              script.onreadystatechange = null;
    //          }
    //         };
    //     }
    //     else{ //Others Browsers
    //         script.onload = function(){
    //             console.log("Tag added and Script Loaded!");
    //         };
    //     }

    //     script.src = url;
    //     document.getElementsByTagName("head")[0].appendChild(script);
    // }
    // loadScript(url1);

    //GeoIP
    // const ipSuccess = (location) => {
    //     console.log(location);
    // };
    // const ipError = (err) =>{
    //     console.log(err);
    // }

class Wheather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationKey: "",
            city: "...",
            state : "...",
            valInC: "--",
            valInF: "--",
            

        };
    }

    componentWillMount() {
        //Navigator Success Function
      let  success = (pos) => {
        const crd = pos.coords;
        console.log(`${crd.latitude} \n ${crd.longitude}`);
        fetch("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=zm2EHwtpHiL55OWuTyv1FKsOAALSIPu0&q=" + `${crd.latitude},${crd.longitude}`)
        .then(locData => locData.json())
        .then( (data) => {
            console.log(data.Key,data.LocalizedName,data.AdministrativeArea.LocalizedName)
            this.setState({
                locationKey : data.Key,
                city: data.LocalizedName,
                state: data.AdministrativeArea.LocalizedName
            });
            console.log(this.state);
        });
        
    };

//Navigator Error Function
    let error = (err) => {
        console.log(err.code);
        //Info. through IP.
        fetch('https://ipinfo.io/json')
        .then(ipdata => ipdata.json())
        .then((json) => {
            console.log(json.loc);
            fetch("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=zm2EHwtpHiL55OWuTyv1FKsOAALSIPu0&q="+`${json.loc}`)
            .then(locData => locData.json())
            .then(data => {
                console.log(data.Key,data.LocalizedName,data.AdministrativeArea.LocalizedName);
                this.setState({
                    locationKey : data.Key,
                    city:data.LocalizedName,
                    state:data.AdministrativeArea.LocalizedName
                })
            })
        })

    };
    //JS built-in fn.
    navigator.geolocation.getCurrentPosition(success,error);    
    }

    componentWillUpdate() {
            
    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;

    }

    // componentWillUpdate(nextProps, nextState) {

    // }

    componentDidUpdate(prevProps, prevState) {
        fetch("https://dataservice.accuweather.com/currentconditions/v1/"+ this.state.locationKey +"?apikey=zm2EHwtpHiL55OWuTyv1FKsOAALSIPu0&details=true")
        .then(resp => resp.json())
        .then(data => console.log(data[0]))

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
            <p>
            {this.state.locationKey}
             </p>
         
            </div>
        );
    }
}

Wheather.propTypes = {

};

export default Wheather;
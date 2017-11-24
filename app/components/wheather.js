import React, { Component, PropTypes } from 'react';


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
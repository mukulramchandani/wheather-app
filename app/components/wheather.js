import React, { Component, PropTypes } from 'react';

const nocors = "http://cors-anywhere.herokuapp.com/";
class Wheather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationKey: "",
            city: "...",
            parentCity:"",
            state : "...",
            countryID:"",
            valInC: "--",
            valInF: "--",
            weatherText:"",
            isChecked:false,
        };
    }

    componentWillMount() {
        //Navigator Success Function
      let  success = (pos) => {
        const crd = pos.coords;
        console.log(`${crd.latitude} \n ${crd.longitude}`);
        fetch(nocors + "https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=zm2EHwtpHiL55OWuTyv1FKsOAALSIPu0&q=" + `${crd.latitude},${crd.longitude}`)
        .then(locData => locData.json())
        .then( (data) => {
            console.log(data);
            this.setState({
                locationKey : data.Key,
                city: data.EnglishName,
                state: data.AdministrativeArea.EnglishName,
                //parentCity:data.ParentCity.EnglishName,
                countryID: data.Country.ID
            });
             if(Object.keys(data).length > 15){
                 this.setState({parentCity:data.ParentCity.EnglishName});
             }
            console.log(this.state);
        });
        
    };

//Navigator Error Function
    let error = (err) => {
        console.log(err);
        //Info. through IP.
        fetch(nocors + "https://ipinfo.io/json")
        .then(ipdata => ipdata.json())
        .then((json) => {
            console.log(json.loc);
            fetch(nocors + "https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=zm2EHwtpHiL55OWuTyv1FKsOAALSIPu0&q="+`${json.loc}`)
            .then(locData => locData.json())
            .then(data => {
                console.log(Object.keys(data).length);
                this.setState({
                    locationKey : data.Key,
                    city: data.EnglishName,
                    state: data.AdministrativeArea.EnglishName,
                    //parentCity:data.ParentCity.EnglishName,
                    countryID: data.Country.ID
                });
                if(Object.keys(data).length > 15){
                    this.setState({parentCity:data.ParentCity.EnglishName});
                }
            })
        })

    };
    //JS built-in fn.
    navigator.geolocation.getCurrentPosition(success,error);    
    }


    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;

    }

    // componentWillUpdate(nextProps, nextState) {

    // }

    componentDidUpdate(prevProps, prevState) {
        fetch(nocors + "https://dataservice.accuweather.com/currentconditions/v1/"+ this.state.locationKey +"?apikey=zm2EHwtpHiL55OWuTyv1FKsOAALSIPu0&details=false")
        .then(resp => resp.json())
        .then(data => {
           console.log(data[0]);
           //let temp = data[0].Temperature.Imperial.Value;
           if(isNaN(this.state.valInC)){
            this.setState({
                weatherText:data[0].WeatherText,
                valInF:data[0].Temperature.Imperial.Value,
                valInC:data[0].Temperature.Metric.Value
            });
            console.log(this.state);
        }
        })
    }

    toggleChange() {
        this.setState({
            isChecked:!this.state.isChecked,
        });
    };

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
            <hr/>
            <p className="btn-info">Toggle button to change to <span className= {this.state.isChecked ? "disp" : "no-disp"}>Celcius</span><span className= {this.state.isChecked ? "no-disp" : "disp"}>Farenheit</span></p>
            <div className="weather">
            <p className="switch"> 
            <input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange.bind(this)}/>
             <span className="slider round"></span>
             </p>
             <p className="unit-name"><span className= {this.state.isChecked ? "no-disp" : "disp"}>Celcius</span><span className= {this.state.isChecked ? "disp" : "no-disp"}>Farenheit</span></p>
            <div className="data">

            {/* <h1 className="temp"><span className= {this.state.isChecked ? "no-disp" : "disp"}>{this.state.valInC}</span><span className= {this.state.isChecked ? "disp" : "no-disp"}>{this.state.valInF}</span><span className="degree">o</span></h1><span className="weather-text">Overcast</span><br/> <span className="city-name">Chembur,Mumbai,</span><br/><span className="state-name">Maharashtra, IN.</span> */}
            <h1 className= {this.state.isChecked ? "temp no-disp" : "temp disp"}>{this.state.valInC} <span className="degree">o</span></h1><h1 className= {this.state.isChecked ? "temp disp" : "temp no-disp"}>{this.state.valInF}<span className="degree">o</span></h1>
            <span className="weather-text">{this.state.weatherText}</span><br/> <p className="city-name">{this.state.city},<span className = {this.state.parentCity.length>0 ? "" : "no-disp" }>{this.state.parentCity},</span></p><p className="state-name">{this.state.state}, {this.state.countryID}.</p>

            </div>
            </div>
            <h3 className="footer">Made with <span className="heart"> ❤ </span>using ReactJS.</h3>
            <hr/><br/>

            <h5 className="footer"> <a href="https://github.com/mukulramchandani/wheather-app/" target="blank"> Click here to see the Source Code ! </a> </h5>
            <img className="foot-img" src="https://i.imgur.com/LHKVXLn.png"/>
            </div>
        );
    }
}

Wheather.propTypes = {

};

export default Wheather;
console.log("Hiee from webpack! Working fine");

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Wheather from './components/wheather';

class Hello extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Wheather/>
            </div>
        );
    }
}

ReactDOM.render(<Hello/>,document.getElementById('root'));
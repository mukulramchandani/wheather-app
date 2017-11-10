console.log("Hiee from webpack! Working fine");

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {
    render() {
        return (
            <div>
                <h1>
                Hello World! React working fine.</h1>
            </div>
        );
    }
}

ReactDOM.render(<Hello/>,document.getElementById('root'));
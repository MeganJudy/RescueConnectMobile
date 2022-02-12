import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { DOGS } from '../shared/dogs.js';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: DOGS
        };
    }

    render() {
        return <Directory dogs={this.state.dogs} />;
    }
}

export default Main;
import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Loading extends Component {
    render() {
        return (
            <span className="loading">
                <FontAwesomeIcon icon='spinner' size='3x' spin/>
                <span className="sr-only">Loading...</span>
            </span>
        );
    }
}

export default Loading;
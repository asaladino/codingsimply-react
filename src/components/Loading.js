import React, {Component} from 'react';

class Loading extends Component {
    render() {
        return (
            <span style={{fontSize: '32px'}}>
                <i className="fa fa-spinner fa-spin fa-3x fa-fwr"/>
                <span className="sr-only">Loading...</span>
            </span>
        );
    }
}

export default Loading;
import React from "react";
import _ from "lodash";

export default class FractureTitle extends React.Component {
    render() {
        const {children} = this.props;
        return children.split('').map((l, i) => {
            return (
                <span key={i} className='animated fadeIn' style={{animationDelay: _.random(200, 700) + 'ms'}}>{l}</span>
            )
        });
    }
}
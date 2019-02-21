import React, {Component} from 'react';
import moment from "moment";


class DateTime extends Component {

    render() {
        const {time} = this.props;
        return (
            <React.Fragment>
                {time ? (
                    <time>
                        {moment(time).format('dddd, MMMM Do YYYY')}
                    </time>
                ) : ''}
            </React.Fragment>
        );
    }
}

export default DateTime
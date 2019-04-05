import React from "react";
import _ from "lodash";

export default class FractureTitle extends React.Component {
    render() {
        const {children, animated, split} = this.props;
        return <div>
            {children.split(split === 'word' ? ' ' : '').map((l, i) =>
                <span key={i}
                      className={`animated ${animated ? animated[_.random(0, animated.length - 1)] : 'fadeIn'}`}
                      style={{
                          animationDelay: _.random(200, 700) + 'ms',
                          display: 'block',
                          float: 'left'
                      }} dangerouslySetInnerHTML={{__html: l === ' ' ? '&nbsp;' : l + (split === 'word' ? '&nbsp;' : '')}}/>
            )}
        </div>
    }
}
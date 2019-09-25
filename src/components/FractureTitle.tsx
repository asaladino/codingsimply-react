import React from 'react';
import _ from 'lodash';

interface Props {
    children: string;
    animated?: string[];
    split?: string;
}

const FractureTitle = (props: Props) => {
    const { children, animated, split } = props;
    return <div>
        {children.split(split === 'word' ? ' ' : '').map((l, i) => (
            <span
                key={i}
                className={`animated ${animated ? animated[_.random(0, animated.length - 1)] : 'fadeIn'}`}
                style={{
                    animationDelay: _.random(200, 700) + 'ms',
                    display: 'block',
                    float: 'left'
                }}
                dangerouslySetInnerHTML={{ __html: l === ' ' ? '&nbsp;' : l + (split === 'word' ? '&nbsp;' : '') }} />
        ))}
    </div>
}

export default FractureTitle;
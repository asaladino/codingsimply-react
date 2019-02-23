import React, {Component} from 'react';

class ProjectIcon extends Component {

    render() {
        const {initials} = this.props;
        return (
            <div className="project-icon shadow" style={{height: '138px'}}>
                <div className="project-initials"
                     style={{fontSize: '60.5px'}}>
                    {initials}
                </div>
                <div className="project-owner"
                     style={{fontSize: '24.2px'}}>cs;
                </div>
            </div>
        );
    }
}

export default ProjectIcon;
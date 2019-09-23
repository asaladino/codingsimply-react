import React, { Component } from 'react';

interface Props {
    initials: string;
}

class ProjectIcon extends Component<Props, {}> {
    iconRef: React.RefObject<HTMLDivElement>;
    iconInitialsRef: React.RefObject<HTMLDivElement>;
    iconOwnerRef: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);
        this.iconRef = React.createRef();
        this.iconInitialsRef = React.createRef();
        this.iconOwnerRef = React.createRef();
    }

    componentDidMount(): void {
        this.resizeIcon();
        window.addEventListener('resize', this.resizeIcon);
    }

    resizeIcon = () => {
        if (this.iconRef.current) {
            this.iconRef.current.style.height = this.iconRef.current.offsetWidth + 'px';
            this.iconInitialsRef.current.style.fontSize = this.iconRef.current.offsetWidth * 0.46 + 'px';
            this.iconOwnerRef.current.style.fontSize = this.iconRef.current.offsetWidth * 0.17 + 'px';
        }
    };

    render() {
        const { initials } = this.props;
        return (
            <div ref={this.iconRef} className="project-icon shadow">
                <div ref={this.iconInitialsRef} className="project-initials">
                    {initials}
                </div>
                <div ref={this.iconOwnerRef} className="project-owner">
                    cs;
                </div>
            </div>
        );
    }
}
export default ProjectIcon;

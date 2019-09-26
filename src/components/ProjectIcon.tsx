import React, { useEffect } from 'react';

interface Props {
    initials: string;
}

const ProjectIcon = (props: Props) => {
    const { initials } = props;

    const iconRef: React.RefObject<HTMLDivElement> = React.createRef();
    const iconInitialsRef: React.RefObject<HTMLDivElement> = React.createRef();
    const iconOwnerRef: React.RefObject<HTMLDivElement> = React.createRef();

    useEffect(() => {
        const resizeIcon = () => {
            if (iconRef.current) {
                iconRef.current.style.height = (iconRef.current.offsetWidth) + 'px';
                iconInitialsRef.current.style.fontSize = iconRef.current.offsetWidth * 0.46 + 'px';
                iconOwnerRef.current.style.fontSize = iconRef.current.offsetWidth * 0.17 + 'px';
            }
        };
        resizeIcon();
        window.addEventListener('resize', resizeIcon);

    }, [iconRef, iconInitialsRef, iconOwnerRef]);
    
    return <div ref={iconRef} className="project-icon shadow">
        <div ref={iconInitialsRef} className="project-initials">
            {initials}
        </div>
        <div ref={iconOwnerRef} className="project-owner">
            cs;
        </div>
    </div>
}

export default ProjectIcon;

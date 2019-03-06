import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class PrimaryMenu extends Component {

    render() {
        const {menus, onToggleMenu} = this.props;
        return (
            <nav>
                <ul className="menu">
                    {menus.getItems().map(item => {
                        return (
                            <li key={item.getId()}>
                                {item.isInternalLink() ? (
                                    <Link to={item.getInternalUrl()} onClick={onToggleMenu}>
                                        <FontAwesomeIcon icon={[item.getIconPrefix(), item.getIcon()]} />
                                        {item.getTitle()}
                                    </Link>
                                ) : (
                                    <a href={item.getUrl()}>
                                        <FontAwesomeIcon icon={[item.getIconPrefix(), item.getIcon()]} />
                                        {item.getTitle()}
                                    </a>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default PrimaryMenu;
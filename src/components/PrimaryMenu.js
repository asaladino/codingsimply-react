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

                                <Link to={item.getUrl()} onClick={onToggleMenu}>
                                    <FontAwesomeIcon icon={item.getIcon()} />
                                    {item.getTitle()}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default PrimaryMenu;
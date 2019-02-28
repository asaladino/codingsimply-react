import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PrimaryMenu extends Component {

    render() {
        const {menus, onToggleMenu} = this.props;
        return (
            <nav>
                <ul className="menu">
                    {menus.getItems().map(item => {
                        return (
                            <li key={menus.getId(item)}>
                                <Link to={menus.getUrl(item)} onClick={onToggleMenu}>
                                    <i className={`fa fa-${menus.getTitle(item).toLowerCase()}`}/>
                                    {menus.getTitle(item)}
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
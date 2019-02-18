import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PrimaryMenu extends Component {

    render() {
        const {menus} = this.props;
        return (
            <nav>
                <ul className="menu hide-for-small-only">
                    {menus.getItems().map(item => {
                        return (
                            <li key={menus.getId(item)}>
                                <Link to={menus.getUrl(item)}>
                                    {menus.getTitle(item)}
                                </Link>
                            </li>
                        );
                    })}
                    <li><button data-open="search-modal"><i className="fa fa-search">{''}</i></button></li>
                </ul>
            </nav>
        );
    }
}

export default PrimaryMenu;
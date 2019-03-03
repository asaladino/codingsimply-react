import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PrimaryMenu extends Component {

    render() {
        const {menus, onToggleMenu} = this.props;
        // console.log(menus);
        return (
            <nav>
                <ul className="menu">
                    {menus.getItems().map(item => {
                        return (
                            <li key={item.getId()}>
                                {/*<Link to={item.getUrl()} onClick={onToggleMenu}>*/}
                                {/*    <i className={`fa fa-${item.getTitle().toLowerCase()}`}/>*/}
                                {/*    {item.getTitle()}*/}
                                {/*</Link>*/}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default PrimaryMenu;
import React, {Component} from 'react';
import PrimaryMenu from "./PrimaryMenu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class MobileSideMenu extends Component {

    render() {
        const {menus, onToggleMenu, site} = this.props;
        return (
            <React.Fragment>
                <div className="top-bar" style={{width: "100%"}}>
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li>
                                <button data-toggle="offCanvas" onClick={onToggleMenu}>
                                    <FontAwesomeIcon icon={'bars'} />
                                </button>
                            </li>
                            <li className="menu-text">
                                {site.name}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row mobile-side">
                    <div className="large-12 columns">
                        <ul className="menu vertical">
                            <PrimaryMenu menus={menus} onToggleMenu={onToggleMenu}/>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MobileSideMenu;
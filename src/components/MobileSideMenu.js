import React, {Component} from 'react';
import PrimaryMenu from "./PrimaryMenu";

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
                                    <i className="fa fa-bars">{' '}</i>
                                </button>
                            </li>
                            <li className="menu-text">
                                {site.name}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
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
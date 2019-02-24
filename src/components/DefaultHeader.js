import React, {Component} from 'react';
import PrimaryMenu from "./PrimaryMenu";

class DefaultHeader extends Component {

    render() {
        const {site, menus, onToggleMenu} = this.props;
        return (
            <header id="masthead" className="site-header animated slideInDown">
                <div>
                    <div className="top-bar" id="main-menu" style={{width: "100%"}}>
                        <div className="top-bar-left">
                            <ul className="menu">
                                <li className='show-for-small-only'>
                                    <button data-toggle="offCanvas" onClick={onToggleMenu}>
                                        <i className="fa fa-bars">{' '}</i>
                                    </button>
                                </li>
                                <li className="menu-text">
                                    {site.name}
                                </li>
                            </ul>
                        </div>
                        <div className="top-bar-right hide-for-small-only">
                            <PrimaryMenu menus={menus}/>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default DefaultHeader;
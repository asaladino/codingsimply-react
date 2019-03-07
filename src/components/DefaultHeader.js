import React, {Component} from 'react';
import PrimaryMenu from "./PrimaryMenu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

class DefaultHeader extends Component {

    currentMenuItem = (menus) => {
        return menus.getItems().filter(item => item.isCurrentItem()).map(item => {
            return (
                <span key={item.getId()} className={`${item.isActive()} text-center`}>
                    <Link to={item.getInternalUrl()}>
                        <FontAwesomeIcon icon={[item.getIconPrefix(), item.getIcon()]}/>
                        {item.getTitle()}
                    </Link>
                </span>
            );
        })
    };

    render() {
        const {site, menus, onToggleMenu} = this.props;
        return (
            <header className="site-header animated slideInDown">
                <div>
                    <div className="top-bar" id="main-menu" style={{width: "100%"}}>
                        <div className="top-bar-left">
                            <ul className="menu expanded">
                                <li className='hide-for-large'>
                                    <button data-toggle="offCanvas" onClick={onToggleMenu}>
                                        <FontAwesomeIcon icon="bars"/>
                                    </button>
                                </li>
                                <li className="menu-text">
                                    {site.name}
                                </li>
                                <li className="text-right show-for-small-only">
                                    {this.currentMenuItem(menus)}
                                </li>
                            </ul>
                        </div>
                        <div className="top-bar-right">
                            <ul className="menu show-for-medium-only">
                                <li>
                                    {this.currentMenuItem(menus)}
                                </li>
                            </ul>
                            <div className="show-for-large">
                                <PrimaryMenu menus={menus}/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default DefaultHeader;
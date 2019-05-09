import React, {Component} from 'react';
import PrimaryMenu from "./PrimaryMenu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

class DefaultHeader extends Component {

    state = {
        openMenu: false
    };

    onToggleMenu = () => {
        this.setState({openMenu: !this.state.openMenu});
    };

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

    /**
     * @todo fix z-index issues.
     * @returns {*}
     */
    render() {
        const {site, menus} = this.props;
        return (
            <header className="site-header animated slideInDown">
                <div className="top-bar" id="main-menu">
                    <div className="top-bar-left">
                        <ul className="menu expanded">
                            <li className={`hide-for-large`}>
                                <button id='hamburger'
                                        data-toggle="offCanvas"
                                        onClick={this.onToggleMenu}
                                        className={`button ${this.state.openMenu ? '' : 'hollow'}`}>
                                    <span className="show-for-sr">Menu</span>
                                    <FontAwesomeIcon icon="bars"/>
                                </button>
                            </li>
                            <li>
                                <h1>{site.name}</h1>
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
                        <div className={`show-for-large`}>
                            <PrimaryMenu menus={menus} vertical={false}/>
                        </div>
                    </div>
                </div>
                <div
                    className={`mobile-menu hide-for-large animated fast ${this.state.openMenu ? 'bounceIn' : 'bounceOut'}`}>
                    <PrimaryMenu menus={menus} vertical={true} onToggleMenu={this.onToggleMenu}/>
                </div>
            </header>
        );
    }
}

export default DefaultHeader;
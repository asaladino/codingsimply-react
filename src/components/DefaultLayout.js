import React, {Component} from 'react';
import MobileSideMenu from "./MobileSideMenu";
import DefaultHeader from "./DefaultHeader";
import {slide as Menu} from 'react-burger-menu'

class DefaultLayout extends Component {

    state = {
        openMenu: false
    };

    toggleMenu = () => {
        this.setState({openMenu: !this.state.openMenu});
    };

    render() {
        const {site, menus, children} = this.props;
        return (
            <div id="page" className="site">
                <Menu isOpen={this.state.openMenu}>
                    {this.state.openMenu ? (
                        <MobileSideMenu site={site} menus={menus} onToggleMenu={this.toggleMenu}/>
                    ) : ''}
                </Menu>
                <div className="off-canvas-content">
                    <DefaultHeader site={site} menus={menus} onToggleMenu={this.toggleMenu}/>
                    {children}
                </div>
            </div>
        );
    }
}

export default DefaultLayout;
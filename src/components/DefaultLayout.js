import React, {Component} from 'react';
import MobileSideMenu from "./MobileSideMenu";
import DefaultHeader from "./DefaultHeader";

class DefaultLayout extends Component {

    state = {
        openMenu: false
    };

    toggleMenu = () => {
        this.setState({openMenu: !this.state.openMenu});
    };

    render() {
        const {site, menus, children} = this.props;
        return  (
            <div id="page" className="site">
                <div className="off-canvas-wrapper">
                    <div className={`off-canvas position-left ${this.state.openMenu ? 'is-transition-push is-open' : 'is-transition-push is-closed'}`}>
                        <MobileSideMenu menus={menus}/>
                    </div>
                    <div className="off-canvas-content">
                        <DefaultHeader site={site} menus={menus} onToggleMenu={this.toggleMenu}/>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default DefaultLayout;
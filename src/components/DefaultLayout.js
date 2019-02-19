import React, {Component} from 'react';
import MobileSideMenu from "./MobileSideMenu";
import DefaultHeader from "./DefaultHeader";

class DefaultLayout extends Component {

    render(): React.ReactNode {
        const {site, menus, children} = this.props;
        return  (
            <div id="page" className="site">
                <div className="off-canvas-wrapper">
                    <div className="off-canvas position-left" id="offCanvas" data-off-canvas>
                        <MobileSideMenu menus={menus}/>
                    </div>
                    <div className="off-canvas-content" data-off-canvas-content>
                        <DefaultHeader site={site} menus={menus}/>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default DefaultLayout;
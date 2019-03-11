import React, {Component} from 'react';
import DefaultHeader from "./DefaultHeader";

class DefaultLayout extends Component {


    render() {
        const {site, menus, children} = this.props;
        return (
            <div id="page" className="site">
                <DefaultHeader site={site} menus={menus}/>
                {children}
            </div>
        );
    }
}

export default DefaultLayout;
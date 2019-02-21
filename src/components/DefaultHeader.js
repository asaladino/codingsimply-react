import React, {Component} from 'react';
import PrimaryMenu from "./PrimaryMenu";

class DefaultHeader extends Component {

    render() {
        const {site, menus} = this.props;
        return (
            <header id="masthead" className="site-header">
                <div data-sticky-container>
                    <div className="top-bar" id="main-menu" data-sticky data-sticky-on="small"
                         data-options="marginTop:0;"
                         data-top-anchor="1" style={{width: "100%"}}>
                        <div className="top-bar-left">
                            <ul className="menu" data-dropdown-menu>
                                <li className="show-for-small-only">
                                    <button data-toggle="offCanvas">
                                        <i className="fa fa-bars">{' '}</i>
                                    </button>
                                </li>
                                <li className="menu-text">
                                    {site.name}
                                </li>
                            </ul>
                        </div>
                        <div className="top-bar-right">
                            <PrimaryMenu menus={menus}/>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default DefaultHeader;
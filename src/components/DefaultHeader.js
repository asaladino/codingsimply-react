import React, {Component} from 'react';
import PrimaryMenu from "./PrimaryMenu";

class DefaultHeader extends Component {

    render() {
        const {menus} = this.props;
        return (
            <div className="row">
                <div className="large-12 columns">
                    <h3>Options</h3>
                    <ul className="menu vertical">
                        <PrimaryMenu menus={menus}/>
                        <li><button data-open="search-modal">Search</button></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default DefaultHeader;
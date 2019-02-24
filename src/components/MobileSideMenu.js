import React, {Component} from 'react';
import PrimaryMenu from "./PrimaryMenu";

class MobileSideMenu extends Component {

    render() {
        const {menus} = this.props;
        // @TODO move style to class.
        return (
            <div className="row" style={{marginTop: '60px'}}>
                <div className="large-12 columns">
                    <ul className="menu vertical">
                        <PrimaryMenu menus={menus}/>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MobileSideMenu;
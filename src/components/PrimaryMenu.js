// @flow
import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PrimaryMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSearch: false
        }
    }

    render() {
        const {menus} = this.props;
        const {showSearch} = this.state;
        return (
            <nav>
                <ul className="menu hide-for-small-only">
                    {menus.getItems().map(item => {
                        return (
                            <li key={menus.getId(item)}>
                                <Link to={menus.getUrl(item)}>
                                    {menus.getTitle(item)}
                                </Link>
                            </li>
                        );
                    })}
                    <li>
                        <input placeholder='search...' name='search' type='text'
                               className={!showSearch ? `hide` : `show`}/>
                    </li>
                    <li>
                        <button onClick={(() => {
                            this.setState({showSearch: !showSearch})
                        })}>
                            <i className="fa fa-search">{''}</i>
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default PrimaryMenu;
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Redirect} from "react-router";

class PrimaryMenu extends Component {

    state = {
        showSearch: false,
        gotoSearch: false,
        term: ''
    };

    search = (event) => {
        if(event.key === 'Enter') {
            this.setState({gotoSearch: true, term: event.target.value});
        }
    };

    render() {
        if(this.state.gotoSearch) {
            return <Redirect to={`/search/${this.state.term}`}/>
        }
        const {menus, onToggleMenu} = this.props;
        const {showSearch} = this.state;
        return (
            <nav>
                <ul className="menu">
                    {menus.getItems().map(item => {
                        return (
                            <li key={menus.getId(item)}>
                                <Link to={menus.getUrl(item)} onClick={onToggleMenu}>
                                    {menus.getTitle(item)}
                                </Link>
                            </li>
                        );
                    })}
                    <li>
                        <input placeholder='search...'
                               name='search'
                               type='text'
                               className={!showSearch ? `hide` : `show`}
                               onKeyPress={this.search}
                        />
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
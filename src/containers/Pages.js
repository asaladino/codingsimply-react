import {pages as pagesAction} from "../actions/pages";
import React, {Component} from "react";

class Pages extends Component {

    loadPage = (id) => {
        const {dispatch} = this.props;
        pagesAction.getPage(dispatch, id);
    };

    render() {
        return (
            <div>
                pages
            </div>
        );
    }
}

export default Pages;
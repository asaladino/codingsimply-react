import React, {Component} from "react";
import {connect} from "react-redux";
import {pages as pagesAction} from "../actions/pages";
import Loading from "../components/Loading";
import {contentClickHandler} from "../components/helpers/HtmlRouteHelper";

class Pages extends Component {
    componentDidMount() {
        const {pages, match, dispatch} = this.props;
        if (!pages.hasLoaded()) {
            const {slug} = match.params;
            pagesAction.getPage(dispatch, `page-${slug}`);
        }
    }

    render() {
        const {pages, history} = this.props;
        let content = <div className='text-center'><Loading/></div>;
        if (pages.hasLoaded()) {
            content = (
                <div className='animated fadeIn' key={pages.page.id}>
                    <h2>{pages.getTitle()}</h2>
                    <img alt={pages.getFeaturedMediaAlt()} src={pages.getFeaturedMediaLarge()}/>
                    <div onClick={(e) => contentClickHandler(e, history)}
                         dangerouslySetInnerHTML={{__html: pages.getContent()}}/>
                </div>
            );
        }

        return (
            <div className="row">
                <div className="large-8 large-push-2 columns">
                    <main className="site-main">
                        {content}
                    </main>
                </div>
            </div>
        );
    }
}

export default connect(state => {
    return {
        pages: state.pages
    };
})(Pages);
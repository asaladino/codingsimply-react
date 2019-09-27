import React, { useEffect } from "react";
import { connect } from "react-redux";
import { pages as pagesAction } from "../actions/pages";
import Loading from "../components/Loading";
import { contentClickHandler } from "../components/helpers/HtmlRouteHelper";
import FractureTitle from "../components/FractureTitle";
import {
    contentImageLoading,
    loadInlineScripts,
    ImageLoadingAnimated
} from "../components/helpers/InlineScriptHelper";
import NotFound from "./NotFound";
import PagesModel from "../models/PagesModel";

interface Props {
    pages: PagesModel;
    history: any;
    match: any;
    dispatch: any;
}


const Pages = (props: Props) => {
    const { pages, history, match, dispatch } = props;

    useEffect(() => {
        if (!pages.hasLoaded()) {
            const { slug } = match.params;
            pagesAction.getPage(dispatch, `page-${slug}`);
        }

        const { slug } = match.params;
        if (pages.slug !== `page-${slug}`) {
            pagesAction.getPage(dispatch, `page-${slug}`);
        }
        if (!pages.hasLoaded()) {
            loadInlineScripts();
            contentImageLoading();
        }
    }, [pages, match, dispatch]);

    if (!pages.pageFound && pages.hasLoaded()) {
        return <NotFound />
    }

    let content = <div className="text-center"><Loading /></div>

    if (pages.hasLoaded()) {
        const page = pages.getPage();
        window.document.title = page.getTitle();
        content = <div className="animated fadeIn" key={page.getId()}>
            <h2>
                <FractureTitle>{page.getTitle()}</FractureTitle>
            </h2>
            <div style={{ clear: "both" }}>
                <ImageLoadingAnimated>
                    <img alt={page.getFeaturedMediaAlt()} src={page.getFeaturedMediaLarge()} />
                </ImageLoadingAnimated>
                <div
                    className="content"
                    onClick={e => contentClickHandler(e, history)}
                    dangerouslySetInnerHTML={{ __html: page.getContent() }}
                />
            </div>
        </div>
    }
    return <div className="row">
        <div className="large-8 large-push-2 columns">
            <main className="site-main">{content}</main>
        </div>
    </div>
}

export default connect((state: Props) => {
    return {
        pages: state.pages
    };
})(Pages);

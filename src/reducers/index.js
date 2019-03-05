import {combineReducers} from "redux";
import pages from "./pages";
import posts from "./posts";
import site from './site';
import projects from './projects';
import menus from './menus';
import search from './search';

export default combineReducers({
    site: site,
    pages: pages,
    posts: posts,
    projects: projects,
    menus: menus,
    search: search
});

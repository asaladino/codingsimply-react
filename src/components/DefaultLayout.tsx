import React from "react";
import DefaultHeader from "./DefaultHeader";
import SiteModel from "../models/SiteModel";
import MenuModel from "../models/MenuModel";

interface Props {
    site: SiteModel;
    menus: MenuModel;
    children: any;
}

const DefaultLayout = (props: Props) => {
    const { site, menus, children } = props;
    return <div id="page" className="site">
        <DefaultHeader site={site} menus={menus} />
        {children}
    </div>
}
export default DefaultLayout;

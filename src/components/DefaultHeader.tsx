import React, { useState } from "react";
import PrimaryMenu from "./PrimaryMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import MenuModel from "../models/MenuModel";
import SiteModel from "../models/SiteModel";

interface Props {
    site: SiteModel;
    menus: MenuModel;
};

const DefaultHeader = (props: Props) => {
    const { site, menus } = props;
    const [openMenu, setOpenMenu] = useState(false);

    const onToggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const currentMenuItem = (menus: MenuModel) => {
        return menus
            .getItems()
            .filter(item => item.isCurrentItem())
            .map(item => {
                return (
                    <span key={item.getId()} className={`${item.isActive()} text-center`}>
                        <Link to={item.getInternalUrl()}>
                            <FontAwesomeIcon icon={[item.getIconPrefix(), item.getIcon()]} />
                            {item.getTitle()}
                        </Link>
                    </span>
                );
            });
    };

    return <header className="site-header animated slideInDown">
        <div className="top-bar" id="main-menu">
            <div className="top-bar-left">
                <ul className="menu expanded">
                    <li className={`hide-for-large`}>
                        <button
                            id="hamburger"
                            data-toggle="offCanvas"
                            onClick={onToggleMenu}
                            className={`button ${openMenu ? "" : "hollow"}`}>
                            <span className="show-for-sr">Menu</span>
                            <FontAwesomeIcon icon="bars" />
                        </button>
                    </li>
                    <li>
                        <h1>{site.name}</h1>
                    </li>
                    <li className="text-right show-for-small-only">{currentMenuItem(menus)}</li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu show-for-medium-only">
                    <li>{currentMenuItem(menus)}</li>
                </ul>
                <div className={`show-for-large`}>
                    <PrimaryMenu menus={menus} vertical={false} />
                </div>
            </div>
        </div>
        <div className={`mobile-menu hide-for-large animated fast ${openMenu ? "bounceIn" : "bounceOut"}`}>
            <PrimaryMenu menus={menus} vertical={true} onToggleMenu={onToggleMenu} />
        </div>
    </header>
}
export default DefaultHeader;

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuModel from '../models/MenuModel';

interface Props {
    menus: MenuModel;
    onToggleMenu?: () => void;
    vertical: boolean;
}

const PrimaryMenu = (props: Props) => {
    const { menus, onToggleMenu, vertical } = props;
    return <nav>
        <ul className={`menu ${vertical ? 'vertical' : ''}`}>
            {menus.getItems().map(item => {
                return (
                    <li key={item.getId()} className={item.isActive()}>
                        {item.isInternalLink() ?
                            <Link to={item.getInternalUrl()} onClick={onToggleMenu}>
                                <FontAwesomeIcon icon={[item.getIconPrefix(), item.getIcon()]} />
                                {item.getTitle()}
                            </Link> : <a href={item.getUrl()}>
                                <FontAwesomeIcon icon={[item.getIconPrefix(), item.getIcon()]} />
                                {item.getTitle()}
                            </a>}
                    </li>
                );
            })}
        </ul>
    </nav>
}
export default PrimaryMenu;

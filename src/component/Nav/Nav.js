import React from 'react';
import Logo from '../../assets/logo.png';
import { GiSmartphone } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import './nav.css'
function Nav() {
    return (
        <nav className={'nav'}>
            <div className="left">
                <img src={Logo} alt=""/>
                <span className={'left__text'}>Разработано в Германии. Сделано в России.</span>
            </div>
            <div className="right">
                <GiSmartphone className={'telephone__icon'}/><span>+7 (905) 543 23 45</span>
                <FaSearch className={'search__button'}/>
            </div>
        </nav>
    );
}

export default Nav;
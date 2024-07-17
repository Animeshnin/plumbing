import React from 'react';
import Logo from '../../assets/logo.png';
import { GiSmartphone } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";


import './nav.css'
function Nav() {
    const [userScrolling, setUserScrolling] = React.useState(false);
    window.addEventListener('scroll', function () {
        if(window.scrollY ===  0) {
        setUserScrolling(false);
        } else {
            setUserScrolling(true);
        }
    });
    console.log(userScrolling)
    return (

            <nav className={userScrolling? "nav active" : "nav"}>
                <div className={'container__nav'}>
                    <div className="left">
                        <img src={Logo} alt=""/>
                        {userScrolling ? '' : (
                            <span className={'left__text'}>Разработано в Германии. Сделано в России.</span>

                        )}
                        <ul className="nav__list">
                            <li className="nav__item">О комнании</li>
                            <li className="nav__item">О продукции</li>
                            <li className="nav__item">Каталог товаров</li>
                        </ul>
                    </div>
                    <div className="right">
                        {userScrolling ?
                            <>
                                <GiSmartphone className={'telephone__icon'}/><span>+7 (905) 543 23 45</span>
                                <div className={'nav__button basket'}>
                                    <FaShoppingBasket/><span className={'basket__text'}>4290 р.</span>
                                </div>
                                <FaUser className={'nav__button'}/>
                                <FaSearch className={'nav__button'}/>
                            </>

                            :
                            <>
                                <FaUser className={'nav__button'}/>
                                <FaSearch className={'nav__button'}/>
                            </>

                        }

                    </div>
                </div>

            </nav>


    );
}

export default Nav;
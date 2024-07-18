import React, {useEffect} from 'react';
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

    // useEffect(() => {
    //     document.querySelector('.none').remove()
    // }, []);
    return (
        <>
            <nav className={userScrolling ? "nav none" : "nav"}>
                <div className={'container__nav'}>
                    <div className="left">
                        <img src={Logo} alt=""/>
                        <ul className="nav__list">
                            <li className={userScrolling ? "nav__item " : "nav__item"}>О комнании</li>
                            <li className={userScrolling ? "nav__item " : "nav__item"}>О продукции</li>
                            <li className={userScrolling ? "nav__item " : "nav__item"}>Каталог товаров</li>
                        </ul>
                    </div>
                    <div className="right">

                        <GiSmartphone className={'telephone__icon'}/><span>+7 (905) 543 23 45</span>
                        <div className={'nav__button basket'}>
                            <FaShoppingBasket/><span className={'basket__text'}>4290 р.</span>
                        </div>


                        <FaUser className={'nav__button'}/>
                        <FaSearch className={'nav__button'}/>

                    </div>
                </div>

            </nav>
            <nav className={userScrolling ? "nav nav2 active" : "nav nav2 "}>
                <div className={'container__nav'}>
                    <div className="left">
                        <img src={Logo} alt=""/>

                        <span className={'left__text'}>Разработано в Германии. Сделано в России.</span>

                    </div>
                    <div className="right">


                                <FaUser className={'nav__button'}/>
                                <FaSearch className={'nav__button'}/>


                    </div>
                </div>

            </nav>

        </>


    );

}

export default Nav;
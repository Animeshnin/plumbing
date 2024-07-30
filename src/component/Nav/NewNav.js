import React, {useEffect, useState} from 'react';
import Logo from "../../assets/logo.png";
import {GiSmartphone} from "react-icons/gi";
import {FaSearch, FaShoppingBasket, FaUser} from "react-icons/fa";
import './nav.css'

function NewNav() {
    const [scrollY, setScrollY] = useState(0);
    const [userScrolling,  setUserScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY === 0) {
                setUserScrolling(false);
            } else if (currentScrollY < scrollY) {
                setUserScrolling(true);

            }
            else {
                // Пользователь прокручивает вниз
                setUserScrolling(false);
            }
            setScrollY(currentScrollY);
        }
        window.addEventListener('scroll', handleScroll);

    }, [scrollY]);
    return (
        <>
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
            <nav className={userScrolling ? 'nav nav__none' : 'nav'}>
                <div className={'container__nav'}>
                    <div className="left">
                        <img src={Logo} alt=""/>
                        <ul className="nav__list">
                            <li className={"nav__item"}>О комнании</li>
                            <li className={"nav__item"}>О продукции</li>
                            <li className={"nav__item"}>Каталог товаров</li>
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

        </>


    );
}

export default NewNav;
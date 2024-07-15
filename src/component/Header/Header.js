import React from 'react';
import Nav from "../Nav/Nav";
import './header.css'
import sliderImage1 from '../../assets/Group 70.png'
function Header(props) {
    return (
        <header className={'header'}>
            <Nav/>
            <div className={'container'}>
                <div className={'slider'}>
                    <div className="slider-information">
                        <h1 className={'slider-information__h1'}>
                            Сантехника и мебель для ванной комнаты
                        </h1>
                        <div className="dropdown-header">
                            <details className={'dropdown-header__spoiler'}>
                                <summary className="dropdown-header__title">О компании</summary>
                                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deserunt id itaque iure nihil quae quam qui.</span></p>
                            </details>
                            <details className={'dropdown-header__spoiler'}>
                                <summary className="dropdown-header__title">О компании</summary>
                            </details>
                            <details className={'dropdown-header__spoiler'}>
                                <summary className="dropdown-header__title">О компании</summary>
                            </details>
                        </div>
                    </div>
                    <div className="slider-image">
                        <img src={sliderImage1} alt=""/>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;
import React, {useEffect, useState} from 'react';
import Logo from "../../assets/logo.png";
import {GiSmartphone} from "react-icons/gi";
import {FaSearch, FaShoppingBasket, FaUser} from "react-icons/fa";
import './nav.css'
import Search from '../Search/Search';
import Modal from '../Modal/Modal';
import smesitely from '../../assets/smesitely.svg'
import furniture from '../../assets/furniture.svg'
import douche from '../../assets/douche.svg'
import union from '../../assets/Union.svg'

function NewNav() {
    const [scrollY, setScrollY] = useState(0);
    const [userScrolling,  setUserScrolling] = useState(false);
    const [modalActive, setModalActive] = useState(false)
    const [searchActive, setSearchActive] = useState(false)

    const closeAllModalsExcept = (activeModal) => {
        if (activeModal === 'modal') {
          setSearchActive(false);
        } else if (activeModal === 'search') {
          setModalActive(false);
        }
      };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY === 0) {
                setUserScrolling(false);
            } else if (currentScrollY < scrollY) {
                setModalActive(false)
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
            <Modal  active={modalActive} setActive={setModalActive}>
            <ul className='modal__list' onClick={e => e.stopPropagation()}>
                <li className='modal__item'>
                    <img src={smesitely}/>
                    <h3>Смесители</h3>
                </li>
                <li className='modal__item'>
                    <img src={furniture}/>
                    <h3>Мебель</h3>
                </li>
                <li className='modal__item'>
                    <img src={douche}/>
                    <h3>Душевая программа</h3>
                </li>
                    <li className='modal__item'>
                    <img src={union}/>
                    <h3>Фаянс</h3>
                </li>
            </ul>
            </Modal>
            <Modal active={searchActive} setActive={setSearchActive}>
            <div className='modal__search'  onClick={e => e.stopPropagation()}>
                <h3>Что вы ищете?</h3>
                <input className='search' type='search' placeholder='Раковина для ванной комнаты...'/>
                <button className='button border'>Search</button>
            </div>
            </Modal>
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
                            <li className={`nav__item ${modalActive? 'close' : 'open'}`} onClick={()=> {setModalActive(!modalActive); closeAllModalsExcept('modal');}}>Каталог товаров
            

                            </li>

                        </ul>
                    </div>
                    <div className="right">

                        <GiSmartphone className={'telephone__icon'}/><span>+7 (905) 543 23 45</span>
                        <div className={'nav__button basket'}>
                            <FaShoppingBasket/><span className={'basket__text'}>4290 р.</span>
                        </div>


                        <FaUser className={'nav__button'}/>
                        <FaSearch id='open-modal-btn' className={'nav__button'} onClick={() => {setSearchActive(!searchActive);  closeAllModalsExcept('search')}}/>

                    </div>
                </div>

            </nav>

        </>


    );
}

export default NewNav;
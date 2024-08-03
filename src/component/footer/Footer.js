import React, { useEffect } from 'react'
import logo from '../../assets/logo.png'
import { MdOutlineSmartphone } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import './footer.css'
import arrow from '../../assets/Vector2.svg'
import instagram from '../../assets/Group.svg'
export default function Footer() {
    useEffect(() => {
        const buttonUp = document.querySelector('.footer__button-img')

        function handleClickButtonUp(){
            window.scrollTo({top: 0, behavior: 'smooth'})
        }

        buttonUp.addEventListener('click', handleClickButtonUp)

        return () => {
            buttonUp.removeEventListener('click', handleClickButtonUp)
        }


    }, [])
  return (
    <footer className='footer'>
        <div className='footer__container'>
            <div className='footer__list'>
                <div className='footer__logo'>
                    <img src={logo}/>
                </div>
                <ul className='footer__ul'>
                    <li className='footer__li'><a className='footer__link'>О компании</a></li>
                    <li className='footer__li'><a className='footer__link'>Сотрудничество</a></li>
                    <li className='footer__li'><a className='footer__link'>Покупателям</a></li>
                </ul>
                <ul className='footer__ul'>
                    <li className='footer__li'><a className='footer__link'>Где купить</a></li>
                    <li className='footer__li'><a className='footer__link'>Сервисное обслуживание</a></li>
                    <li className='footer__li'><a className='footer__link'>Контакты</a></li>
                </ul>
                <ul className='footer__ul'>
                    <li className='footer__li title__ul'>Есть вопросы?</li>
                    <li className='footer__li'><CgMail className='orange fz'/>hello@orangemixers.ru</li>
                    <li className='footer__li'><MdOutlineSmartphone className='orange fz'/>+7 (495) 543 23 45?</li>
                </ul>
                <ul className='footer__ul'>
                    <li className='footer__li title__ul'>Мы в соцсетях</li>
                    <li className='footer__li'><img src={instagram}/></li>
                </ul>
            </div>

        </div>
        <div className='footer__bottom'>
            <span className='footer__bottom-text'>© 2019 Orange Mixers</span>
            <span className='footer__bottom-text created'>Разработал IldarSubZero</span>
        </div>
        <div className='footer__button'>
            <div className='footer__button-img'>
            <img src={arrow}/>
            </div>
        </div>
    </footer>
  )
}
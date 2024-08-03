import Header from "./component/Header/Header";
import './app.css'
import heart from './assets/heart.svg'
import paper from './assets/paper.svg'
import collectionImage from './assets/collectionImage.png'
import OunProduction from "./component/ounProduction/OunProduction";
import CommodutyElement from "./component/commodutyElement/CommodutyElement"
import ourProductionElement from './ournProductionElement'
import winner from './assets/winner.svg'
import refund from './assets/Refund.svg'
import landing from './assets/Landing.svg'
import commodityElement from './commodityElement'
import oMebel from './assets/mirrorCabinetCommodity.png'
import backImage from './assets/footerBackImage.png'
import React from "react";
import Dropdown from "./component/Dropdown/Dropdown";
import Footer from "./component/footer/Footer";
function App() {
    console.log(ourProductionElement)
  return (
    <div className="App">
      <Header/>
      <Dropdown/>
        <main>
            <div className={'gray'}>
            <div className="container">

                <div className="about">
                    <div className="about__text">
                        <p><span className={'orange'}>Оrange</span>– немецкая торговая марка. Главный офис и основное производство расположены в Германии. Производим смесители,  душевые кабины, </p>
                        <p className={''}>Мы предлагаем качественную продукцию немецкого производства, которая полностью адаптирована к реалиям российскиого рынка.</p>
                    </div>

                    <div className="about__production-list">
                        <div className={'about__production-item'}>
                            <div className="about__production-icon">
                                <img src={paper} alt=""/>
                            </div>
                            <div className="about__production-info">
                                <h5 className={'about__production-title'}>Cобственное производство</h5>
                                <p className={'about__production-text'}>Выский уровнень технологий позволяет гарантировать качество продукции на протяжении 10 лет</p>
                            </div>
                        </div>

                        <div className={'about__production-item'}>
                            <div className="about__production-icon">
                                <img src={heart} alt=""/>
                            </div>
                            <div className="about__production-info">
                                <h5 className={'about__production-title'}>Экологичность и доступность</h5>
                                <p className={'about__production-text'}>Уникальный состав сплава делает продукцию Orange безопасной для потребителя</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
            <div className="container">
               <OunProduction ourProductionElement={ourProductionElement}/>
            </div>
            <div className="collection">
                <div className="container">
                    <div className={'collection-main'}>
                        <div className={'collection__text'}>
                            <div className="collection__title">
                                <h1 className={'collection__title-h1'}>Коллекция</h1>
                            </div>
                            <div className="collection__description">
                                <p className={'collection__description-text'}>Чувственность и элегантность, пуризм и
                                    эксклюзивность, а может уют и романтичность? Наши коллекции, разработанные лучшими
                                    дизайнерами отрасли, помогут создать вам именно ту атмосферу ванной комнаты, которую
                                    вы
                                    всегда искали.</p>
                            </div>
                            <details className={'dropdown-header__spoiler'}>
                                <summary className="dropdown-header__title">О компании</summary>
                                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deserunt id itaque iure nihil quae quam qui.</span>
                                </p>
                            </details>
                        </div>
                        <div className="collection__image">
                            <img src={collectionImage}/>
                            <div className={'collection__group'}>
                                <h3 className={'collection__image-title'}>ARISTO</h3>
                                <button className={'button'}>от 4990 р.</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="promotionalGoods">
                    <h1 className="promotionalGoods__title">Акционные товары</h1>
                    <div className={'promotionalGoods__list'}>
                        {commodityElement.map(({brand, name, price, discount, image}) => (
                            <CommodutyElement brand={brand} name={name} price={price} discount={discount} image={image}/>
                        ))}
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="advantages">
                    <h1 className="advantages__title">Наши преимущества</h1>
                    <ul className="advantages__list">
                        <li className="advantages__item">
                            <div className="advantages__item-centered dvesti">
                                <div className="advantages__img">
                                    <img src={refund}/>
                                </div>
                                <h3>Бесплатный возврат</h3>
                            </div>
                            <span className="text-align-centered">Если товар вам не подходит, вы можете верунть его в течении 30 дней.</span>

                        </li>
                        <li className="advantages__item">
                        <div className="advantages__item-centered">
                                <div className="advantages__img">
                                    <img src={winner}/>
                                </div>
                                <h3>Гарантия 10 лет</h3>
                            </div>
                            <span className="text-align-centered dvestiVosem">Стандарты ISO9001 и двойной контроль качества гарантируют долгосрочную безупречную работу изделий.</span>

                        </li>
                        <li className="advantages__item">
                            <div className="advantages__item-centered">
                                <div className="advantages__img">
                                    <img src={landing}/>
                                </div>
                                <h3>Бесплатный возврат</h3>
                            </div>
                            <span className="text-align-centered dvesti">Банковской картой или наличными при получении.</span>

                        </li>
                    </ul>
                </div>
            </div>
            <div className="backImage">
                    <img className="backImage-image" src={backImage}/>
                <div className="overlay">
                    <p className="backImage-text">ORANGE – это строгий, тщательно продуманный дизайн и подлинные немецкие традиции.</p>

                </div>

            </div>
        </main>
        <Footer/>
    </div>
  );
}

export default App;

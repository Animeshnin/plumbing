import Header from "./component/Header/Header";
import './app.css'
import heart from './assets/heart.svg'
import paper from './assets/paper.svg'
import OunProduction from "./component/ounProduction/OunProduction";
import ourProductionElement from './ournProductionElement'
import oMebel from './assets/mirrorCabinetCommodity.png'
import React from "react";
function App() {
    console.log(ourProductionElement)
  return (
    <div className="App">
      <Header/>
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
                        <div className={'promotionalGoods__item'}>
                            <img className={'promotionalGoods__item-image'} src={oMebel} alt=""/>
                            <p
                                className={' promotionalGoods__item-text '}>O-mebel зеркальный шкаф со светом Лотос</p>
                            <p className={' promotionalGoods__item-price '}>5 990 ₽</p>
                            <span className={'promotionalGoods__item-button button'}>-15%</span>
                        </div>
                        <div className={'promotionalGoods__item'}>
                            <img className={'promotionalGoods__item-image'} src={oMebel} alt=""/>
                            <p
                                className={'promotionalGoods__item-text'}>O-mebel зеркальный шкаф со светом Лотос</p>
                            <p className={'promotionalGoods__item-price'}>5 990 ₽</p>
                        </div>
                        <div className={'promotionalGoods__item'}>
                            <img className={'promotionalGoods__item-image'} src={oMebel} alt=""/>
                            <p
                                className={'promotionalGoods__item-text'}>O-mebel зеркальный шкаф со светом Лотос</p>
                            <p className={'promotionalGoods__item-price'}>5 990 ₽</p>
                        </div>
                        <div className={'promotionalGoods__item'}>
                            <img className={'promotionalGoods__item-image'} src={oMebel} alt=""/>
                            <p
                                className={'promotionalGoods__item-text'}>O-mebel зеркальный шкаф со светом Лотос</p>
                            <p className={'promotionalGoods__item-price'}>5 990 ₽</p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </div>
  );
}

export default App;

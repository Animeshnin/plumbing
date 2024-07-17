import Header from "./component/Header/Header";
import './app.css'
import heart from './assets/heart.svg'
import paper from './assets/paper.svg'
import OunProduction from "./component/ounProduction/OunProduction";
import ourProductionElement from './ournProductionElement'
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
        </main>
    </div>
  );
}

export default App;

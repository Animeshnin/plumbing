import React from 'react';
import './commodutyElement.css'

function CommodutyElement({brand, name, price, discount, image}) {
    const newPrice = () => {
        if(discount > 0) {
            let luna = Array.from(String(Math.ceil(price-price*(discount / 100))), Number)
            if (luna.length <= 3){
                return `${luna.join('')}`
            } else {
                return `${luna[0]} ${luna.slice(1).join('')}`
            }
            
        } else {
            return price
        }
    } 
    return (
        <div className={'promotionalGoods__item'}>
                            <img className={'promotionalGoods__item-image'} src={`${process.env.PUBLIC_URL}/assets/${image}.png`} alt=""/>
                            <p
                                className={' promotionalGoods__item-text '}>{brand} {name}</p>
                                <div className='promotionalGoods__item-groupPrice'>
                            {discount > 0 ? (
                                <>
                                <p className={' promotionalGoods__item-price '}>{newPrice()}</p>
                                <p className={' promotionalGoods__item-price crosse'}>{price}</p>
                                </>
                            ) :
                            (
                                <p className={' promotionalGoods__item-price'}>{price}</p>

                            )
                            }
               
                                    
                                </div>

                            {discount > 0 ? (<span className={'promotionalGoods__item-button button'}>-{discount} %</span>) : ''}                            
                        </div>
    )
}

export default CommodutyElement
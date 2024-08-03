import React from 'react';
import './modalDropdown.css'
import smesitely from '../../assets/smesitely.svg'
import furniture from '../../assets/furniture.svg'
import douche from '../../assets/douche.svg'
import union from '../../assets/Union.svg'


function Dropdown({}){
  return(
    <div className='modal'>
      <ul className='modal__list'>
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
  </div>
  )

}

export default Dropdown;
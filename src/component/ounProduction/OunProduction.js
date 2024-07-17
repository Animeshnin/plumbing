import React from 'react';
import './ounProduction.css'

function OunProduction({ourProductionElement}) {
    return (
        <div className="ourProduction">
            <h1 className={'ourProduction-title'}>Наша продукция</h1>
            <div className={'ourProduction-list'}>
                {ourProductionElement.map(({image, title}, index) => (
                    <div className={'ourProduction-item'} style={{backgroundImage: `url('${process.env.PUBLIC_URL}/assets/${image}')`}}>
                        <h3>{title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OunProduction;
import React from 'react';

import '../homepage_styles/ExclusiveContainer.css'


const Ido = (props) => {
    const {Logo, Name, Price, Coin, Hour, X, Ath } = props;
    
    return (
    <div className='ido'>
        <img src={Logo} />
        <div className='name-price'>
            <h4>{Name}</h4>
            <p>{Price}</p>
        </div>
        <img src={Coin} />
        <p className='ido-hour'>{Hour}</p>
        <p className='ido-x'>{X}</p>
        <p className='ido-ath'>{Ath}</p>

    </div>
  )
}

export default Ido;
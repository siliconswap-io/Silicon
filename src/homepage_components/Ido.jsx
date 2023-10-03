import React from 'react';

import '../homepage_styles/ExclusiveContainer.css'


const Ido = (props) => {
    const {Logo, Name, Price, Coin, Hour, X, Ath } = props;
    
    return (
    <div className='ido'>
        <img className='ido-logo' src={Logo} alt=''/>
        <div className='name-price'>
            <h4>{Name}</h4>
            <p>{Price}</p>
        </div>
        <img className='coin-logo' src={Coin} alt=''/>
        <p className='ido-hour'>{Hour}</p>
        <p className='ido-x'>{X}</p>
        <p className='ido-ath'>{Ath}</p>

    </div>
  )
}

export default Ido;
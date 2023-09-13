import React from 'react'


const HomeIdo = (props) => {
    const {Logo, Name, Price, Coin, Hour, X, Ath } = props;
    
    return (
    <div>
        <img src={Logo} />
        <div className='name-price'>
            <h4>{Name}</h4>
            <p>{Price}</p>
        </div>
        <img src={Coin} />
        <p>{Hour}</p>
        <p>{X}</p>
        <p>{Ath}</p>

    </div>
  )
}

export default HomeIdo;
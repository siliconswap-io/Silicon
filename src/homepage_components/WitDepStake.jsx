import React from 'react'

const WitDepStake = (props) => {
  const { depWit, stakeStatus } = props;
  return (
    <div className="wit-dep-stake">
      <p>{depWit}</p>
      <div className='input-btn'>
        <input type='number' placeholder='0.00' />
        <button>Max</button>
      </div>
      <button className='stake-button'>{stakeStatus}</button>
    </div>
  )
}

export default WitDepStake;
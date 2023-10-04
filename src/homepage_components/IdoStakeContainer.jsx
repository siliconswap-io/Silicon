import React from 'react';

import "../homepage_styles/IdoStakeContainer.css"

/* ////// IMAGES ////// */
import StakeLogo from "../assets/images/Ido-logo.png";
import ArrowDown from "../assets/icons/arrow-down.png";
import StakeDetails from './StakeDetails';
import WitDepStake from './WitDepStake';



const IdoStakeContainer = (props) => {
  return (
    <div className='ido-stake-container'>
        <div className='participant-ido-stake'>
            <div className='stake-logo-text'>
                <img src={StakeLogo} alt='' />
                <div className='stake-text'>
                    <h3>Participate IDO Stake</h3>
                    <p>Game</p>
                    <small>Contrary to popular belief, Lorem ipsum is not simply random text. 
                        It has roots ina piece of slassical Latinliterature 
                        from 45 BC making it over.
                    </small>
                </div>

            </div>

            <img className='arrow-down' src={ArrowDown} alt=''/>
        </div>

        <div className='token-details'>
            <StakeDetails detail="0 LP" name="Staked" />
            <StakeDetails detail="0 Game" name="Earned" />
            <StakeDetails detail="25%" name="APY" />
            <StakeDetails detail="$9,524,071.9" name="LP Price" />
            <StakeDetails detail="$24,571,132.94" name="TVL" />
        </div>

        <div className='deposit-withdraw'>
            <WitDepStake depWit="Deposit" stakeStatus="Approve" />
            <WitDepStake depWit="Withdraw" stakeStatus="Withdraw" />
            <div className='pending-rewards'>
                <p className='pend-reward'>Pending Rewards</p>
                <p className='reward-value'>0.00 BUSD</p>
                <small>Reward are depicted, funded by admins</small>
                <button>Claim</button>

            </div>
        </div>
    </div>
  )
}

export default IdoStakeContainer;
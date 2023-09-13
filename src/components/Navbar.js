import React from 'react';

import logo from '../assets/images/sslog_a 1.png';
import searchIcon from '../assets/icons/search-icon.png';
import walletIcon from '../assets/icons/wallet-icon.png';
import NabarTags from './NabarTags'

import '../styles/Navbar.css'


function Navbar() {
    return <nav className="nav">
        <a href="" className="silicon-logo">
            <img src={logo} />
        </a>
        <ul>
            <NabarTags tags="Home" />
            <NabarTags tags="Swap" />
            <NabarTags tags="Launchpad" />
            <NabarTags tags="Earn" />
            <NabarTags tags="Contact" />
        </ul>
        <img className="search-icon" src={searchIcon} />
        <button className="connect-btn">
            <img src={walletIcon} />
            Connect Wallet
        </button>
    </nav>

}

export default Navbar;
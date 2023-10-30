import React, {useState} from 'react'

/* ////// PAGES ////// */
import Navbar from '../homepage_components/Navbar';
import ConnectWalletContainer from '../homepage_components/ConnectWalletContainer';

export default function Swap() {
    const [connectWalletVisible, setConnectWalletVisible] = useState(false);

    const toggleConnectWallet = () => {
        setConnectWalletVisible(!connectWalletVisible);
    };
    return (
        <header>
            <Navbar onConnectClick={toggleConnectWallet} />
            {connectWalletVisible && (< ConnectWalletContainer />)}

        </header>
    )
}

import React, {useState} from 'react';

import "../homepage_styles/Home.css"

/* ////// PAGES ////// */
import Navbar from '../homepage_components/Navbar';
import TopContainer from '../homepage_components/TopContainer';
import FeaturesContainer from '../homepage_components/FeaturesContainer';
import HowItWorksContainer from '../homepage_components/HowItWorksContainer';
import ExclusiveContainer from '../homepage_components/ExclusiveContainer';
import IdoStakeContainer from '../homepage_components/IdoStakeContainer';
import ProjectContainer from '../homepage_components/ProjectContainer';
import FooterContainer from '../homepage_components/FooterContainer';
import TeamContainer from '../homepage_components/TeamContainer';
import ConnectWalletContainer from '../homepage_components/ConnectWalletContainer';

function Home() {
  const [connectWalletVisible, setConnectWalletVisible] = useState(false);

  const toggleConnectWallet = () => {
    setConnectWalletVisible(!connectWalletVisible);
  };

  return ( <div>
    <header>
      <Navbar onConnectClick={toggleConnectWallet} />
      {connectWalletVisible && (< ConnectWalletContainer/>)}

    </header>
    <main className={`home-content ${connectWalletVisible ? 'blurred' : ''}`}>
      <TopContainer />
      <FeaturesContainer />
      <HowItWorksContainer />
      <ExclusiveContainer />
      <IdoStakeContainer />
      <ProjectContainer />
      <TeamContainer />
    </main>
    <footer className={`home-content ${connectWalletVisible ? 'blurred' : ''}`}>
      <FooterContainer />
    </footer>

  </div>
)
}

export default Home;

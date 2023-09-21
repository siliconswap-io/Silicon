/* ////// PAGES ////// */
// import './styles/Home.css'

import Navbar from './homepage_components/Navbar';
import TopContainer from './homepage_components/TopContainer';
import FeaturesContainer from './homepage_components/FeaturesContainer';
import HowItWorksContainer from './homepage_components/HowItWorksContainer';
import ExclusiveContainer from './homepage_components/ExclusiveContainer';
import IdoStakeContainer from './homepage_components/IdoStakeContainer';
import ProjectContainer from './homepage_components/ProjectContainer';
import FooterContainer from './homepage_components/FooterContainer';

function Home() {
  return <div>
    <header>
      <Navbar />

    </header>
    <main>
      <TopContainer />
      <FeaturesContainer />
      <HowItWorksContainer />
      <ExclusiveContainer />
      <IdoStakeContainer />
      <ProjectContainer />

    </main>
    <footer>
      <FooterContainer />
    </footer>

  </div>

}

export default Home;

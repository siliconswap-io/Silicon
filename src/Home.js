/* ////// PAGES ////// */
// import './styles/Home.css'

import Navbar from './homepage_components/Navbar';
import TopContainer from './homepage_components/TopContainer';
import FeaturesContainer from './homepage_components/FeaturesContainer';
import HowItWorksContainer from './homepage_components/HowItWorksContainer';
import ExclusiveContainer from './homepage_components/ExclusiveContainer';

function Home() {
  return <div>
    <header>
      <Navbar/>

    </header>
    <main>
      <TopContainer/>
      <FeaturesContainer/>
      <HowItWorksContainer/>
      <ExclusiveContainer />

    </main>

  </div> 
 
}

export default Home;

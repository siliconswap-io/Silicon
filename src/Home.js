/* ////// PAGES ////// */
import './styles/Home.css'
import Navbar from './components/Navbar';
import HomeTopContainer from './components/HomeTopContainer';
import FeaturesContainer from './components/HomeFeaturesContainer';
import HowItWorksContainer from './components/HomeHowItWorksContainer';
import ExclusiveContainer from './components/HomExclusiveContainer';

function Home() {
  return <div>
    <header>
      <Navbar/>

    </header>
    <main>
      <HomeTopContainer/>
      <FeaturesContainer/>
      <HowItWorksContainer/>
      <ExclusiveContainer />

    </main>

  </div> 
 
}

export default Home;

/* ////// PAGES ////// */
import './styles/Home.css'
import Navbar from './components/Navbar';
import TopContainer from './components/Top-container';
import FeaturesContainer from './components/Home-features-container';
import HowItWorksContainer from './components/Home-how-it-works-container';

function Home() {
  return <div>
    <header>
      <Navbar/>

    </header>
    <main>
      <TopContainer/>
      <FeaturesContainer/>
      <HowItWorksContainer/>
    </main>

  </div> 
 
}

export default Home;

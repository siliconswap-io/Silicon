import './styles/Home.css'
import Navbar from './components/Navbar';
import TopContainer from './components/Top-container';
import FeaturesContainer from './components/features-container';


function Home() {
  return <div>
    <header>
      <Navbar/>

    </header>
    <main>
      <TopContainer/>
      <FeaturesContainer/>
    </main>

  </div> 
 
}

export default Home;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Experience from './components/Experience';
import PortfolioV2 from './components/PortfolioV2';
function App() {
	return (
		<>
      <Particles className='particles-canvas' params={{
        particles: {
          number: {
            value:30,
            density: {
              enable: true,
              value_area:900
            }
          },
          shape:{
            type: 'circle',
            stroke:{
              width:6,
              color: '#f9ab00'
            }
          }
        }
      }}/>
			<Navbar />
      <Header/>
      <AboutMe/>
      <Experience/>
      <PortfolioV2/>
		</>
	);
}

export default App;

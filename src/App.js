import './App.css';
import Navigasi from './Component/Navigasi';
import Intro from './Component/Intro';
import Tranding from "./Component/Tranding";
import "./style/landingPage.css"
import SuperHero from './Component/Superhero';

function App() {
  return (
    <div>
      {/*intro*/}
      <div className="myBG">
        <Navigasi/>
        <Intro/>
      </div>
      <div className="tranding">
        <Tranding/>
      </div>
      <div className="superhero">
        <SuperHero/>
      </div>
    </div>
  );
}

export default App;

import Registration from './Registration';
import './App.css';
import ThreeJSBackground from './ThreeJSBackground';
import ContentBelow from './ContentBelow';
import Headline from './Headline';
import Background from "./Background";

import { init, animate } from './heroSection';

init()
animate()

function App() {
  return (
    <div className="App">
      <div id="targetSection">
        <Background />
        <div className="parallax-content">
          <ContentBelow />
        </div>
      </div>

    </div>
  );
}

export default App;

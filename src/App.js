import Registration from './Registration';
import './App.css';
import ThreeJSBackground from './ThreeJSBackground';
import ContentBelow from './ContentBelow';
import Headline from './Headline';

import { init, animate } from './heroSection';

init()
animate()

function App() {
  return (
    <div className="App">
      {/* <ThreeJSBackground/> */}
      {/* <Headline /> */}
      <div id="targetSection">
        <ContentBelow/>
      </div>
    </div>
  );
}

export default App;

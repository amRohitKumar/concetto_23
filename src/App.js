import Registration from './Registration';
import './App.css';
import ThreeJSBackground from './ThreeJSBackground';
import ContentBelow from './ContentBelow';

function App() {
  return (
    <div className="App">
      <ThreeJSBackground/>
      <div id="targetSection">
        <ContentBelow/>
      </div>
    </div>
  );
}

export default App;

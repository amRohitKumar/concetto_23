import Registration from './Registration';
import './App.css';
import ThreeJSBackground from './ThreeJSBackground';
import ContentBelow from './ContentBelow';
import styles from './styles.css';

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

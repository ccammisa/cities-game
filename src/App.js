import logo from './logo.svg';
import './App.css';
import CountryCapitalGame from './component/game-component'
import {mockData} from './component/data'

function App() {
  return (
    <div className="App">
        <CountryCapitalGame data={mockData}>
          
        </CountryCapitalGame>
        
    </div>
  );
}

export default App;

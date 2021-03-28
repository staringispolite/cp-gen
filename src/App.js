import './App.css';
import Poop from './Poops.js';

function App() {
  const numPoops = 100;
  let poops = [];
  for(let i = 0; i < numPoops; i++) {
    poops.push(<Poop id={i}/>);
  }

  return (
    <div className="App">
      <h2>100 Randomly-Generated CryptoPoops</h2>
      <div className="cp-list">
        {poops}
      </div>
    </div>
  );
}

export default App;

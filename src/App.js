import './App.css';
import CardArea from "./Components/Card"

function App() {

  const characters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];

  return (
    <div className="App">
      <div className='title'>Memory Cards!</div>

      <div className='cards'>
        <CardArea characters={characters}/>
      </div>
      
      <div className='score'>Current Score: 0</div>
    </div>
  );
}

export default App;

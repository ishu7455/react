import logo from './logo.svg';
import './App.css';


function test(){
 document.getElementById('bb').innerText = 'iyiyiyi';
}
function App() {
  return (
    <div className="App" id="bb">
     
      
          Learn React
          <button className='gjggjgj' onClick={test}>submit</button>
          <div >Original Text</div>
    </div>
  );
}

export default App;

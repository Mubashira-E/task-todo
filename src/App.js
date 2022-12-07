 import vector from './Vector.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="heading">
        My Tasks
      </div>
      <div className="inputbar">
      <div className="inputtext">
          <input type="text" placeholder="Add new task"/>
        </div>
        <div>
          <button> Add </button>
        </div>
      </div>
      <div className="todo">
        <div className="todo-list">
             <p>Read work emails</p>
             <img src={vector}/>
          </div>
        
        <div className="cross">
             <p>Workout</p>
          <img src={vector} alt="" />
        </div>
        <div className="todo-list">
             <p>Water indoor plants</p>
          <div>
            <img src={vector} alt="" />
          </div>
        </div>
        </div>
        </div>
      
      
    
  );
  }

export default App;

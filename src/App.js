import './App.css';
import 'core-js';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import promise from './components/ItemList';



function App() {
function saveData(count){
    console.log(count)
  }
  return (
    <div className="App">
    <Navbar/>
    <ItemListContainer/>
    <promise/>
    <br></br>
    <ItemCount stock={5} initial={1} onChange={saveData} />
    </div>
    
    
  );
  
}

export default App;


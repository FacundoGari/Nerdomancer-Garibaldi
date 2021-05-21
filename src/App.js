import './App.css';
import 'core-js';
import Navbar from './components/Navbar';
//import CardWidget from './components/CartWidget';
import ItemListContainerCard from './components/ItemListContainer';
import ItemCount from './components/ItemCount';




function App() {
function saveData(count){
    console.log(count)
  }
  return (
    <div className="App">
    <Navbar/>
    <ItemListContainerCard/>
    <br></br>
    <ItemCount stock={5} initial={1} onChange={saveData} />
    </div>
    
    
  );
  
}

export default App;


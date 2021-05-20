import './App.css';
import 'core-js';
import Navbar from './components/Navbar';
//import ItemCount from './components/ItemCount'
//import CardWidget from './components/CartWidget';
import ItemListContainerCard from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <ItemListContainerCard/>
    <br></br>
    <ItemCount/>
    </div>
    
  );
}

export default App;


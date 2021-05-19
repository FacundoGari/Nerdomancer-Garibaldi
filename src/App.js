import './App.css';
import 'core-js';
import Navbar from './components/Navbar';
import ItemCount from './components/ItemCount'
import CardWidget from './components/CartWidget';
import ItemListContainerCard from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <h1>NerdoMancer!</h1>
    <br></br>
    <ItemListContainerCard/>
    </div>
  );
}

export default App;


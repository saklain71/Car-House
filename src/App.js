import './App.css';
import Article from './Components/Article/Article';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <h1 className='car-title'>Car House</h1>
     <Home></Home>
     <Article></Article>

    </div>
  );
}

export default App;

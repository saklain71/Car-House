import './App.css';
import Article from './Components/Article/Article';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <h1 className='car-title'>Car House</h1>
     <Home></Home>
     <Article></Article>
     <Footer></Footer>

    </div>
  );
}

export default App;

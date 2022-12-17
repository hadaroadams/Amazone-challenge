import './App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx'
import {BrowserRouter, Routes, Route}
from 'react-router-dom';
import Checkout from './components/Checkout';
function App() {
  return ( 
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<><Home/></>}></Route> 
        <Route path='/checkout' element={<><Checkout/></>}></Route>  
      </Routes>
    </BrowserRouter> 
  );
}

export default App;

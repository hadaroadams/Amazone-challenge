import './App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx'
import {BrowserRouter, Routes, Route}
from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';
function App() {
  return ( 
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<><Header/><Home/></>}></Route> 
        <Route path='/checkout' element={<><Header/><Checkout/></>}></Route> 
        <Route path='/login' element={<><Login/></>}></Route>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;

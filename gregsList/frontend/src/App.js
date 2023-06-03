import './App.css';
import 'react-toastify/dist/ReactToastify.css'

import {BrowserRouter,Routes, Route, Navigate} from "react-router-dom"
import {ToastContainer} from 'react-toastify'

import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import Sell from './components/Sell';
import NotFound from './components/NotFound';
import Loginform from './components/LoginForm';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <ToastContainer />
        <NavBar />
        <Routes>
          <Route path="/cart" exact element={<Cart />} />
          <Route path='/login' exact element={<Loginform />}/>
          <Route path='/' exact element={<Home />} />
          <Route path='/sell' exact element={<Sell />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" element={<Navigate replace to="/not-found" />} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}
export default App;
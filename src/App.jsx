
import { useEffect } from 'react';
import { useDispatch} from 'react-redux'
import { getRestaurants } from './redux/actions/restaurantActions';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Header from './components/Header';
import Cart from './pages/Cart';
import {getCart}from "./redux/actions/basketAction"
const App = () => {
    //store verileri ilet
const dispatch = useDispatch()

//sayfa yüklendiğinde thunk fonk ile api'a istek at ve gelen verileri reducera ilet
useEffect(()=>{
  //restaurant verilerini alan fonk
  dispatch(getRestaurants());
  
  //cart verilerini alan fonk
  dispatch(getCart());
},[]);
  
return (
  <BrowserRouter>
  <Header/>
  <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/restaurant/:id' element={<Detail/>}/>
 <Route path='/cart' element={<Cart/>}/>
  </Routes>
  </BrowserRouter>
)
}
export default App

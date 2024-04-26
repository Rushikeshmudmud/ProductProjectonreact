import React,{useState}from 'react'
import Home from './Component.js/Home'
import { BrowserRouter, Route , Routes , Navigate} from 'react-router-dom'
import Header from './Component.js/Header'
import ProductSpec from './Component.js/ProductSpec'
import Cart from './Component.js/Cart'
import Search from './Component.js/Search'


function App() {

  let [isLoggedIn,setIsLoggedIn] = useState(false)

  let productsArr = [
    {Name : "a" , price : 10},
    {Name : "b" , price : 5},
    {Name : "c" , price : 20},
  ]



  return (
    <>
    

    <BrowserRouter >

    <Header isLoggedIn={isLoggedIn}
    setIsLoggedIn={setIsLoggedIn} />

    <Routes >

     <Route path="/" element = {isLoggedIn == true ? <Home/> : <Navigate to = ""/>}/>
     <Route path = "/products/:id" element={<ProductSpec/>}/>
     <Route path="/search" element={isLoggedIn == true ? <Search/>: <Navigate to = ""/>}/>
      <Route path="/Cart" element = {isLoggedIn == true ? <Cart/>: <Navigate to = ""/>}/>
      
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;
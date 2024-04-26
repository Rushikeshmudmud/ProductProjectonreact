import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'


function Header({isLoggedIn,setIsLoggedIn}) {


  let cartItems = useSelector( (state) => {
    return state.cartItems;
  })



  

  return (
    <div>

<div id='header'>

 < Link to = "/"> <b>Home</b></Link>
 <Link to = "/search"><b>Search </b></Link>
  

 
 {isLoggedIn == true ? <button type="button" class="btn btn-outline-dark"  onClick={ () => {
  setIsLoggedIn(false) }}>LogOut</button> : 
 
 <button type="button" class="btn btn-outline-dark btn-1" onClick={ () => {
  setIsLoggedIn(true)  }}>LogIn</button> } 

<Link to = "/Cart"><b> Cart - {cartItems.length}</b></Link> 
</div>

    </div>
  )
}

export default Header;
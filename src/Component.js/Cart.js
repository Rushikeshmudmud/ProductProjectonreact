import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {removefromCart} from './Reducer'

function Cart(){

  let dispatch = useDispatch();


  console.log("Cart called..")

  let cartItems = useSelector ( (state) => {
  return state.cartItems;
  })

  console.log(cartItems);

   let cartPrice = cartItems.reduce( (acc,item,i) => {
   return acc = acc+item.cartItem.Price
  },0 )

  

  return (
    <>
     <h1>cart</h1>

      <div className='mainContainerPrice' style={{marginTop : "150px" , textAlign : "center"}}>

     <div class="row row-cols-1 row-cols-md-2 g-4 container-smallIMG">
     {cartItems.map((item,index) => {
      return      <div class="card" >
      <div class="row">
        <div class="col-md-4">
          <img src={item.cartItem.Thumbnail} class="img-fluid rounded-start h-100" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Title :{item.cartItem.Title}</h5>
            <p class="card-text"> <b>Price :</b>$ {item.cartItem.Price}</p>
            
            <p class="card-text"> <b>DiscountPrice :</b>{item.cartItem.DiscountPrice}</p>
            <button type="button" class="btn btn-warning"
            onClick={ () => {
              dispatch(removefromCart(index) )
            }}
            >Remove From Cart</button>
          </div>
        </div>
      </div>
    </div>
     })}
 

     </div>

     <div className='toatlPrice'>
     
      <b style={{color:"white"}}>SubTotal Prices = $ {cartPrice}</b>
     </div>

      </div>
    
      </>
  )
}

export default Cart;
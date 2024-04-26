import React,{useState , useEffect}from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import  {useDispatch} from 'react-redux'
import {AddToCart} from "./Reducer"

function ProductSpec() {

  let dispatch = useDispatch();

  let obj = useParams();
  console.log(obj);

  let [productSpec,setProductSpec] = useState(null)
  let [smallImgIndex,setSmallImgIndex] = useState(0)
  console.log(smallImgIndex)

  useEffect( () => {
    axios.get(`https://dummyjson.com/products/${obj.id}`)
    .then((res) => {
      let obj = res.data
      obj.thumbnail = res.data.images[0]
      setProductSpec( obj)

      return res.data.images[0]
    })
  },[])

  return (
    <div style={{marginTop : "100px" , color:"grey"}}>
   {productSpec != null ? <h3  style={{textAlign : "center"}}> {productSpec.title} Details</h3> : "" } 

   <div id='productSpec-container'>

   {productSpec != null ?     <div class="card mb-3" >
   <div class="row g-0">
     <div class="col-md-4">
       <img src={productSpec.thumbnail} class="img-fluid rounded-start productSpec-img" alt="..."/>
     </div>
     
     <div class="col-md-8 ">
       <div class="card-body MainSpec-container ">
        <div className='ContainerSpec-1'>
         <h5 class="card-title">{productSpec.title}</h5>
         <p class="card-title">      <span style={{color : "orangered"}}> <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></span><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></span><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></span><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
  <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
</svg>  </span> {productSpec.rating} ratings</p>
      <p class="card-text">Special Price</p>
      <p> <h5 class="card-text productSpec-item"> <b> $ {productSpec.price} </b> | <span style={{color : "green"}}>{productSpec.discountPercentage}%</span></h5> </p>
      
      <p class="card-text"><b>  Stock : </b> {productSpec.stock}</p>       
      <p class="card-text"><b>  Brand : </b> {productSpec.brand}</p>
      <p class="card-text"> <b> Category : </b> {productSpec.category}</p>
      
      <h5 class="card-text"> Product Description </h5>
      <p class="card-text">{productSpec.description}</p>
      <b style={{marginLeft : "30px"}}> Product Preview :</b>
      <div id='smallImage-container'>
        { productSpec.images.map((smllImg,index) => {
          
        return <img
        onClick={ () => { setSmallImgIndex (index)
          setProductSpec( { ...productSpec , thumbnail : smllImg } )
        } }
       
        className = { smallImgIndex == index ?`small-image-thumbnail active-small-image` : ` small-image-thumbnail`}
        src={smllImg}/>
        })}
       </div>

       </div>  

       <div className='ContainerSpec-2'>
       <button type="button" class="btn btn-warning" onClick={ () => {

        let cartItem = {
          Title : productSpec.title,
          Price : productSpec.price,
          Thumbnail : productSpec.thumbnail,
          DiscountPrice : productSpec.discountPercentage,
        }
        dispatch( AddToCart({cartItem}))
        
         } } >
        AddToCart</button>
        </div>
      </div>
     </div>
   </div>
 </div> : ""   }
   

   </div> 
    
    </div>
  )
}

export default ProductSpec;
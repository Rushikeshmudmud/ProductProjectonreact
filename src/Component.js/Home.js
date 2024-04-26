import React, {useState , useEffect} from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import './App.css'


function Home() {
    
  let [productData,setProductData] = useState({
    products : []
  })
let [productName,setProductName] = useState("")

let[filteredProducts,setFilteredProducts] = useState([])

  useEffect(( ) => {
    axios.get("https://dummyjson.com/products")
    .then((res) => {
      setProductData({ products : res.data.products})
    })
  } , [])
 console.log(productData)

useEffect(() => {
 let Products =  productData.products.filter((product,index) => {
if(product.title.toLowerCase().includes(productName.toLowerCase()) == true || 
product.brand.toLowerCase().includes(productName.toLowerCase()) == true ||
product.category.toLowerCase().includes(productName.toLowerCase()) == true){
  return true
}
  })
  setFilteredProducts(Products )

},[productName])


console.log(filteredProducts)






      
  return ( 
 

  
    <>


<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
     <div class="carousel-item active">
     
       <img src={"https://assets.entrepreneur.com/content/3x2/2000/1598215289-EverythingApplePro1.jpg"} class="d-block w-100" alt="..."/>
       <div class="carousel-caption d-none d-md-block">
       
        <h3 >Designed to be loved.</h3>
        <h1 style={{color:"blueviolet"}}>Take a closer look at
our latest models.</h1>
      </div>
     </div>
     <div class="carousel-item">
       <img src={"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710935867/Croma%20Assets/CMS/LP%20Page%20Banners/2024/PCP/Laptop/pcp_2split_Samsung_20March24_e3hxat.png?tr=w-1024"} class="d-block w-100" alt="..."/>
       
     </div>
     <div class="carousel-item">
       <img src={"https://images-static.nykaa.com/uploads/fe1ed0b3-5fc3-487f-8aab-652a3e47d253.jpg?tr=cm-pad_resize,w-1800"} class="d-block w-100" alt="..."/>
       <div class="carousel-caption d-none d-md-block">
        <h3 style={{color:"black"}}>Skin care products</h3>
        <h1 style={{color:"black"}}>Healthy Hair Habits Frizz</h1>
      </div>
     </div>
     <div class="carousel-item">
       <img src={"https://voices.uchicago.edu/fiftythird/files/2018/10/shutterstock_590746682-1-vf5uhb.jpg"} class="d-block w-100" alt="..."/>
       <div class="carousel-caption d-none d-md-block">
        <h3>Fresh product</h3>
        <h1>Upto 50% off on your first order</h1>
        <button type="button" class="btn btn-outline-warning">Order Now</button>
      </div>
     </div>
     <div class="carousel-item">
       <img src={"https://i3d72d.n3cdn1.secureserver.net/wp-content/uploads/2023/09/4-Custom-jpg.webp"} class="d-block w-100" alt="..."/>
       <div class="carousel-caption d-none d-md-block">
        <h3>Bring home beautiful interiors that fit your budget</h3>
        <h1>Welcome to Our Gallery</h1>
      </div>
     </div>
   </div>
   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
     <span class="visually-hidden">Previous</span>
   </button>
   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
     <span class="carousel-control-next-icon" aria-hidden="true"></span>
     <span class="visually-hidden">Next</span>
   </button>
 </div>
   

    <div 
    style={{marginTop:"100px"}}
    id='product-Wrapper'>



    
  <ProductCard
   productData = {productData}
   filteredProducts = {filteredProducts}
   productName = {productName}
   />
   
  </div>
  </>
  )
}

export default Home;
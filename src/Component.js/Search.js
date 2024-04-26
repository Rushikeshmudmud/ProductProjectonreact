import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Search() {

  let navigate = useNavigate();


let  [productSearch,setProductSearch]=useState("")
let [findProducts,setFindProducts] = useState([])
const [filteredProducts,setFilteredProducts]=useState([])



useEffect(()=>{
axios.get("https://dummyjson.com/products")
.then((res)=>{
  setFindProducts(res.data.products);

})
},[])

useEffect(()=>{
  let result = findProducts.filter((item,i)=>{
if(item.title.toLowerCase().includes(productSearch.toLowerCase())== true || item.brand.toLowerCase().includes(productSearch.toLowerCase())== true){
  return true
}
})
setFilteredProducts(result);
},[productSearch])

console.log(filteredProducts);

let showFilteredResult = (category) =>{
  if(category == "smartphones"){
  let result = findProducts.filter((item,i)=>{
   if(item.category == "smartphones"){
    return true
   }
    })
    setFilteredProducts(result);
  }
  }

  let showFilteredLaptop = (category) =>{
    if(category == "laptops"){
    let result = findProducts.filter((item,i)=>{
     if(item.category == "laptops"){
      return true
     }
      })
      setFilteredProducts(result);
    }
    }

    let showFilteredFragrances = (category) =>{
      if(category == "fragrances"){
      let result = findProducts.filter((item,i)=>{
       if(item.category == "fragrances"){
        return true
       }
        })
        setFilteredProducts(result);
      }
      }
      let showFilteredSkinCare =  (category) =>{
        if(category == "skincare"){
        let result = findProducts.filter((item,i)=>{
         if(item.category == "skincare"){
          return true
         }
          })
          setFilteredProducts(result);
        }
      }

      let showFilteredGroceries = (category) =>{
        if(category == "groceries"){
        let result = findProducts.filter((item,i)=>{
         if(item.category == "groceries"){
          return true
         }
          })
          setFilteredProducts(result);
        }
      }

     let showFilteredHome = (category) =>{
        if(category == "home-decoration"){
        let result = findProducts.filter((item,i)=>{
         if(item.category == "home-decoration"){
          return true
         }
          })
          setFilteredProducts(result);
        }  
      }
        
        let showFilteredRating = (category)=>{
        if(category == "4.5Rating"){
          let result = findProducts.filter((item,i)=>{
           if(item.rating >= 4.5){
            return true
           }
            })
            setFilteredProducts(result);
          }
        }  

     
          let setFilteredPrice = (category)=>{
            if(category == "pricesLowToHigh"){
             
  
                let  productsCopy = [...findProducts]
                let result = productsCopy.sort((a,b)=>{
                 
                 return a.price - b.price
                  })
                  setFilteredProducts(result);
                }
              }
            

       
          
          let setFilteredPrices = (category)=>{
            if(category == "pricesHighToLow"){
              let  productsCopy = [...findProducts]
              let result = productsCopy.sort((a,b)=>{
               
               return b.price - a.price
                })
                setFilteredProducts(result);
              }
            
            } 
            

        
      
      
          


            let showFilteredRatings = (category)=>{
              if(category == "LowToHigh"){
                let  productsCopy = [...findProducts]
                let result =  productsCopy.sort((a,b)=>{
                 
                 return a.rating - b.rating
                  })
                  setFilteredProducts(result);
                }
              } 
              
            
          
        


      function showAllProduct(){
        setFilteredProducts([])
        setProductSearch("")
      }


     

  return (
    <>
    
    <div id='navContainer'>

<div class="dropdown">
<button class="btn  btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
 <b>Price</b>
</button>
<ul class="dropdown-menu">
 <li><a onClick={()=>{
setFilteredPrice("pricesLowToHigh")
 }} class="dropdown-item" href="#">Low to high </a></li>
 <li><a onClick={()=>{
setFilteredPrices("pricesHighToLow")
 }} class="dropdown-item" href="#">High to low</a></li>
 
 
</ul>
</div>


<div class="dropdown">
<button class="btn  btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
 <b>Categary</b>
</button>
<ul class="dropdown-menu">
 <li><a onClick={()=>{
showFilteredResult("smartphones")
 }} class="dropdown-item" href="#">smartphones</a></li>
 <li><a onClick={()=>{
showFilteredLaptop("laptops")
 }} class="dropdown-item" href="#">Laptops</a></li>
 <li><a onClick={()=>{
showFilteredFragrances("fragrances")
 }} class="dropdown-item" href="#">Fragrances</a></li>
  <li><a onClick={()=>{
showFilteredSkinCare("skincare")
 }} class="dropdown-item" href="#">Skin Care</a></li>
 <li><a onClick={()=>{
showFilteredGroceries("groceries")
 }} class="dropdown-item" href="#"> Groceries</a></li>
<li><a onClick={()=>{
showFilteredHome("home-decoration")
 }} class="dropdown-item" href="#"> Home-decoration</a></li>

</ul>
</div>



<div class="dropdown">
<button class="btn  btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
 <b>Products</b>
</button>
<ul class="dropdown-menu">
 <li><a onClick={()=>{
showAllProduct();
 }} class="dropdown-item" href="#">All Products</a></li>
 <li><a onClick={()=>{
  showFilteredRating("4.5Rating")
 }} class="dropdown-item" href="#">4.5 Ratings </a></li>
 <li><a  onClick={()=>{
  showFilteredRatings("LowToHigh")
 }} class="dropdown-item" href="#">Rating Low to High</a></li>
</ul>
</div>
</div>


    
    <form class="d-flex placeholder-flex" role="search">
    <input
  style={{width: "800px" ,marginBottom:"50px"}}
  value = {productSearch}
  onChange={(e) => {
    setProductSearch(e.target.value)
  }}
  
   class="form-control form-control-lg offset-3" type="text" 
   placeholder="Search products by Title / Brand"  aria-label=".form-control-lg example"></input> 
      </form>
      
     
 <div style={{marginTop : "50px"}}
    className='container'>
      <div  class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
      {filteredProducts.length > 0 || productSearch != " "?
      filteredProducts.map((item , i)=>{
        return <div onClick={ () => {
          navigate(`/products/${item.id}`)
        }}  className='col'>
        <div class="card" >
  
          <div class="row">
          <div class="col-md-4">
            <img src= {item.thumbnail} class="img-fluid rounded-start h-100" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Title {item.title}</h5>
              <p class="card-text"> <b>Price :</b> $ {item.price}</p>
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
</svg>  </span> {item.rating} ratings</p>
              
              <p class="card-text"> <b>DiscountPrice :</b>{item.discountPercentage}</p>
              
            </div>
          </div>
        </div>
       
      </div>
      </div> })
        :findProducts.map((item,i) => {
          
                    return    <div
                    onClick={ () => {
                      navigate(`/products/${item.id}`)
                    }}
                    className='col'>
                    <div class="card" >
              
                      <div class="row">
                      <div class="col-md-4">
                        <img src= {item.thumbnail} class="img-fluid rounded-start h-100" />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">Title {item.title}</h5>
                          <p class="card-text"> <b>Price :</b> $ {item.price}</p>
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
</svg>  </span> {item.rating} ratings</p>
                          
                          <p class="card-text"> <b>DiscountPrice :</b>{item.discountPercentage}</p>
                          
                        </div>
                      </div>
                    </div>
                   
                  </div>
                  </div>
                  })}
        </div>
    </div>



    
    
    
    </>
  )
}

export default Search
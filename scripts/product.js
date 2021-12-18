
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

product()
async function product(){
let url=`http://127.0.0.1:5000/api/products`

   let response = await fetch(url,{
        method : "GET",
       
        headers:{
            "Content-Type": "application/json"
        }
    });

        let data = await response.json();
    console.log(data);
  
    localStorage.setItem("product_Data",JSON.stringify(data))
    display(data)
  
}
var productDiv=document.getElementById("product_container")
 
    function display(data){
        data.map((el)=>{
           let div=document.createElement("div")
           div.setAttribute("class","product")
           let product_dropdown=document.createElement("div")
            product_dropdown.setAttribute("id","product-dropdown")
            let product_dropdown_content=document.createElement("div")
            product_dropdown_content.setAttribute("id","product-dropdown-content")
            let img=document.createElement("img")
            img.setAttribute("id","product_img")
            img.src=el.productImg
            
            let title=document.createElement("h3")
            title.textContent=el.name
   

            let manufacture=document.createElement("p")
            manufacture.innerHTML=`by ${el.manufacture}`

            
    var rating = document.createElement("div");
    rating.setAttribute("id", "ratingDiv");
             var starDiv = document.createElement("div");
    starDiv.setAttribute("id", "star");
    starDiv.innerHTML = `<i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>`;
    var rs = starDiv.innerHTML;
      var points = document.createElement("div");
    points.setAttribute("id", "pointsDiv");
    points.textContent = el.stars;
    var rp = points.textContent;
    rating.innerHTML = `<p>${rs} </p><p>${rp}</p>`;

            let price=document.createElement("p")
            price.textContent=el.price;

            let totalSell=document.createElement("p")
            totalSell.textContent=el.totalSell

            let pickUp=document.createElement("p")
            pickUp.innerHTML=`${el.pickUp}`

            let delivery=document.createElement("p")
            delivery.innerHTML=`${el.delivery}`
              
            
        let dropdownpro=document.createElement("div")
         dropdownpro.setAttribute("id","dropdownpro")

        let addToCartbtn=document.createElement("div")
        addToCartbtn.setAttribute("id","addtocartbtn")
        addToCartbtn.innerText="ADD TO CART"
        
        
        let compare=document.createElement("div")
        compare.setAttribute("id","compare")
        compare.innerText="Compare"
        dropdownpro.append(addToCartbtn,compare)
            
            product_dropdown.append(product_dropdown_content,dropdownpro)

         

            
            div.append(img,title,manufacture,rating,price,totalSell,pickUp,delivery,product_dropdown)
            productDiv.append(div)

      
        })
    }  
    
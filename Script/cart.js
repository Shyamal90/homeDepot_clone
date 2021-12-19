let cartStore = JSON.parse(localStorage.getItem("cartData")) || [];
console.log(cartStore);
let totalAmount = 0;

 function displayData(cartStore){
    document.querySelector(".cartWrapper").innerHTML = ""; 
    cartStore.map((product,index)=>{
        console.log(product);
        let productContainer = document.createElement("div");
        productContainer.setAttribute("class","productContainer");


        let imageContainer = document.createElement("div");
        imageContainer.setAttribute("class","imageContainer");

        let productImg = document.createElement("img");
        productImg.setAttribute("class","productImg");
        productImg.setAttribute("src",product.image);

        imageContainer.append(productImg);

        let productDetailContainer = document.createElement("div");
        productDetailContainer.setAttribute("class","productDetailContainer");

        let box1 = document.createElement("div");
        box1.setAttribute("class","box1");

        let productName = document.createElement("h4");
        productName.setAttribute("class","productName");
        productName.innerHTML = product.name;

        let productPrice = document.createElement("p");
        productPrice.setAttribute("class","productPrice");
        productPrice.innerHTML = Number(product.price).toFixed(2);

        box1.append(productName,productPrice);

        let box2 = document.createElement("div");
        box2.setAttribute("class","box2");

        let productModelNo = document.createElement("p");
        productModelNo.setAttribute("class","productModelNo");
        productModelNo.innerHTML = "Model #" + product.model;

        box2.append(productModelNo);

        let box3 = document.createElement("div");
        box3.setAttribute("class","box3");

        let pickupBox = document.createElement("div");
        pickupBox.setAttribute("class","pickupBox");

        let homeShipBox = document.createElement("div");
        homeShipBox.setAttribute("class","homeShipBox");

        let deliveryBox = document.createElement("div");
        deliveryBox.setAttribute("class","deliveryBox");

        box3.append(pickupBox,homeShipBox,deliveryBox);

        let box4 = document.createElement("div");
        box4.setAttribute("class","box4");

        let saveForLater = document.createElement("p");
        saveForLater.setAttribute("class","saveForLater");
        saveForLater.innerHTML = "Save for Later";

        let saveForFavorites = document.createElement("p");
        saveForFavorites.setAttribute("class","saveForFavorites");
        saveForFavorites.innerHTML = "Save to Favorites";

        let removeItem = document.createElement("button");
        removeItem.setAttribute("class","removeItem");
        removeItem.innerHTML = "Remove";
        removeItem.addEventListener("click",()=>{
            deleteItem(index);
        })

        // Count total price
        totalAmount += Number(product.price);
        console.log(totalAmount);

        // show Price
        document.querySelector("#priceEl").innerHTML ="$" + totalAmount;
        let newAmmount = (totalAmount - 13.99).toFixed(2);
        document.querySelector("#totalAmt").innerHTML = "$" + newAmmount;

        // saving element functionality
        if(totalAmount > 0){
            document.querySelector("#savingEl").innerHTML = "-$13.99";
        }else{
            document.querySelector("#savingEl").innerHTML = "-$0.00";
            location.reload();
        }

        box4.append(saveForLater,saveForFavorites,removeItem);
        productDetailContainer.append(box1,box2,box3,box4);
        document.querySelector(".cartWrapper").append(imageContainer,productDetailContainer);
    })
 }
   
    window.addEventListener("load",function(){
        displayData(cartStore);
    })

    function deleteItem(index){
        console.log(index);

        cartStore.splice(index,1);

        localStorage.setItem("cartData",JSON.stringify(cartStore));
        displayData(cartStore);
    }
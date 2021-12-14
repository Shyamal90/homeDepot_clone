flag = true;
document.querySelector(".deliveryBtn").addEventListener("click",()=>{
    if(flag === true){
        document.querySelector(".deliveryResult").style.display = "block";
        flag = false;
    }else{
        document.querySelector(".deliveryResult").style.display = "none";
        flag = true;
    }
})
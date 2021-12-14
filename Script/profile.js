 flag = true;
document.querySelector("#myAccount").addEventListener("click",()=>{
    if(flag === true){
        document.querySelector(".registerform").style.display = "block";
        flag = false;
    }else{
        document.querySelector(".registerform").style.display = "none";
        flag = true;
    }
})
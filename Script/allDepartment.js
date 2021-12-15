let flagg = true;
document.querySelector("#allDepartment").addEventListener("click",()=>{
    if(flagg === true){
        document.querySelector(".allDepartment_list").style.display = "block";
        flagg = false;
    }else{
        document.querySelector(".allDepartment_list").style.display = "none";
        flagg = true;
    }
})
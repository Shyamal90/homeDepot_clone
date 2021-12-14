flag = true;
document.querySelector("#allDepartment").addEventListener("click",()=>{
    if(flag === true){
        document.querySelector(".allDepartment_list").style.display = "block";
        flag = false;
    }else{
        document.querySelector(".allDepartment_list").style.display = "none";
        flag = true;
    }
})
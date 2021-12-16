

let flag = true;

function showContent(){
    console.log("click");
    console.log(flag);
    if(flag === true){
        document.querySelector(".departmentContent").style.display = "block";
        // document.querySelector("#arrow3").src = "./image/arrow_up.svg";
        flag = false;
    }else{
        document.querySelector(".departmentContent").style.display = "none";
        document.querySelector(".arrowBtn").value = `<i class="fas fa-chevron-up"></i>`
        flag = true;
    }
}


// for price content
let priceFlag = true;

function showPriceContent(){
    console.log(priceFlag);
    console.log("click");

    if(priceFlag === true){
        document.querySelector(".priceCatelogy").style.display = "block";
        priceFlag = false;
    }else{
        document.querySelector(".priceCatelogy").style.display = "none";
        priceFlag = true;
    }
}
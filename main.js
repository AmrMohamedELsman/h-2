const navbar = document.querySelector(".navbar");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");


// preackfast
const readMoreBtn = document.querySelectorAll(".redBtn");
const pinfo = document.querySelectorAll(".pinfo");
const CloseredBtn = document.querySelectorAll(".CloseredBtn");
const card = document.querySelectorAll(".Card");

// sandwishe
const sancard = document.querySelectorAll(".sanCard");
const sanpinfo = document.querySelectorAll(".sanpinfo");
const sanredBtn = document.querySelectorAll(".sanredBtn");
const sanCloseredBtn = document.querySelectorAll(".sanCloseredBtn");

// pasta
const pasCard = document.querySelectorAll(".pasCard");
const paspinfo = document.querySelectorAll(".paspinfo");
const pasredBtn = document.querySelectorAll(".pasredBtn");
const pasCloseredBtn = document.querySelectorAll(".pasCloseredBtn");


// main desheis
const mainDishCard = document.querySelectorAll(".mainDishCard");
const maindishPinfo = document.querySelectorAll(".maindishPinfo");
const MainDishesRedBtn = document.querySelectorAll(".MainDishesRedBtn");
const mianDishCloseredBtn = document.querySelectorAll(".mianDishCloseredBtn");
const dImg = document.querySelectorAll(".dishbreakfastImg img");

// console.log(dImg);

// cocktils
const cocCard = document.querySelectorAll(".cocCard");
const cocpinfo = document.querySelectorAll(".cocpinfo");
const cocredBtn = document.querySelectorAll(".cocredBtn");
const cocCloseredBtn = document.querySelectorAll(".cocCloseredBtn");


// mojito
const moCard = document.querySelectorAll(".moCard");
const mopinfo = document.querySelectorAll(".mopinfo");
const moredBtn = document.querySelectorAll(".moredBtn");
const moCloseredBtn = document.querySelectorAll(".moCloseredBtn");

// slider

leftBtn.addEventListener("click", () => {
    navbar.scrollBy({ left: -200, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
    navbar.scrollBy({ left: 200, behavior: "smooth" });
});



// read more btn
// preak fast

let mineArr = [
    {
        h4: "Spanish Omelette",
        p : "95.00  <span> EGP</span>",
        p1: "(Eggs , Bell Pepper , butter , tow slices of toast ,coleslaw and wedges)",
        btnRed: "Read more",
        btnClose: "Close"
    },
    {
        h4: "Deluxe Omelette",
        p : "125.00  <span> EGP</span>",
        p1: "(Eggs , Smoked turke , cheddar , butter , tow slices of toast ,coleslaw and wedges)",
        btnRed: "Read more",
        btnClose: "Close"
    },
    {
        h4: "Beef becon Omelette",
        p : "130.00  <span> EGP</span>",
        p1: "(Eggs , Beef becon , cheddar , butter , tow slices of toast ,coleslaw and wedges)",
        btnRed: "Read more",
        btnClose: "Close"
    },
    {
        h4: "Pepperoni Omelette",
        p : "130.00  <span> EGP</span>",
        p1: "(Eggs , Pepperoni , cheddar , butter , tow slices of toast ,coleslaw and wedges)",
        btnRed: "Read more",
        btnClose: "Close"
    }, 
    {
        h4: "Pate",
        p : "50.00  <span> EGP</span>",
        p1: "(Fresh pate)",
        btnRed: "Read more",
        btnClose: "Close"
    },
    {
        h4: "Croissant",
        p : "50.00  <span> EGP</span>",
        p1: "(Fresh Croissant)",
        btnRed: "Read more",
        btnClose: "Close"
    },
    {
        h4: "Cheese Croissant",
        p : "56.00  <span> EGP</span>",
        p1: "(Cheese Croissant)",
        btnRed: "Read more",
        btnClose: "Close"
    }
]

for(let i = 0 ; i < mineArr.length; i++){
    readMoreBtn[i].addEventListener("click" , function(){
        readMoreBtn[i].style.display = "none";
        pinfo[i].style.display= "block";
        CloseredBtn[i].style.display = "block";
        CloseredBtn[i].style.backgroundColor = "red";
        CloseredBtn[i].style.color = "white";
        card[i].style.height = "250px";
        // card[i].style.height = "auto";
    })

    CloseredBtn[i].addEventListener("click" , function(){
        pinfo[i].style.display= "none";
        CloseredBtn[i].style.display = "none";
        readMoreBtn[i].style.display = "block";
        CloseredBtn[i].style.backgroundColor = "white";
        CloseredBtn[i].style.color = "black";
        card[i].style.height = "120px";
    })
}


// sanwaches

let sandwichArr = [
    {
        san_h4: "Chicken Pane sandwich",
        san_p : "110.00  <span> EGP</span>",
        san_p1: "(Fried Chicken , Lettuce , tomatos , mayonnaise)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Cordon Blue sandwich",
        san_p : "135.00  <span> EGP</span>",
        san_p1: "(rolled Chicken Breast with salami, Mozzarella, Lettuce , tomatoes , mayonnaise)",
        san_btnRed: "Read more",
        san_btnClose: "Close"            
    },
    {
        san_h4: "BBQ Bacon Chicken sandwich",
        san_p : "120.00  <span> EGP</span>",
        san_p1: "(Grilled Chicken Breast , Grilled smocked bacon , cheddar Cheese , tomatoes , mayonnaise , Lettuce , bbq sauce , Pickles)",
        san_btnRed: "Read more",
        san_btnClose: "Close"               
    },
    {
        san_h4: "Shish tawook sandwich",
        san_p : "110.00  <span> EGP</span>",
        san_p1: "(Grilled Chicken , onions , mixed bell Pepper , tartar sauce and Pickles)",
        san_btnRed: "Read more",
        san_btnClose: "Close"             
    },
    {
        san_h4: "Chicken fajta sandwich",
        san_p : "110.00  <span> EGP</span>",
        san_p1: "(Grilled Chicken Breast , bell Pepper , onions)",
        san_btnRed: "Read more",
        san_btnClose: "Close"           
    },
    {
        san_h4: "Chicken Crispy sandwich",
        san_p : "115.00  <span> EGP</span>",
        san_p1: "(Crispy Chicken Breast, Lettuce , Pickle , mayonnaise , cheddar sauce)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Chicken Quesadillas",
        san_p : "155.00  <span> EGP</span>",
        san_p1: "(Grilled Chicken , tortilla bread , Mozzarella Cheese , vegetables)",
        san_btnRed: "Read more",
        san_btnClose: "Close"             
    },
    {
        san_h4: "Tempura Shrimp sandwich",
        san_p : "145.00  <span> EGP</span>",
        san_p1: "((Fried Shrimp  , Tempura ,  rocca _ tartar sauce))",
        san_btnRed: "Read more",
        san_btnClose: "Close"            
    },
    {
        san_h4: "Elite Seafood sandwich",
        san_p : "155.00  <span> EGP</span>",
        san_p1: "((Shrimp _ calamari , crap _ onions , ball Pepper _ Cocktil sauce))",
        san_btnRed: "Read more",
        san_btnClose: "Close"            
    },
    {
        san_h4: "Hotdog Elite sandwich",
        san_p : "110.00  <span> EGP</span>",
        san_p1: "((sliced hotdog - mixed bell Pepper - mayonnaise _ onions - chili sauce))",
        san_btnRed: "Read more",
        san_btnClose: "Close"            
    },
    {
        san_h4: "Hotdog Elite sandwich",
        san_p : "110.00  <span> EGP</span>",
        san_p1: "((sliced hotdog - mixed bell Pepper - mayonnaise _ onions - chili sauce))",
        san_btnRed: "Read more",
        san_btnClose: "Close"            
    }
]

for(let i = 0 ; i < sandwichArr.length; i++){
    sanredBtn[i].addEventListener("click" , function(){
        sanredBtn[i].style.display = "none";
        sanpinfo[i].style.display= "block";
        sanpinfo[i].style.color= "#292929";
        sanpinfo[i].style.fontWeight= "500";
        sanCloseredBtn[i].style.display = "inline-block";
        sanCloseredBtn[i].style.margin = "10px 20px";
        sanCloseredBtn[i].style.padding = "5px 20px";
        sanCloseredBtn[i].style.backgroundColor = "red";
        sanCloseredBtn[i].style.color = "white";
        sancard[i].style.height = "auto";
        sancard[i].style.transform = "scale3d(1.1, 1.1, 1.3)";
    })

    sanCloseredBtn[i].addEventListener("click" , function(){
        sanpinfo[i].style.display= "none";
        sanCloseredBtn[i].style.display = "none";
        sanredBtn[i].style.display = "block";
        sancard[i].style.height = "120px";
        sancard[i].style.transform = "scale3d(1.0, 1.0, 1.0)";
        sanCloseredBtn[i].style.backgroundColor = "white";
        sanCloseredBtn[i].style.color = "black";
    })
}


// pasta

let pasArr = [
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Mix Cheese Pasta",
        san_p : "100.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - mix Cheese sauce - white sauce )",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Shrimp Pasta",
        san_p : "175.00  <span> EGP</span>",
        san_p1: "( Pasta _  Shrimp - Creamy sauce - mushroom _ and dill",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Elite Pasta",
        san_p : "185.00  <span> EGP</span>",
        san_p1: "(Pasta _ Creamy sauce - Shrimp _ calamari  - mushroom)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Negresco Pasta",
        san_p : "140.00  <span> EGP</span>",
        san_p1: "(Pasta _ Creamy sauce - Grilled Chicken _ Cheese)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Seafood Pasta",
        san_p : "185.00  <span> EGP</span>",
        san_p1: "(Pasta _ Creamy sauce -  Shrimp _ calamari - mushroom _ Cheese)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Crispy Chicken Pasta",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "( Pasta _ Creamy sauce - Crispy Chicken - cheddar Cheese)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Crispy Chicken Pasta",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "( Pasta _ Creamy sauce - Crispy Chicken - cheddar Cheese)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    }
]

for(let i = 0 ; i < pasArr.length; i++){
    pasredBtn[i].addEventListener("click" , function(){
        pasredBtn[i].style.display = "none";
        paspinfo[i].style.display= "block";
        paspinfo[i].style.color= "#292929";
        paspinfo[i].style.fontWeight= "500";
        pasCloseredBtn[i].style.display = "inline-block";
        pasCloseredBtn[i].style.margin = "10px 20px";
        pasCloseredBtn[i].style.padding = "5px 20px";
        pasCloseredBtn[i].style.backgroundColor = "red";
        pasCloseredBtn[i].style.color = "white";
        pasCard[i].style.height = "auto";
        pasCard[i].style.margin = "20px 0";
        pasCard[i].style.transform = "scale3d(1.1, 1.1, 1.3)";
    })

    pasCloseredBtn[i].addEventListener("click" , function(){
        paspinfo[i].style.display= "none";
        pasCloseredBtn[i].style.display = "none";
        pasredBtn[i].style.display = "block";
        pasCard[i].style.height = "120px";
        pasCard[i].style.margin = "10px";
        pasCard[i].style.transform = "scale3d(1.0, 1.0, 1.0)";
        pasCloseredBtn[i].style.backgroundColor = "white";
        pasCloseredBtn[i].style.color = "black";
    })
}


let mainDIshArr = [
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
]

for(let i = 0 ; i < mainDIshArr.length; i++){
    MainDishesRedBtn[i].addEventListener("click" , function(){
        MainDishesRedBtn[i].style.display = "none";
        maindishPinfo[i].style.display= "block";
        maindishPinfo[i].style.color= "#292929";
        maindishPinfo[i].style.fontWeight= "500";
        maindishPinfo[i].style.width= "300px";
        mianDishCloseredBtn[i].style.display = "inline-block";
        mianDishCloseredBtn[i].style.margin = "10px 20px";
        mianDishCloseredBtn[i].style.padding = "5px 20px";
        mianDishCloseredBtn[i].style.backgroundColor = "red";
        mianDishCloseredBtn[i].style.color = "white";
        mainDishCard[i].style.height = "auto";
        mainDishCard[i].style.transform = "scale3d(1.1, 1.1, 1.3)";
        mainDishCard[i].style.flexDirection = "column";
        // mainDishCard[i].style.backgroundColor = "#2a9d8f";
        dImg[i].style.width = "70%";
        dImg[i].style.marginLeft = "35px";
        dImg[i].style.marginTop = "10px";
    })

    mianDishCloseredBtn[i].addEventListener("click" , function(){
        maindishPinfo[i].style.display= "none";
        mianDishCloseredBtn[i].style.display = "none";
        MainDishesRedBtn[i].style.display = "block";
        MainDishesRedBtn[i].style.marginBottom = "px";
        mainDishCard[i].style.height = "120px";
        mainDishCard[i].style.transform = "scale3d(1.0, 1.0, 1.0)";
        mainDishCard[i].style.flexDirection = "row";
        dImg[i].style.width = "150px";
        dImg[i].style.marginLeft = "0px";
        dImg[i].style.marginTop = "0px";
        dImg[i].style.height = "110px";
        // mainDishCard[i].style.backgroundColor = "rgb(147 165 253)";
        mianDishCloseredBtn[i].style.backgroundColor = "white";
        mianDishCloseredBtn[i].style.color = "black";
    })
}



let cocarr =[
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
]

for(let i = 0 ; i < cocarr.length; i++){
    cocredBtn[i].addEventListener("click" , function(){
        cocredBtn[i].style.display = "none";
        cocpinfo[i].style.display= "block";
        cocpinfo[i].style.color= "#292929";
        cocpinfo[i].style.fontWeight= "500";
        cocCloseredBtn[i].style.display = "inline-block";
        cocCloseredBtn[i].style.margin = "5px 15px";
        cocCloseredBtn[i].style.padding = "5px 20px";
        cocCloseredBtn[i].style.backgroundColor = "red";
        cocCloseredBtn[i].style.color = "white";
        cocCard[i].style.height = "170px";
        cocCard[i].style.margin = "20px 0";
        cocCard[i].style.transform = "scale3d(1.1, 1.1, 1.3)";
    })

    cocCloseredBtn[i].addEventListener("click" , function(){
        cocpinfo[i].style.display= "none";
        cocCloseredBtn[i].style.display = "none";
        cocredBtn[i].style.display = "block";
        cocCard[i].style.height = "120px";
        cocCard[i].style.transform = "scale3d(1.0, 1.0, 1.0)";
        cocCloseredBtn[i].style.backgroundColor = "white";
        cocCloseredBtn[i].style.color = "black";
    })
}


let moarr = [
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
    {
        san_h4: "Penne alfredo",
        san_p : "130.00  <span> EGP</span>",
        san_p1: "(Penne Pasta - alfredo sauce - mushroom _ grated Cheese - Grilled Chicken Breast)",
        san_btnRed: "Read more",
        san_btnClose: "Close"          
    },
]

for(let i = 0 ; i < moarr.length; i++){
    moredBtn[i].addEventListener("click" , function(){
        moredBtn[i].style.display = "none";
        mopinfo[i].style.display= "block";
        mopinfo[i].style.color= "#292929";
        mopinfo[i].style.fontWeight= "500";
        moCloseredBtn[i].style.display = "inline-block";
        moCloseredBtn[i].style.margin = "5px 15px";
        moCloseredBtn[i].style.padding = "5px 20px";
        moCloseredBtn[i].style.backgroundColor = "red";
        moCloseredBtn[i].style.color = "white";
        moCard[i].style.height = "200px";
        moCard[i].style.margin = "20px 0";
        moCard[i].style.transform = "scale3d(1.1, 1.1, 1.3)";
    })

    moCloseredBtn[i].addEventListener("click" , function(){
        mopinfo[i].style.display= "none";
        moCloseredBtn[i].style.display = "none";
        moredBtn[i].style.display = "block";
        moCard[i].style.height = "125px";
        moCard[i].style.transform = "scale3d(1.0, 1.0, 1.0)";
        moCloseredBtn[i].style.backgroundColor = "white";
        moCloseredBtn[i].style.color = "black";
    })
}



let allLinks = document.querySelectorAll("li a");

let allSections = {
    "Breakfast": "Breakfast",
    "Appetizers": "Appetizers",
    "Soup": "soup",
    "Salad": "Salad",
    "Sandwhiches": "Sandwhiches",
    "Burgers": "Burgers",
    "Hawawshi": "Hawawshi",
    "Pasta": "Pasta",
    "Pizza": "Pizza",
    "MainDishes": "MainDishes",
    "Hot Drinks": "HotDrinks",
    "Coffee": "Coffee",
    "Milkshake": "Milkshake",
    "Iced Coffee": "IcedCoffee",
    "Frappuccino": "Frappuccino",
    "fresh Juice": "freshJuice",
    "Smootheis": "Smootheis",
    "Yoghurt": "Yoghurt",
    "Cocktils": "cocbreckFast",
    "Mojito": "Mojito",
    "Desserts": "Desserts",
    "softDrinks": "softDrinks"
};


function hideAllSections() {
    Object.values(allSections).forEach(id => {
        let sec = document.getElementById(id);
        if (sec) sec.style.display = "none";
    });
}

// **إظهار قسم الفطور عند تحميل الصفحة**
document.addEventListener("DOMContentLoaded", function() {
    hideAllSections(); // إخفاء كل الأقسام
    let breakfastSec = document.getElementById("Breakfast");
    if (breakfastSec) breakfastSec.style.display = "block"; // إظهار الفطور فقط

    // تحديد رابط "الفطور" ليكون نشطًا
    allLinks.forEach(link => {
        if (link.innerHTML === "Breakfast") {
            link.style.backgroundColor = "#2C3E50";
            link.style.color = "white";
        } else {
            link.style.backgroundColor = "";
            link.style.color = "";
        }
    });
});

// **إضافة الحدث لكل رابط في القائمة**
allLinks.forEach(link => {
    link.addEventListener("click", function() {
        let sectionId = allSections[link.innerHTML]; // الحصول على معرف القسم من الكائن
        
        if (sectionId) {
            hideAllSections(); // إخفاء جميع الأقسام

            // عرض القسم الذي تم النقر عليه
            let section = document.getElementById(sectionId);
            if (section) {
                section.style.display = "block";
            }

            // إعادة تعيين ألوان جميع الروابط
            allLinks.forEach(l => {
                l.style.backgroundColor = "";
                l.style.color = "";
            });

            // تغيير لون الرابط النشط
            link.style.backgroundColor = "#2C3E50";
            link.style.color = "white";
        }
    });
});



let navbarunderlineactive= document.querySelector(".navbarunderlineactive");
let peproduct_stockdetails= document.querySelector(".peproduct_stockdetails");
let peproduct_mfdetails=document.querySelector(".peproduct_mfdetails");
let peproduct_loandetails=document.querySelector(".peproduct_loandetails");
let peproduct_futuredetails=document.querySelector(".peproduct_futuredetails");



peproduct_stockdetails.addEventListener("click",()=>{
    navbarunderlineactive.style.width="200px";
    navbarunderlineactive.style.transform="translate(-1025px,60px)";
    document.querySelector(".stockactive").classList.add(".active1");

})

peproduct_mfdetails.addEventListener("click",()=>{
    navbarunderlineactive.style.width="200px";
    navbarunderlineactive.style.transform="translate(-825px,60px)";
    document.querySelector(".mfactive").classList.add(".active2");
})

peproduct_futuredetails.addEventListener("click",()=>{
    navbarunderlineactive.style.width="200px";
    navbarunderlineactive.style.transform="translate(-575px,60px)";
    document.querySelector(".futureactive").classList.add(".active3");

})

peproduct_loandetails.addEventListener("click",()=>{
    navbarunderlineactive.style.width="200px";
    navbarunderlineactive.style.transform="translate(-275px,60px)";
    document.querySelector(".loanactive").classList.add(".active4");

})
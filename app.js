const Veg=document.querySelector("#veg")
const Frt=document.querySelector("#frt")
const VagOpt=document.querySelector("#vagOpt")
const FruitOpt=document.querySelector("#fruitOpt") 
const Listbtn1=document.querySelector("#listbtn1") 
const Listbtn2=document.querySelector("#listbtn2")  
const Msg1=document.querySelector("#msg1")  
const Msg2=document.querySelector("#msg2") 

Veg.addEventListener("click",()=>{
    VagOpt.style.display="block"
    FruitOpt.style.display="none"
    Msg2.style.display="none";

})

Frt.addEventListener("click",()=>{
    FruitOpt.style.display="block"
    VagOpt.style.display="none"
    Msg1.style.display="none"

})

Listbtn1.addEventListener("click",()=>{
    Msg1.style.display="block"
    VagOpt.style.display="none";
    FruitOpt.style.display="none";

})

Listbtn2.addEventListener("click",()=>{
    Msg2.style.display="block";
    FruitOpt.style.display="none"
    VagOpt.style.display="none";
})
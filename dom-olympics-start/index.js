//Bronze
const header= document.getElementById("header");
header.textContent="Javascript Made this";
header.style.fontWeight="bold";
header.style.textAlign="center";

const namecontainer=document.createElement("div");
namecontainer.style.marginTop="40px";
header.append(namecontainer);

const nameuser= document.createElement("span");
nameuser.textContent="Prasanna Gurung "
nameuser.style.color="blue"
namecontainer.appendChild(nameuser);
const belowheader=document.createElement("h3");
belowheader.textContent="Wrote the Javascript";
belowheader.style.display="inline";
namecontainer.appendChild(belowheader);

//Silver
const message=document.querySelectorAll(".left");

let word="Hello";
for(let i=0;i < message.length;i++)
{
    console.log(message[i].textContent=word);
    word="nice to meet you too";
}

const message1=document.querySelectorAll(".right");

let word1="Hi, Nice to meet you";
for(let i=0;i < message1.length;i++)
{
    console.log(message1[i].textContent=word1);
    word1="so great to meet you";
}

const clear=document.querySelector("#clear-button");
clear.addEventListener("click", function(){
const messages= document.querySelectorAll(".message");
for(let i=0;i<messages.length;i++){
    messages[i].textContent="";
}
});

//Gold

const left=document.getElementsByClassName("left")
const right=document.getElementsByClassName("right")
const select= document.getElementById("theme-drop-down")
console.log(left)
console.log(right)
select.addEventListener("change",(e)=>{
   console.log (e.target.value)
   if(e.target.value==="theme-one"){
    for(let i=0;i<left.length;i++){
        left[i].style.backgroundColor="blue"
    }

    for(let i=0;i<right.length;i++){
        right[i].style.backgroundColor="brown"
    }

   }else{
for(let i=0;i<left.length;i++){
    left[i].style.backgroundColor="red"
   }

   for(let i=0;i<right.length;i++){
    right[i].style.backgroundColor="black"
}

   
}




})
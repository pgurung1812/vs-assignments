const header= document.getElementById("header");
header.textContent="Javascript Made this";
header.style.fontWeight="bold";
header.style.textAlign="center";

const namecontainer=document.createElement("div");
namecontainer.style.marginTop="40px";
header.append(namecontainer);

const nameuser= document.createElement("span");
nameuser.textContent="Prasanna Gurung "
namecontainer.appendChild(nameuser);
const belowheader=document.createElement("h3");
belowheader.textContent="Wrote the Javascript";
belowheader.style.display="inline";
namecontainer.appendChild(belowheader);


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
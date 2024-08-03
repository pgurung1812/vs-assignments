
const itemlist=document.getElementById("list");
const form=document["addItem"]
form.addEventListener("submit", (event)=>{
 event.preventDefault();
const listitem=document.createElement("li")
const  item= document.createElement("div")
item.textContent=form.title.value
const editbtn=document.createElement("button")
editbtn.textContent="edit"
const xbtn=document.createElement("button")
xbtn.textContent="X"
listitem.appendChild(item)
listitem.appendChild(editbtn)
listitem.appendChild(xbtn)
itemlist.append(listitem)
form.title.value=""

xbtn.addEventListener("click",(e)=>{
    let childnode=e.target.parentNode
    childnode.parentNode.removeChild(childnode)

})

})
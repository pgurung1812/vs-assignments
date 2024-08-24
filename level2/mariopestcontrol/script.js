
const form=document.getElementById("pest-control")
form.addEventListener("submit", function(e){
    e.preventDefault();
    let bug1=document.getElementById("bug1").value *5
    let bug2=document.getElementById("bug2").value *7
    let bug3=document.getElementById("bug3").value *11
    let total=document.getElementById("total")
    total.value=Number(bug1)+Number(bug2)+Number(bug3)
})


const form=document.getElementById("pest-control")
let count=0;
// let stopcount=false;
form.addEventListener("submit", function(e){
    e.preventDefault();
    let bug1=document.getElementById("bug1").value *5
    let bug2=document.getElementById("bug2").value *7
    let bug3=document.getElementById("bug3").value *11
    let total=document.getElementById("total")
    total.value=Number(bug1)+Number(bug2)+Number(bug3)

    // let display=document.getElementById("count")
    // display.textContent=count
})
//     localStorage.setItem("count",count)
//     setTimeout(() => {
//         console.log("hello")
//         console.log(count)
//         stopcount=true
        
//     }, 10000);
//     if(!stopcount){
//         count++;
//     }
// })
// let displaytimer=document.getElementById("display-timer")

// function getTime(){
//     var now = new Date();
//     var sec= now.getSeconds();
//     if(sec < 10){
//         sec = `0${sec}`;
//     }

//     displaytimer.textContent = `:${sec}`;
// }

// getTime()
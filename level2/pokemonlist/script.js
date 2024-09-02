
const btn=document.getElementById("pokemon")
btn.addEventListener("click",function(){

    axios.get('https://api.vschool.io/pokemon').then(response =>{
        console.log(response.data.objects[0].pokemon)
        const arr=response.data.objects[0].pokemon
        for(let i=0;i<arr.length;i++)
        {
            const h3=document.createElement("h3")
            h3.textContent=arr[i].name
            document.body.appendChild(h3)
        }
        
    
    }).catch((error)=>{
    console.log(error)
    })
})
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
let count=0;
for( let i=0;i < officeItems.length;i++)
{
 if(officeItems[i]==="computer"){
    count++;
 }
}
console.log(count)

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
for( let i=0;i<peopleWhoWantToSeeMadMaxFuryRoad.length;i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age>=18){
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender==="male")
            {
              console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is old enough."+ "HE's good to see Mad Max Fury Road" )
              }
    
        else
          {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is old enough."+ "SHE's good to see Mad Max Fury Road" )
           }
        }
    else{

        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender==="male")
            {
              console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is not old enough to see Mad Max Fury Rod, don't let HIM in")
              }
    
        else
          {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is not old enough to see Mad Max Fury Rod, don't let her in" )
           }
        }
      }
let v=  [2, 5, 435, 4, 3] // "The light is on"
let b=  [1, 1, 1, 1, 3]   // "The light is on"
let c=   [9, 3, 4, 2]      // "The light is off"

let sum=0
for(let i=0;i< v.length;i++)
{
    sum=sum+ v[i]
}
if(sum%2===0){
    console.log("The light is off")
}
else{
    console.log("The light is on")
}
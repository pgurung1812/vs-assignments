
let str= "Hello World"

// function capitalizAndLowercase(str){
//     let str1=str.toUpperCase()
//     let str2=str.toLowerCase()
//     console.log(str1.concat(str2))
// }

// capitalizAndLowercase(str)

// function findMiddleIndex(str){
//     console.log(Math.floor(str.length/2))
// }

// findMiddleIndex(str)

// function returnFirstHalf(str)
// // {
// //  console.log(str.slice(0,2))
// // }
// // returnFirstHalf("hello")

// function capitalizAndLowercase(str){
//     let len=str.length%2
//     let firstHalf
//     let secondHalf
//     let newword
//     if (len!==0){
//         len=Math.floor(str.length/2)
//      firstHalf= str.slice(0,len)
//      capitalizeFirstHalf=firstHalf.toUpperCase()
//      secondHalf=str.slice(len)
//      lowerSecondHalf=secondHalf.toLowerCase()
//       newword=capitalizeFirstHalf.concat(lowerSecondHalf)
//       console.log(newword)
//     }
//     else{
//         len=Math.floor(str.length/2)
//         firstHalf= str.slice(0,len)
//         capitalizeFirstHalf=firstHalf.toUpperCase()
//         secondHalf=str.slice(len)
//         lowerSecondHalf=secondHalf.toLowerCase()
//          newword=capitalizeFirstHalf.concat(lowerSecondHalf)
//          console.log(newword)

//     }
// }
// capitalizAndLowercase("Hello world")
function capitalize(str){
   let arr=   str.split(" ")
   let arr3=[]
   for( let i=0;i <arr.length;i++){
       let firstchar=arr[i].slice(0,1).toUpperCase()
       console.log(firstchar)
        let arr4= arr[i].split("")
        console.log(arr4)
          arr4=arr4.splice(0,1,firstchar).join("")
        console.log(arr4)
        
   }
 
}
capitalize("hey friends! practice practice practice!")
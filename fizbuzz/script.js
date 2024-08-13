function calculate(){


var word=""
for(let i=1; i<=100;i++){
  
     if( i%3===0 && i%5===0){
       word=word+ "FizzBuzz"
       continue
    }
    else if(i%3===0){
        word= word+ "Fizz";
       
    }
    else if(i%5===0){
        word= word+ "Buzz";
       
    }
    else
    {
     word= word+ i;
    }
}
return word;
}

let count={
    "Fizz": 0,
    "Buzz":0,
    "FizzBuzz":0
}

let word= calculate();
let arr=word.split("")
let word1=""
let arr1=[]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

for( let i=0;i < arr.length;i++)
{
  
    arr[i]=arr[i]-0
    console.log(typeof (arr[i]))
    if(typeof (arr[i])==="NaN"){
        word1=word1+ arr[i]
        
    }
    else{
      if(word1!==null){
       arr1.push(word1)
       word1=""
      }
      
    }

}
for (let i=0;i<arr1.length;i++){
    console.log(arr1[i])
}

for(let i=0; i< arr1.length;i++){
    if(arr1[i]==="FizzBuzz"){
        count.FizzBuzz++
    }
    else if( arr1[i]==="Fizz"){
        count.Fizz++
    }
    else{
        count.Buzz++
    }
}
console.log(count.Fizz);
console.log(count.Buzz);
console.log(count.FizzBuzz);
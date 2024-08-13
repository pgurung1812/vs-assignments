
function findLargest(arr){

    max=arr[0]
    for(let i=0; i< arr.length;i++){
         if(arr[i]>max){
            max=arr[i]
         }
    }
    console.log(max)
}

arr=[-13, 40, 3, 0, 19, 22]
// findLargest(arr)
let arr2=[]
function lettersWithStrings(str){

    for(let i=0;i< str.length;i++){

        for( let j=0; j< str[i].length;j++){
            if(str[i][j].includes("!")){
                arr2.push(str[i][j])
              }
        }
      
    }
    for(let i=0; i< arr2.length; i++){
        console.log(arr2[i])
    }
}

lettersWithStrings(str)
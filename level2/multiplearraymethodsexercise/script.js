var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
//Q1
// function sortedOfAge(arr){
//    return arr.reduce(function(finallist,people){
//       if(people.age>18){
//         finallist.push(people)
        
//       }
//       return finallist

//    },[])
//  }

// //Q2
// function sortedOfAge(arr){
//    return arr.sort(function(a,b){
//       if(a.lastName>b.lastName)
//       {
//          return 1
//       }
//       else if (a.lastName<b.lastName){
//         return -1
//       }
//       else{
//         return 0
//       }
//    })
// }
// let sortedbyage=sortedOfAge(peopleArray)

// function htmlstring(arr){
//     return arr.reduce(function(finalarray,people){
//         finalarray.push(`"<li>${people.firstName} ${people.lastName} is ${people.age}</li>"`)
//         return finalarray
//     },[])
// }

 
//  console.log(htmlstring(sortedbyage));
 

 /*
 Output:
 [
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>"
 ]
 */
 //Extra credit
//  let newpeople=[
//     {
//         firstName: "Prasan",
//         lastName: "Smith",
//         age: 29
//     },

//     {
//         firstName: "Sam",
//         lastName: "Smith",
//         age: 29
//     }

// ]

// function addpeople(arr){
// return arr.reduce(function(finalarray, people){
//  finalarray.push(people)
//  return finalarray
// }, [
//     {
//         firstName: "Sarah",
//         lastName: "Palin",
//         age: 47
//     },
//     {
//         firstName: "Frank",
//         lastName: "Zappa",
//         age: 12
//     },
//     {
//         firstName: "Rick",
//         lastName: "Sanchez",
//         age: 78
//     },
//     {
//         firstName: "Morty",
//         lastName: "Smith",
//         age: 29
//     },
//     {
//         firstName: "Kyle",
//         lastName: "Mooney",
//         age: 27
//     },
//     {
//         firstName: "Pasha",
//         lastName: "Datsyuk",
//         age: 13
//     },
//     {
//         firstName: "Lev",
//         lastName: "Tolstoy",
//         age: 82
//     }
// ]
// )
// }

// console.log(addpeople(newpeople))

//Q2
function filteroutpeople(arr){
    return arr.reduce(function(finalpeoplewithyora,people){
        if(people.lastName.charAt(people.lastName.length-1)==="y" || people.lastName.charAt(people.lastName.length-1)==="a"){
            finalpeoplewithyora.push(people)
        }
        return finalpeoplewithyora
    },[])
}

// console.log(filteroutpeople(peopleArray))
let filteredpeople=filteroutpeople(peopleArray)

function removepeople(arr){
    return arr.reduce(function(array,people){
     if(people.firstName!=="Kyle"){
        array.push(people)
     }
     
     return array
    },[])
}

console.log(removepeople(filteredpeople))
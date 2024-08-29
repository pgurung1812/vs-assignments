function sum(x, y){
    //check data types first and throw error
    if(typeof(x)==="number" & typeof(y)==="number"){
        return x + y;
       
    }else{
       throw "wrong type"
    }
      
     }

 try{
    console.log( sum("1",2))
 }
 catch(err){
   console.log(err)
 }




//   var user = {username: "sam", password: "123abc"};
// function login(username, password){
//   if(username==="sam" & password==="123abc")
//   {
//     console.log("login successfull")
//   }else{
//     throw "Wrong username or password"
//   }
// }

// try{
//    login("sa","123abc")
// }
// catch(err){
//     console.log("error")
// }

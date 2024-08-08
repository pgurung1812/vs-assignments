const readline = require("readline-sync");
// const name = readline.question("What is your name? ");

let foundKey = false

while(!foundKey){

 let key = readline.question("Please look for Key coded K or Q to give up:  ");
    if(key==="K")
    {
        foundKey= true
        console.log("Congratulations you have found the key.. you can exit through the door")
    }
    else if (key==="Q"){
        break
    }
    else{
        continue
    }
}

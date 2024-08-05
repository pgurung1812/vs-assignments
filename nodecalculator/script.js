const readLine=require("readline-sync")
let firstNum= readLine.question("Please enter your first number ")
let secondNum= readLine.question("Please enter your second number ")
let operation= readLine.question("Please enter the operations to perfrom: add, sub, mul, div: ")
solve(firstNum,secondNum,operation)

function solve(num1,num2,operation){
  switch(operation){

    case "add":
        console.log( "The sum is "+sum(num1,num2))
        break
          
    case "div":
        console.log( "The division is "+div(num1,num2))
        break    

    case "mul":
        console.log( "The sum is "+mul(num1,num2))
        break    
  }
}

function sum(num1,num2)
{
    return Number (num1)+Number(num2);
}
function mul(num1,num2)
{
    return num1 * num2
}

function div(num1,num2)
{
    return num1/num2
}
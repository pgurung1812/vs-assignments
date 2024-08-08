const employees=[]

function Employee(Name, Salary,JobTitle,Status="Full-time"){
    this.Name=Name
    this.Salary=Salary
    this.Status= Status 
    this.JobTitle=JobTitle
    this.printEmployeeForm = function(){
        console.log("Name: "+ this.Name+","+"Job Title: "+ this.JobTitle + ","+" Salary: $"+this.Salary+"/hour,"+ " Status: "+ this.Status)
    }

}

let employee1= new Employee("Sam",400 ,"mechanic")
let employee2= new Employee("Same",300,"mechanic","Full-time")
let employee3= new Employee("Samy",300,"mechanic","Part-time")

console.log(employee1.printEmployeeForm())
console.log(employee2.printEmployeeForm())
console.log(employee3.printEmployeeForm())
// function functionName(){
//     //write any code here
//     //either use return or console.log
// }
// functionName()

// function functionName(parameters){
//     //write any code here
//     //either use return or console.log
// }
// functionName(arguments)
// function add2numbers(){
// let x=5;
// let y=6;
// let sum= x+y;
// return sum;
// // console.log(sum);
// } 
// console.log(add2numbers())

// function add2numbers(x,y){

// let sum= x+y;
// return sum;
// } 
// console.log(add2numbers(20,8))
// console.log(add2numbers(4,8))
// console.log(add2numbers(2,8))
// // write a funtion to square any number
// function squarenumber(x){
//     return x*x;
// }
// console.log(squarenumber(3));
// console.log(squarenumber(7));
// console.log(squarenumber(9));

// // function calculateTotalcost(quantity, unitcost, transport){
// //     let Totalcost = quantity*unitcost + transport;

// //     return Totalcost;
// //     // let x = transport 
// //     // let y = unitcost
// //     // let x =0.05
// //     // let y =350000
// // }
// // console.log(Totalcost(2,350000,5000))

// function calculateTotalcost(quantity,unitprice){
//     const transportfee = 5000
//     let subTotalcost = quantity * unitprice
//     let total = subTotalcost + transportfee
//     return total
// }
// console.log(calculateTotalcost(2,350000));

// function printfullname(){
// let firstname = "Precious";
// let lastname = "Mary";
// let space = ""
// let fullname = firstname +space + lastname;
// return fullname

// }
// console.log(printfullname())


// let actions = [
// function greet(){
//     console.log("hello")
// },
// function calculateTotalcost(){
// console.log(1 + 1)
// }]

// actions[0]();
// actions[1]();
// console.log(actions)


let unitprice
let quantity
let address
let productname
let transportfee
let vatfee
let payment
let calculatesubtotal
let calculateunitprice


let order = {
    unitprice: 5000,
    quantity: 4,
    calculatesubtotal: function(){
        return this.unitprice * this.quantity
    }
}
order.unitprice
order.quantity
order.calculatesubtotal()
console.log(order.unitprice + order.quantity)

let car = {
    name: "Vitz",
    weight: 2000,
    start: function(){
        return "vroom"
    }
}
car.name
car.weight
car.start()
console.log(car.name + car.weight + car.start)


//coaching

let firstname = "pent"

let Ben ={
    firstname: "Benjamin",
    age: 20,
    weight: 49,
    walk: function(){
        return firstname + " is walking"
    }
}
console.log(Ben.walk())



let ken ={
    firstname: "keneth",
    age: 20,
    weight: 49,
    walk: function(){
        return this.firstname + " is walking"
    }
}
console.log(ken.walk())





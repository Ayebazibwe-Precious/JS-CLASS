//LOOPS
// for (let i = 0; i <=5;i++){
//     console.log(i)
// }

// for(i = 0; i <=5; i++){
// console.log(1)
// }


//for(initialisation; conditon; increment or decrement) -for loops
//initialise; if (condition) {code if true} -conditionals

//LOOPS- for,  for....of,  for...in,   do....while, forEach()

// const products =["chair", "table", "cupboard", "drawer"]
// for (i=0;i<products.length; i++){
//     console.log(products[i])
// }

//WHILE LOOP
//while (condition ie stock is availabel){ code if condition is true; increment/decrement}

// let stock = 20
// while (stock > 0) {
//     console.log(`selling item.....stock left: ${stock}`);
//     stock--;
// }

//DO...WHILE
// let order;
// let totalstock = 10000
// do {
//     order = prompt(`Enter order(available stock is ${totalstock}):`)
// }
// while(order < totalstock);
//  {
//     alert(`Your order has been recieved`);
//     stock--;
// }

// let payment;
// let totalDue = 10000
// do {
//     payment = Number(prompt(`Enter payment(total UGX is ${totalDue}):`));
// }
// while(payment < totalDue);
//     alert(`Your payment has been recieved`);

//do {code to be executed atleast once before iteration}
//while (condition)

//for loop      fixed repetitions
// const products =["chair", "table", "cupboard", "drawer"];
// for (i = 0; i < products.length; i++){
//     console.log(products[i])
// }

//while loop    repeats until the condition changes
let stock = 20
while (stock > 0) {
    console.log(`selling item.....stock left: ${stock}`);
    stock--;
}

//do..while loop      must run at least once
let i = 0
do {
    console.log(i)
    i++;
}
while (i <= 5);

// a button that runs a while loop, a for loop and a do-while loop

//for..of
const itemSold =["chair", "tablet", "drawer"];
for (const item of  itemSold){
    console.log(`Sold ${item}`)
}

const sale = {
    customer:"Precie",
    product: "chair",
    quantity: 10,
    price:300000,
}

for( const key in sale){
    console.log(`${key}:${sale[key]}`)
}















































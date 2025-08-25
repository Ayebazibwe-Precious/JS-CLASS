//TYPES OF CONTROL FLOW STATEMENTS
/*
1.CONDITIONAL STATEMENTS
DECISION MAKING STATEMENTS
If statement
If else statement
If-else-if-else chain
Nested if statement
Switch statement
Ternary operator
If statements with logical operators in conditions
Nullish operator
*/

// let age =18 
// if (age >= 18){
// alert("can vote")
// } else{
//     console("can't vote")
// }
                 
// let age = prompt("please enter your age: ")
// age = Number(age);

// if (isNaN(age) ||age< 0){
// window.alert("please enter a valid age")
// } else{
//     if(age>= 18){
//     window.alert("You are an adult, you can vote")
// }else{
//     window.alert("you can't")
// }
// }

// //switch statement
// switch(expression){
//     case value1:
//         //code when expression  === value1
//         break
//         case value2:
//             //write code when expression  === value2
//         break
//         case value3:
//             //write code when expression  === value3
//         default:
//             //write code non of the code matches
//}

// let paymentType = prompt ("enter payment method:( Cash or Mobilemoney or Bank)")
// switch(paymentType){
//     case "Cash":
//         alert("process cash payment at the counter")
//         break;
//         case "Mobilemoney":
//             alert("confirm PIN")
//         break;
//         case "Bank":
//             alert("confirm before proceeding")
//         break;
//         default:
//             alert("unknown method, check again")
// }

// //if wood store in ware house
// //if furniture display in showroom
// let product = prompt ("enter product type:(Wood or furniture)")
// switch(product){
//     case "Wood":
//         alert("store in a ware house")
//         break;
//         case "furniture":
//             alert("store in showroom")
//         break;
//         default:
//             alert("unknown product, check again")
// }

// /*check discount
// regular no
// wholesale 15
// VIP 10
// */


// let number = prompt ("enter number:")
// switch(true){
//     case number > 0:
//         alert("number is positive")
//         break;
//         case number == 0:
//             alert("number is zero")
//         break;
//         case number < 0:
//             alert("please enter number")
//         break;
//         default:
//             alert("unknown number, check again")
// }

//HOW CAN WE USE A SWITCH TO CONTROL STOCK?
let stockCount =   Number(prompt ("enter number of products available:"))
switch(true){
    case stockCount > 10:
        alert("this product is in plenty");
        break;
        case stockCount >0 && stockCount <= 10:
            alert("low stock! Reorder");
        break;
        case stockCount === 0:
            alert("Low on stock");
        break;
        default:
            alert("Invalid product, check again");
}

//TERNARY OPERATOR.
// condition 
// ?valueIfTrue
// :valueIfFalse;

let stock = 5;
let message = stock>0
?"In stock"
: "out of stock"
console.log(message)















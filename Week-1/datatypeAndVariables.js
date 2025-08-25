/*
Primitive data types.(hold single values ,Can be changed directly)
1.Text/Strings
2.numbers-intergers
        big integer
        decimals
3.Boolean
     true/false
4.Undefined
5.Null  
   x = null
6.Symbol  
     uniqueness 
*/
let productname = "timber"//strings are put quotes
let productcost=3500
let transportisneeded = true
let tablecolor
let discount = null(notapplicable)
console.log(productcost*3)
/*
Non-primitive data types(immutable...can't be changed directly)
1. Array(ordered lists begin from 0,1,2,....indexing)
    list of items
    [numers]
    [1,2,4,0]
    [string]
    ["sofa","table"]
    let productlist-["sofa","table"]
2.Object
    in js everything is an object
    product description{
    name:"sofa"
    price:"200"
    color:"black"
    }
3.date
4.function
*/
let productlist = ["sofa","table",]
console.log(productlist)

let diningtableobject={
productname: "dining table",
 quantity:2,
 price: 350,
 totalcost: quantity*price
}
console.log(totalcost)
let paymenttype = "cash"
const VAT = 0.05(cannotbechanged.itisaconstant)
const PIE =3.14
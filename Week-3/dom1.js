console.log(document.title)
console.log("my file is connected")
console.log(document.body);
console.log(document.forms);
console.log(document.links);


let heading = document.getElementById("heading")
console.log(heading)
heading.textContent = "Welcome to Mayondo"
heading.style.color ="green"


let header= document.getElementById("first")
header.innerHTML = "<h2>Quality furniture products</h2>"




//MORE DOM METHODS
//document.getElementById() //selects one by one

 let subHeadings = document.getElementsByTagName("h2")
 console.log(subHeadings)

 for(let i = 0; i < subHeadings.length ; i++){
    console.log(subHeadings[i])
 }

let paragraph = document.getElementsByClassName("about")
console.log(paragraph.length)

//  let thirdTitle = document.querySelector("h3") //selects the first available element //this works exactly like CSS
// let thirdTitle = document.querySelector("#third-title") //selects first available element eith the class nameof third-title
// let thirdTitle = document.querySelector(".thirdTitle")

let headingsArray = document.querySelectorAll("h2") //this captures everything
headingsArray[1].className = "container"
headingsArray[1].id = "sub_heading";

headingsArray[1].setAttribute("class","container") 
headingsArray[1].setAttribute("id","sub_heading") 
headingsArray[1].textContent = "login"
headingsArray[1].style.backgroundColor = "blue"

document.createElement()






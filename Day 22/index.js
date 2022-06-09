
let count = 0


let saveBtn= document.getElementById("save-btn")
let countEl = document.getElementById("count-el")
let welcome_el = document.getElementById("welcome_El")
let previous = document.getElementById("previous_button")





let nameAl = "Moussa"
let greeting = "Welcome"

welcome_el.innerText= greeting + " " + nameAl 


welcome_el.innerText += "👋"


function increment(){
    count +=1
    countEl.innerText=count
   
}

function save(){
    let SaveBtn = count + "-"
    previous.textContent += SaveBtn
    countEl.textContent = 0
    count=0

}

// let loops = document.getElementById("looops")

// let cards = 
// ["Hello",  "My Name", "Is", "Moussa"
//    ]


// for (let number= 0; number < cards.length; number++){
//     loops.textContent +=  cards[number] + " "
   
//     console.log(cards[number])
// }
let homescorebtn1 = document.getElementById("home-score-btn1")
let homescorebtn = document.getElementById("home-score")
let homescorebtn2 = document.getElementById("home-score-btn2")
let homescorebtn3 = document.getElementById("home-score-btn3")

let guestscorebtn = document.getElementById("guest-score")
let guestscorebtn1 = document.getElementById("guest-score-btn1")
let guestscorebtn2 = document.getElementById("guest-score-btn2")
let guestscorebtn3 = document.getElementById("guest-score-btn3")

let count=0
let count1=0

function incrementH1() {
    count += 1
    homescorebtn.textContent =count
}

function incrementH2() {
    count += 2
    homescorebtn.textContent =count
}

function incrementH3() {
    count += 3
    homescorebtn.textContent =count
}

function incrementGH1() {
    count1 += 1
    guestscorebtn.textContent =count1
}

function incrementGH2() {
    count1 += 2
    guestscorebtn.textContent =count1
}

function incrementGH3() {
    count1 += 3
    guestscorebtn.textContent =count1
}
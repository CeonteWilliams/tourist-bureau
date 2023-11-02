"use strict"

const colors = ["read","brown","green","blue","red"]

let intitial = 0 
let step = 1     
let final = colors.length-1

let currentIndex = intitial //defining


while(currentIndex <= final){ //checking
    console.log(`Color number ${currentIndex} is ${colors[currentIndex]}!`) //100
    currentIndex +=step
} 

console.log("when does this console.log run???")
    // defining                //checking             //changing
for(let currentIndex = intitial;currentIndex <= final;currentIndex +=step) {}
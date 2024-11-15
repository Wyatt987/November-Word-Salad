let First = prompt('Adjective')
let Second = prompt('noun')
let Third = prompt('Adjective')
let Fourth = prompt('tool')
let Fifth = prompt('adverb')
let Sixth = prompt('object')
let Seventh = prompt('animal')
let Eighth = prompt('verb ending in -ing')
let Ninth = prompt('Adjective')
let Tenth = prompt('(button or lever)')
let Eleventh = prompt('past-tense verb')
let Twelth = prompt('plural noun')
let Thirteenth = prompt('silly made-up word)')
let Fourteenth = prompt('person')
let Fifteenth = prompt('adjective')
let Sixteenth = prompt('organization')
let Sevententh = prompt('noun')
let Eightenth = prompt('verb ending in -ing')
let Ninetenth = prompt('emotion')


let somethingToDoAtTheBeachInPastTense = prompt('Something To Do at the Beach (in past tense)?')


console.log(First)
console.log(Second)
console.log(Third)
console.log(Fourth)
console.log(Fifth)
console.log(Sixth)
console.log(Seventh)
console.log(Eighth)
console.log(Ninth)
console.log(Tenth)
console.log(Eleventh)
console.log(Twelth)
console.log(Thirteenth)
console.log(Fourteenth)
console.log(Fifteenth)
console.log(Sixteenth)
console.log(Sevententh)
console.log(Eightenth)
console.log(Ninetenth)

let myStory = `Last week, I decided to build a ${First} invention in my garage. First, I grabbed a ${Second} and a ${Third} ${Fourth}. I worked ${Fifth} for hours, attaching a ${Sixth} to a ${Seventh} using a ${Eighth}. Suddenly, it started ${Ninth}! To test it, I pressed the ${Tenth} ${Eleventh}, and it ${Twelth} across the room, landing in a pile of ${Thirteenth}. I called it the ${Fourteenth} and decided to show it to my ${Fifteenth}. They thought it was so ${Sixteenth} that they called the ${Sevententh} to share my invention with the world. Now, everyone uses my ${Sevententh} for ${Eightenth}, and I couldn’t be more ${Ninetenth}!`

console.log(myStory)

document.getElementById('story').innerHTML = myStory;
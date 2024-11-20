let First = prompt('bone')
let Second = prompt('place')
let Third = prompt('object')
let Fourth = prompt('drug')
let Fifth = prompt('body part')
let Sixth = prompt('adverb (capitalize first letter)')
let Seventh = prompt('animal')
let Eighth = prompt('object')
let Ninth = prompt('same animal')
let Tenth = prompt('body part')
let Eleventh = prompt('same animal')
let Twelth = prompt('object')
let Thirteenth = prompt('different object')
let Fourteenth = prompt('something to lay on')
let Fifteenth = prompt('adjective')


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


let myStory = `Last week, it was just like any other day, when BAM! I broke my ${First}! I got rushed to ${Second} to get treated asap. Before they did anything, the numbed my body using a ${Third} and injected me with ${Fourth}. Once it was injected into me, everything started spinning, my ${Fifth} started aching extremely bad. ${Sixth}, I passed out. When I woke up, I was in a strange room filled with ${Seventh}s. A nurse handed me a ${Eighth} and told me to throw it at the ${Ninth}s! I was so confused! Just as I was about to refuse, my ${Tenth} did it on its own! A doctor bursts in and shouted, "Don't let the ${Eleventh}s escape!" Suddenly, everything turned into ${Twelth}s and ${Thirteenth}, and I realized it was all a dream. I opened my eyes, and realized I was laying in ${Fourteenth}, and that the surgery went ${Fifteenth}.`;
 

console.log(myStory)

document.getElementById('story').innerHTML = myStory;
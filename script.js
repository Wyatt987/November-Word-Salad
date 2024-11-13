let bestfriend = prompt('Name')
let wayOfTravelAcrossSea = prompt('A Way to Travel Across Sea?')
let numberOfHours = prompt('Number of Hours?')
let placeToStay = prompt('A Place to Stay?')
let somethingToDoAtTheBeachInPastTense = prompt('Something To Do at the Beach (in past tense)?')


console.log(userName)
console.log(userAge)

let myStory = `Me and my bestfriend ${bestfriend} went on a trip to the Bahammas. The ${wayOfTravelAcrossSea} ride was so long! In total I think it took ${numberOfHours} HOURS! Once we finally got there, we checked into our ${placeToStay}. I went straight to the beach and ${somethingToDoAtTheBeachInPastTense} for the rest of the day.`
console.log(myStory)

document.getElementById('story').innerHTML = myStory;
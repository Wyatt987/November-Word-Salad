const scrollBtn = document.getElementById('scrollBtn');
const continueBtn = document.getElementById('continueBtn');
const storySection = document.getElementById('story-section');
const storySection2 = document.getElementById('story-section2');

// Story Part //
let First = prompt('bone');
let Second = prompt('place');
let Third = prompt('object');
let Fourth = prompt('drug');
let Fifth = prompt('body part');
let Sixth = prompt('adverb (capitalize first letter)');
let Seventh = prompt('animal');
let Eighth = prompt('object');
let Ninth = prompt('same animal');
let Tenth = prompt('body part');
let Eleventh = prompt('same animal');
let Twelth = prompt('object');
let Thirteenth = prompt('different object');
let Fourteenth = prompt('something to lay on');
let Fifteenth = prompt('adjective');

let myStoryPart1 = `Last week, it was just like any other day, when BAM! I broke my ${First}! I got rushed to ${Second} to get treated asap. Before they did anything, they numbed my body using a ${Third} and injected me with ${Fourth}. Once it was injected into me, everything started spinning, my ${Fifth} started aching extremely bad. ${Sixth}, I passed out.`;
document.getElementById('story').innerHTML = myStoryPart1;

// Story Part 2 //
let myStoryPart2 = `When I woke up, I was in a strange room filled with ${Seventh}s. A nurse handed me a ${Eighth} and told me to throw it at the ${Ninth}s! I was so confused! Just as I was about to refuse, my ${Tenth} did it on its own! A doctor bursts in and shouted, "Don't let the ${Eleventh}s escape!" Suddenly, everything turned into ${Twelth}s and ${Thirteenth}, and I realized it was all a dream. I opened my eyes and realized I was laying in ${Fourteenth}, and that the surgery went ${Fifteenth}.`;
document.getElementById('storyPart2').innerHTML = myStoryPart2;

// Scroll to Part 1 //
scrollBtn.addEventListener('click', () => {
    storySection.classList.remove('d-none');
    continueBtn.classList.remove('d-none');
    storySection.scrollIntoView({ behavior: 'smooth' });
});

// Scroll to Part 2 //
continueBtn.addEventListener('click', () => {
    storySection2.classList.remove('d-none');
    storySection2.scrollIntoView({ behavior: 'smooth' });
});

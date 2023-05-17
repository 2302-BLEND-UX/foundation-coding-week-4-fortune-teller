// declare elements
const beginButton = document.getElementById("begin");
const reveal = document.getElementById("reveal");
const nameInput = document.getElementById("name-input");
const colourSelect = document.getElementById("colour-select");
const fortune = document.getElementById("fortune");
// Get all the radio buttons
const radioButtons = document.getElementsByName('season-picker');

// declare swiper
var swiper = new Swiper(".mySwiper", {
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});

// declare our data
// fortunes array
const fortunes = [
    "A pleasant surprise is waiting for you. Embrace it with open arms.",
    "Your hard work will pay off in unexpected and remarkable ways.",
    "Love is just around the corner, waiting patiently for you to find it.",
    "Success is within your reach if you believe in yourself and persist.",
    "Good things come to those who wait, but even better things come to those who take action and pursue their dreams.",
    "Opportunities will come knocking at your door; be prepared to seize them and make the most of them.",
    "A journey of a thousand miles begins with a single step, and every step you take brings you closer to your goals.",
    "You will find happiness in the little things, so take the time to appreciate and savor the simple joys of life.",
    "Your creativity will lead you to great achievements that will inspire and touch the lives of many.",
    "Trust your instincts; they are a compass guiding you towards the path that is meant for you.",
    "The best is yet to come, so keep your hopes high and your spirits higher.",
    "Be patient, good things take time, but the wait will be worth it in the end.",
    "Today is your lucky day, so seize the opportunities that come your way and make the most of them.",
    "Believe in yourself and all that you are capable of; you have immense potential waiting to be unleashed.",
    "Your dreams will become a reality if you stay committed, work hard, and never give up on them.",
    "Embrace change; it will bring you new opportunities for growth, learning, and self-discovery.",
    "Fortune favors the brave, so be bold and take calculated risks in pursuit of your goals.",
    "Hard work and dedication will bring you success that is not only fulfilling but also long-lasting.",
    "Stay positive, good things will happen; your optimistic attitude will attract positive outcomes into your life.",
    "You are destined for greatness; believe in yourself, stay focused, and let your light shine brightly."
];

// validation checker
let validationPassed = false;
// checked season variable
let checkedSeason = null;

// user functionality
beginButton.addEventListener("click", function () {
    swiper.slideNext();
})

// validate function
function checkIfInformationValid() {

    // check the radio buttons
    // Initialize a variable to track if any radio button is checked
    let isAnyChecked = false;
    // Iterate through the radio buttons
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            checkedSeason = radioButtons[i].value;
            isAnyChecked = true;
            break; // Exit the loop if any radio button is checked
        }
    }

    // to start, check if their info is not valid
    if (nameInput.value === "" || colourSelect.value === "" || !isAnyChecked) {
        return;
    }
    validationPassed = true;
}

// generate fortune function
// this creates the fortune, based on the user details

function generateFortune(details) {
    // generate random index
    let randomIndex = Math.floor(Math.random() * fortunes.length);

    // update the fortune slide
    fortune.innerHTML = `
    <p>${details.name}, I bring you my prediction.</p>
    <p>${fortunes[randomIndex]}</p>
    `
}


// user has clicked the reveal fortune button
reveal.addEventListener("click", function () {
    event.preventDefault();
    // run validation
    checkIfInformationValid();
    // if (variableName) is the same as checking if it's true
    if (validationPassed) {
        swiper.slideNext();
        // put all the user details into an object
        let userDetails = {
            name: nameInput.value,
            colour: colourSelect.value,
            season: checkedSeason
        }
        generateFortune(userDetails);
    } else {
        alert("Enter in your details")
    }

})
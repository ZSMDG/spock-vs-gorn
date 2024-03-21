// Wait for the DOM to finish loading before running game
// Get the button elements and add event listeners to them
// code from "love maths"

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                checkWinner();
            }
        })
    }
})

function playGame () {}

function checkWinner () {}

function updateScore () {}
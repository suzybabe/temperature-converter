// Temperature conversion program

const textbox = document.getElementById("textbox");
const celbtn = document.getElementById("celbtn");
const farbtn = document.getElementById("farbtn");
const result = document.getElementById("result");

let temp;

// create a function for convert

function convert() {

    if (celbtn.checked) {

        // Fahrenheit to Celsius
        temp = Number(textbox.value);

        temp = (temp - 32) * (5 / 9);

        result.textContent = temp.toFixed(1) + "°C";
    }

    else if (farbtn.checked) {

        // Celsius to Fahrenheit
        temp = Number(textbox.value);

        temp = temp * 9 / 5 + 32;

        result.textContent = temp.toFixed(1) + "°F";
    }

    else {

        result.textContent = "Select a unit";
    }
}
let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

// Generate random number
let number = Math.floor(Math.random() * 100);
console.log(number)

btn.addEventListener('click', function() {
    let input = document.getElementById('userInput').value;
    if (isNaN(input) || input == '' || input == ' ' || input > 100 || input < 1) {
        //text = "Input not valid, enter a number";
        //document.getElementById('inputValidation').innerHTML = text
        alert('Input not valid. Try again')
    } else if (input == number) {
        output.innerHTML = `It's perfect! You guessed right, your number was ${number}`
        output.style.color ="purple"
    } else if  (input < number) {
        output.innerHTML =`It's getting colder. Your number is too low. Try again`
        output.style.color ="blue"
    } else if (input > number) {
        output.innerHTML = `It's getting hotter. Your number is too high. Try again`
        output.style.color = 'red'
    }
})
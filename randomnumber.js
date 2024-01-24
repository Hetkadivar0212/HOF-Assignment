// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}

// Function to display countdown messages and generate a random number after a delay
function generateRandomNumberWithDelay(delayInSeconds) {
    // Display initial message
    console.log("Generating a random number after a delay of " + delayInSeconds + " seconds...");

    // Countdown and generate random number after the specified delay
    var countdown = delayInSeconds;
    var countdownInterval = setInterval(function () {
        if (countdown > 0) {
            console.log("Time remaining: " + countdown + " seconds...");
            countdown--;
        } else {
            clearInterval(countdownInterval);
            var randomNum = generateRandomNumber();
            console.log("Random number generated: " + randomNum);
        }
    }, 1000);
}

// Example usage with a delay of 3 seconds
var delayInSeconds = 3;
generateRandomNumberWithDelay(delayInSeconds);
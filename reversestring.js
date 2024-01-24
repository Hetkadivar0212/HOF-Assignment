// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Main program
function reverseAfterDelay(input) {
    // Display original string
    console.log("Original string: " + input);

    // Set a delay of 2 seconds using setTimeout
    setTimeout(function () {
        // Reverse the string after the delay
        var reversedString = reverseString(input);

        // Display reversed string
        console.log("Reversed string after 2 seconds: " + reversedString);
    }, 2000);
}

// Example
var input = "Hello, World!";
reverseAfterDelay(input);
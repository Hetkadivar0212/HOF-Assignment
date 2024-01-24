// Function to check if a given URL is valid
function isValidURL(url) {
    // Define the regular expression for valid URLs
    const urlRegex = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]+$/;

    // Test the URL against the regular expression
    if (urlRegex.test(url)) {
        console.log(`${url} is a valid URL.`);
    } else {
        console.log(`${url} is not a valid URL.`);
    }
}

// Example usage
isValidURL("http://www.example.com");    // Valid URL
isValidURL("https://example.org/page");   // Valid URL
isValidURL("ftp://invalid-url");          // Invalid URL
isValidURL("https://123");                // Invalid URL
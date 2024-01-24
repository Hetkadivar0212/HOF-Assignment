// Function to check if a given LinkedIn profile URL is valid
function isValidLinkedInURL(url) {
    // Define the regular expression for valid LinkedIn profile URLs
    const linkedInUrlRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    // Test the URL against the regular expression
    if (linkedInUrlRegex.test(url)) {
        console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
        console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
}

// Example usage
isValidLinkedInURL("https://www.linkedin.com/in/johndoe123");   // Valid LinkedIn URL
isValidLinkedInURL("https://www.linkedin.com/in/user_name");    // Valid LinkedIn URL
isValidLinkedInURL("https://www.linkedin.com/in/jane_doe");      // Valid LinkedIn URL
isValidLinkedInURL("https://www.linkedin.com/in/12345");         // Valid LinkedIn URL
isValidLinkedInURL("https://www.linkedin.com/in/invalid*user");  // Invalid LinkedIn URL
isValidLinkedInURL("https://www.linkedin.com/profile");          // Invalid LinkedIn URL
isValidLinkedInURL("http://www.linkedin.com/in/johndoe");        // Invalid LinkedIn URL
isValidLinkedInURL("https://www.linkedin.com/in/toolongusername1234567890123456789012"); // Invalid LinkedIn URL
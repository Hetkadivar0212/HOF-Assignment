// Function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to filter and transform books
function filterAndCapitalizeAuthors(books) {
    // Filter out books published before 2010
    const filteredBooks = books.filter(book => book.publicationYear >= 2010);

    // Create a new array with capitalized author names
    const booksWithCapitalizedAuthors = filteredBooks.map(book => {
        return {
            title: book.title,
            author: capitalizeFirstLetter(book.author),
            publicationYear: book.publicationYear
        };
    });

    return booksWithCapitalizedAuthors;
}

// Example usage
const books = [
    { title: "Book1", author: "author1", publicationYear: 2005 },
    { title: "Book2", author: "author2", publicationYear: 2012 },
    { title: "Book3", author: "author3", publicationYear: 2008 },
    { title: "Book4", author: "author4", publicationYear: 2015 }
];

const filteredAndCapitalizedBooks = filterAndCapitalizeAuthors(books);

// Display the results
console.log("Original books:", books);
console.log("Filtered and capitalized books:", filteredAndCapitalizedBooks);
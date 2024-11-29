document.addEventListener("DOMContentLoaded", () => {
    const bookList = document.getElementById("book-list");

    if (bookList) {
        const jsonFile = bookList.dataset.json;

        fetch(jsonFile)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to load JSON file");
                }
                return response.json();
            })
            .then(data => {
                displayBooks(data.books, bookList);
            })
            .catch(error => {
                console.error("Error loading book data:", error);
                bookList.innerHTML = "<p>Unable to load books at this time.</p>";
            });
    }
});

function displayBooks(books, container) {
    books.forEach(book => {
        const bookItem = document.createElement("li");
        bookItem.innerHTML = `
            <h3>${book.course}</h3>
            <p><strong>Title:</strong> ${book.title}</p>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><a href="${book.link}" target="_blank">Buy this book</a></p>
        `;
        container.appendChild(bookItem);
    });
}


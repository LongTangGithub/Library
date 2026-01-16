const library = [];

class Book {
    constructor(title, author, pages) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = false;
    }
}

function addBookToLibrary(title, author, pages) {
    const newBook = new Book(title, author, pages);
    library.push(newBook);
}

function displayBooks() {
    const libraryContainer = document.querySelector("#library-container");

    // Wiping the UI clean before redrawing
    libraryContainer.innerHTML = "";

    library.forEach((book) => {
        // Create a new DOM element (the "Card" )
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        // Attach the ID to the HTML (The "barcode")
        bookCard.dataset.bookId = book.id;

        // Set the content
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>By: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: ${book.isRead ? "Read" : "Not Read"}</p>
            <button class="remove-btn">Remove</button>
            <button class="toggle-btn">Change Status</button>
        `;

        libraryContainer.appendChild(bookCard);
    });
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295);
addBookToLibrary("1984", "George Orwell", 328);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180);

displayBooks();
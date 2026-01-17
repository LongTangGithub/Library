const library = [];

class Book {
    constructor(title, author, pages, isRead) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
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

const dialogModal = document.getElementById("book-dialog__modal");
const addNewBookBtn = document.getElementById("new-book-btn");
const closeBookModal = document.getElementById("close-button");
const bookForm = document.getElementById("book-form");

addNewBookBtn.addEventListener('click', () => {
    dialogModal.showModal();
});

closeBookModal.addEventListener('click', () => {
    dialogModal.close();
})

bookForm.addEventListener('submit', (event) => {
    // Stop page from refreshing
    event.preventDefault();

    const formTitle = document.getElementById("title").value;
    const formAuthor = document.getElementById("author").value;
    const formPages = document.getElementById("pages").value;
    const isRead = document.getElementById("isRead").checked;

    addBookToLibrary(formTitle, formAuthor, formPages, isRead)

    displayBooks();
    bookForm.reset();
    dialogModal.close();
});

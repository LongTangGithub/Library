import { Library } from "./modules/library";

const library = [];

class Book {
    constructor(title, author, pages, isRead) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    // Flip the status: if true, becomes false. If false, becomes true.
    toggleReadStatus() {
        this.isRead = !this.isRead;
    }
}

function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
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

        const removeBookBtn = bookCard.querySelector(".remove-btn")
        const toggleStatusBtn = bookCard.querySelector(".toggle-btn");

        removeBookBtn.addEventListener("click", () => {
            // Finding the index of the book in 'library' array
            const bookIndex = library.findIndex(item => item.id === book.id);
            library.splice(bookIndex, 1); // Removing the 1 item from the array

            // Rerender to show the book that it's gone
            displayBooks();
        });

        toggleStatusBtn.addEventListener("click", () => {
            // Tell the specific book object to flip its status
            book.toggleReadStatus();
            
            // Refresh the UI to show the new "Read" or "Not Read" text
            displayBooks();
        })

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

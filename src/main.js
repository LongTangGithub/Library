import { Library } from './modules/Library';
import { displayBooks } from './components/BookUI';

const container = document.getElementById("library-container");
displayBooks(container, Library.books);


/**
 * Memory Efficient: Only 1 event listener exists regardless of how many books are in the library
 * Dynamic: If a new book is added, it automatically works with this listener b/c the listener is on the parent, not the specific button.
 * Decoupled: main.js knows how BookUI and Library interact 
 */
container.addEventListener('click', (e) => {
    // Get the book ID from the closest card element
    const bookId = e.target.closest('.book-card').dataset.bookId;

    if ( e.target.classList.contains("remove-btn")) {
        Library.removeBook( bookId )
        displayBooks(container, Library.books)
    }

    if ( e.target.classList.contains("toggle-btn")) {
        const book = Library.getBook( bookId );
        book.toggleReadStatus();
        displayBooks(container, Library.books);
    }
})
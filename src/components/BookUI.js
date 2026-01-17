/**
 * The "Brick Maker" (Card Factory)
 * Create a function that takes a book object and returns a DOM element
 */
export function createBookCard(book) {
    const bookCard = document.createElement("div");
    bookCard.className = "book-card";

    bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p>By: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Status: ${book.isRead ? "Read" : "Not Read"}</p>
        <button class="remove-btn">Remove</button>
        <button class="toggle-btn">Change Status</button>
    `;
    return bookCard;
}

/**
 * The "Wall Builder" (Renderer)
 * Create a function that manages the container
 * 
 * @param {HTMLElement} container - The DOM element where books will go
 * @param {Array} books - The array of book objects to display
 */

export function displayBooks(container, books) {
    container.innerHTML = '';

    books.forEach(b => {
        const book = createBookCard( b );
        container.appendChild(book);
    });
}
// The Blueprint
class Book {
    constructor(title, author, pages, isRead) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    toggleReadStatus() {
        this.isRead = !this.isRead;
    }
}

// The Storage
export const Library = {
    books: [],

    addBook(title, author, pages ,isRead) {
        // Use the 'new' keyword to create an instance with methods
        const newBook = new Book(title, author, pages, isRead);
        this.books.push( newBook );
    },

    removeBook( id ) {
        this.books = this.books.filter(book => book.id !== id);
    },

    getBook( id ) {
        return this.books.find(book => book.id === id);
    },
}
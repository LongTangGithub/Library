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

function addBookToLibrary( title, author, pages ) {
    const newBook = new Book(title, author, pages );
    library.push( newBook );
}
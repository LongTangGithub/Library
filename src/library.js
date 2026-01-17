export const Library = {
    books: [],

    addBook(title, author, pages ,isRead) {
        const book = { 
            id: crypto.randomUUID(),
            title,
            author,
            pages,
            isRead
        };
        
        this.books.push( book );
    },

    removeBook( id ) {
        this.books = this.books.filter(book => book.id !== id);
    },
}
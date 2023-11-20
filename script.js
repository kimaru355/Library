const myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? 'read': 'not read yet';
    this.info = () => (this.title + ' by ' + this.author + ', ' + this.pages + ' pages. ' + this.read);
}
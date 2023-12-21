let inputBook = document.querySelector('#inputBook');
let inputTitle = document.querySelector('#inputTitle');
let inputAuthor = document.querySelector('#inputAuthor');
let inputPages = document.querySelector('#inputPages');
let inputRead = document.querySelector('#inputRead');
let submitBook = document.querySelector('#submitBook');
let listBooks = document.querySelector('#listBooks');
let library = [];

let createElement = (element) => {
    if (element = 'div') {
        return document.createElement(element);
    } else if (element = 'p') {
        return document.createElement(element);
    } else if (element = 'button') {
        return document.createElement(element);
    } else if (element = 'input') {
        return document.createElement(element);
    };
}

inputRead.addEventListener('click', () => {
    if (inputRead.classList.toggle('bg-red-300')) {
    inputRead.textContent = 'Unread';
    inputRead.value = false;
    } else {
        inputRead.textContent = 'Read';
        inputRead.value = true;
    }
});

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        if (read === true) {
            this.read = 'Read';
        } else {
            this.read = 'Unread';
        };
    }

    info () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

function addBook(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    library.push(book);
}

function displayLibrary() {
    // pass
}

submitBook.addEventListener('click', () => {
    addBook(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.value);
    displayLibrary();
});
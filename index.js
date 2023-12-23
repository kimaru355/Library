let inputBook = document.querySelector('#inputBook');
let inputTitle = document.querySelector('#inputTitle');
let inputAuthor = document.querySelector('#inputAuthor');
let inputPages = document.querySelector('#inputPages');
let inputRead = document.querySelector('#inputRead');
let submitBook = document.querySelector('#submitBook');
let listBooks = document.querySelector('#listBooks');
let library = [];

let createElement = (element) => {
    if (element === 'div') {
        return document.createElement(element);
    } else if (element === 'p') {
        return document.createElement(element);
    } else if (element === 'button') {
        return document.createElement(element);
    } else if (element === 'input') {
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
        if (read === 'true') {
            this.read = 'Read';
        } else {
            console.log(read);
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
    listBooks.textContent = '';
    for (let i = 0; i < library.length; i++) {
        let book = library[i];
        let div = createElement('div');
        let info = createElement('p');
        let deleteButton = createElement('button');
        let editButton = createElement('button');
        let controls = createElement('div');

        info.textContent = book.info();
        deleteButton.textContent = 'Delete';
        editButton.textContent = 'Edit';
        editButton.setAttribute('type', 'button');
        deleteButton.setAttribute('type', 'button');
        div.setAttribute('id', `book-${i}`);

        div.classList.add('flex', 'justify-between', 'items-center', 'border', 'border-gray-300', 'p-4', 'my-4', 'rounded-lg', 'gap-4');
        controls.classList.add('flex', 'gap-4');
        deleteButton.classList.add('bg-red-300', 'hover:bg-red-600', 'text-white', 'p-2', 'rounded-lg');
        editButton.classList.add('bg-blue-300', 'hover:bg-blue-600', 'text-white', 'p-2', 'rounded-lg');

        editButton.addEventListener('click', () => {
            let editBook = document.querySelector(`#book-${i}`);
            let title = createElement('input');
            let author = createElement('input');
            let pages = createElement('input');
            let read = createElement('button');
            if (editButton.textContent === 'Edit') {
                editBook.removeChild(info);
                info = createElement('div');

                title.setAttribute('type', 'text');
                author.setAttribute('type', 'text');
                pages.setAttribute('type', 'number');
                read.setAttribute('type', 'button');
                title.value = book.title;
                author.value = book.author;
                pages.value = book.pages;
                read.textContent = 'Read';
                read.addEventListener('click', () => {
                    if (read.classList.toggle('bg-red-300')) {
                        read.textContent = 'Unread';
                    } else {
                        read.textContent = 'Read';
                    };
                });

                info.classList.add('flex', 'gap-2');
                title.classList.add('w-1/5', 'border', 'border-sky-300', 'pl-2');
                author.classList.add('w-1/5', 'border', 'border-sky-300', 'pl-2');
                pages.classList.add('w-1/5', 'border', 'border-sky-300', 'pl-2');
                read.classList.add('bg-green-300', 'p-2', 'rounded-lg');

                info.appendChild(title);
                info.appendChild(author);
                info.appendChild(pages);
                info.appendChild(read);
                editBook.insertBefore(info, controls);
                editButton.textContent = 'Save';
            } else {
                editBook.removeChild(info);
                info = createElement('p');
                editBook.insertBefore(info, controls);
                editButton.textContent = 'Edit';
            };
        });

        deleteButton.addEventListener('click', () => {
            library.splice(i, 1);
            displayLibrary();
        });
        div.appendChild(info);
        controls.appendChild(editButton);
        controls.appendChild(deleteButton);
        div.appendChild(controls);
        listBooks.appendChild(div);
    }
}

submitBook.addEventListener('click', () => {
    addBook(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.value);
    displayLibrary();
});
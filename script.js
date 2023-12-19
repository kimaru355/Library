const submitButton = document.querySelector('#submitButton');
const myLibrary = [];
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? 'read': 'Unread';
    this.info = () => (this.title + ' by ' + this.author + ', ' + this.pages + ' pages. ' + this.read);
}


document.querySelector('#inputBook').addEventListener("submit", (event) => {
    event.preventDefault;
    let selectedValue = document.querySelector('input[name="radioGroup"]:checked');
    console.log(selectedValue);
    console.log(selectedValue.value);
});

function addBookToLibrary () {
    let book1 = Object.create(Book);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
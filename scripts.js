window.onload = function() {
    drawBooks();
}

let myLibrary = [];

function Book(title, author, yearPublished, status) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.status = status;
}

function drawBooks() {
    const gridContainer = document.querySelector('#grid-container');

    // Clear any existing cards
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    };

    for (let i = 0; i < myLibrary.length; i++) {
        //Create card
        const card = document.createElement('div');
        card.classList.add('card');

        //Add text to card
        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');
        const title = document.createElement('h2');
        title.textContent = myLibrary[i].title;
        const author = document.createElement('p');
        author.textContent = `Author: ${myLibrary[i].author}`;
        const yearPublished = document.createElement('p');
        yearPublished.textContent = `Published: ${myLibrary[i].yearPublished}`;
        const status = document.createElement('p');
        status.textContent = `Status: ${myLibrary[i].status}`;

        card.append(textContainer);
        textContainer.append(title, author, yearPublished, status);
        gridContainer.append(card);
    }
}

const btnAdd = document.querySelector('#btn-add');
const dialog = document.querySelector('#dialog-add');

btnAdd.addEventListener('click', (event) => {
    //Reset form inputs
    document.getElementById('form_add_book').reset();

    dialog.showModal();
});

const btnSubmit = document.querySelector('#btn-submit');

btnSubmit.addEventListener('click', (event) => {
    // Add book to array
    const book = new Book(
        document.getElementById('input_title').value,
        document.getElementById('input_author').value,
        document.getElementById('input_yearPublished').value,
        document.getElementById('input_status').value
    );
    myLibrary.push(book);

    //Repopulate cards from modified array
    drawBooks();
});

const btnClear = document.querySelector('#btn-clear');

btnClear.addEventListener('click', (event) => {
    myLibrary = [];
    drawBooks();
})
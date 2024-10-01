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
        card.setAttribute('data-index', i);
        console.log(card.dataset);

        //Add content to card
        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');
        const title = document.createElement('h2');
        title.textContent = myLibrary[i].title;
        const author = document.createElement('p');
        author.textContent = `Author: ${myLibrary[i].author}`;
        const yearPublished = document.createElement('p');
        yearPublished.textContent = `Published: ${myLibrary[i].yearPublished}`;
        const status = document.createElement('p');
        status.classList.add('status');
        status.textContent = `Status: ${myLibrary[i].status}`;

        //Create button
        const btnDelete = document.createElement('img');
        btnDelete.setAttribute('id', 'btn-delete');
        btnDelete.setAttribute('src', './images/trash-can.svg');
        btnDelete.setAttribute('alt', 'trash can icon');

        card.append(textContainer, btnDelete);
        textContainer.append(title, author, yearPublished, status);
        gridContainer.append(card);
    }
}

const btnAdd = document.querySelector('#btn-add');
const dialogAdd = document.querySelector('#dialog-add');

btnAdd.addEventListener('click', (event) => {
    //Reset form inputs
    document.getElementById('form_add_book').reset();

    dialogAdd.showModal();
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

const btnEdit = document.querySelector('#btn-edit');
btnEdit.addEventListener('click', (event) => {
    //Show dialog
})

const btnDelete = document.querySelector('#btn-delete');
btnDelete.addEventListener('click', (event) => {
    //Get card index from dataset
    //Find element in array
    //Delete element in array

    drawBooks();
})
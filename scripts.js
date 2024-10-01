window.onload = function() {
    populateBooks();
}

const myLibrary = [
    {
        title: 'Dracula',
        author: 'Bram Stoker',
        yearPublished: '1897',
        status: 'Completed',
    },
    {
        title: 'The Passage',
        author: 'Justin Cronin',
        yearPublished: '2010',
        status: 'Completed',
    },
    {
        title: 'The Fifth Season',
        author: 'N.K. Jemisin',
        yearPublished: '2015',
        status: 'Completed',
    },
];

function Book(title, author, yearPublished, status) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.status = status;
}

function populateBooks() {
    const gridContainer = document.querySelector('#grid-container');

    for (let i = 0; i < myLibrary.length; i++) {
        //Create card
        const card = document.createElement('div');
        card.classList.add('card');

        //Create and add text to card
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
    dialog.showModal();
    addBookToLibrary();
});

function addBookToLibrary() {
    const btnClose = document.querySelectorAll('.btn-close');
    const btnSubmit = document.querySelector('#btn-submit');

    btnSubmit.addEventListener('click', (event) => {
        // Add book to array

        // Clear any existing cards
        const gridContainer = document.querySelector('#grid-container');

        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.lastChild);
        };

        //Repopulate cards from modified array
        populateBooks();
    });

    btnClose.addEventListener('click', (event) => {
        dialog.close();
    });
}
window.onload = function() {
    populateBooks();
}

const myLibrary = [
    {
        title: 'Dracula',
        author: 'Bram Stoker',
        yearPublished: '1897',
        status: 'read',
    },
    {
        title: 'The Passage',
        author: 'Justin Cronin',
        yearPublished: '2010',
        status: 'read',
    },
    {
        title: 'The Fifth Season',
        author: 'N.K. Jemisin',
        yearPublished: '2015',
        status: 'read',
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

        card.appendChild(textContainer);
        textContainer.appendChild(title);
        textContainer.appendChild(author);
        textContainer.appendChild(yearPublished);
        textContainer.appendChild(status);
        gridContainer.appendChild(card);
    }
}

function addBookToLibrary() {
    // Do stuff
}
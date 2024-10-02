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

        //Add content to card
        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');
        const title = document.createElement('h2');
        title.textContent = myLibrary[i].title;
        const author = document.createElement('p');
        author.textContent = `Author: ${myLibrary[i].author}`;
        const yearPublished = document.createElement('p');
        yearPublished.textContent = `Published: ${myLibrary[i].yearPublished}`;
        const statusLabel = document.createElement('p');
        statusLabel.textContent = `Status: `;
        const status = document.createElement('span');
        status.classList.add('status');
        status.setAttribute('data-index', i);
        status.textContent = `${myLibrary[i].status}`;
        statusLabel.append(status);

        //Create button
        const btnDelete = document.createElement('img');
        btnDelete.setAttribute('id', 'btn-delete');
        btnDelete.setAttribute('src', './images/trash-can.svg');
        btnDelete.setAttribute('alt', 'trash can icon');
        btnDelete.setAttribute('data-index', i);

        card.append(textContainer, btnDelete);
        textContainer.append(title, author, yearPublished, statusLabel);
        gridContainer.append(card);
    }

    const statusEdit = document.querySelectorAll('.status');
    const dialogEdit = document.querySelector('#dialog-edit');

    statusEdit.forEach((status) => {
        status.addEventListener('click', (event) => {
            const book = myLibrary[event.target.dataset.index];
            const editTitle = document.querySelector('#edit_title');
            const editAuthor = document.querySelector('#edit_author');
            const editYear = document.querySelector('#edit_yearPublished');
            const editStatus = document.querySelector('#edit_status');
    
            editTitle.value = book.title;
            editAuthor.value = book.author;
            editYear.value = book.yearPublished;
            editStatus.value = book.status;
    
            dialogEdit.showModal();
    
            const btnSave = document.querySelector('#btn-save');
    
            btnSave.addEventListener('click', (event) => {
                // Update book
                book.title = editTitle.value;
                book.author = editAuthor.value;
                book.yearPublished = editYear.value;
                book.status = editStatus.value;
    
                drawBooks();

                delete book;
            });
        });
    })
}

const btnAdd = document.querySelector('#btn-add');
const dialogAdd = document.querySelector('#dialog-add');

btnAdd.addEventListener('click', (event) => {
    //Reset form inputs
    document.getElementById('form-add-book').reset();

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

const btnDelete = document.querySelector('#btn-delete');
btnDelete.addEventListener('click', (event) => {
    //Get card index from dataset
    //Find element in array
    //Delete element in array

    drawBooks();
})
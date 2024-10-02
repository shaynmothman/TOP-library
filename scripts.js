let myLibrary = [];

function Book(title, author, yearPublished, status) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.status = status;
}

const handleAddClick = (event) => {
    document.getElementById('form-add-book').reset();
    const dialogAdd = document.querySelector('#dialog-add');
    dialogAdd.showModal();
};
document.querySelector('#btn-add').addEventListener('click', handleAddClick);

const handleSubmitClick = (event) => {
    const book = new Book(
        document.getElementById('input_title').value,
        document.getElementById('input_author').value,
        document.getElementById('input_yearPublished').value,
        document.getElementById('input_status').value
    );
    myLibrary.push(book);
    drawBooks();
};
document.querySelector('#btn-submit').addEventListener('click', handleSubmitClick);

//Delete all books
const btnClear = document.querySelector('#btn-clear');

btnClear.addEventListener('click', (event) => {
    myLibrary = [];
    drawBooks();
})

//Draw all books in array
function drawBooks() {
    const gridContainer = document.querySelector('#grid-container');

    //Delete any existing cards
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    };

    //Iterate through array
    for (let i = 0; i < myLibrary.length; i++) {
        //Create card
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('id', `card-${i}`); //Unique identifier

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

        //Create delete button
        const btnDelete = document.createElement('img');
        btnDelete.setAttribute('id', 'btn-delete');
        btnDelete.setAttribute('src', './images/trash-can.svg');
        btnDelete.setAttribute('alt', 'trash can icon');

        //Draw cards on page
        card.append(textContainer, btnDelete);
        textContainer.append(title, author, yearPublished, statusLabel);
        gridContainer.append(card);

        status.addEventListener('click', (event) => {
            const book = myLibrary[event.target.dataset.index];
            editBook(book);
        });
    }
}

function editBook(book) {
    const dialogEdit = document.querySelector('#dialog-edit');
    const inputTitle = document.querySelector('#edit_title');
    const inputAuthor = document.querySelector('#edit_author');
    const inputYear = document.querySelector('#edit_yearPublished');
    const inputStatus = document.querySelector('#edit_status');

    //Set form content
    inputTitle = book.title;
    inputAuthor = book.author;
    inputYear = book.yearPublished;
    inputStatus = book.status;

    dialogEdit.showModal();

    const btnSave = document.querySelector('#btn-save');

    btnSave.addEventListener('click', (event) => {
        //Update book in array
        book.title = inputTitle.value;
        book.author = inputAuthor.value;
        book.yearPublished = inputYear.value;
        book.status = editStatus.value;

        drawBooks();
    })
}

const btnDelete = document.querySelector('#btn-delete');
btnDelete.addEventListener('click', (event) => {
    //Get card index from dataset
    //Find element in array
    //Delete element in array

    drawBooks();
})
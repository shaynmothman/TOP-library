//Initialize array
let myLibrary = [];

//Create book prototype
function Book(title, author, yearPublished, status) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.status = status;
}

//Open 'add a book' dialog
const handleAddClick = (event) => {
    document.getElementById('form-add-book').reset();
    const dialogAdd = document.querySelector('#dialog-add');
    dialogAdd.showModal();
};
document.querySelector('#btn-add').addEventListener('click', handleAddClick);

//Add and draw book
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

//Clear library
const handleClearAllClick = (event) => {
    myLibrary = [];
    drawBooks();
};
document.querySelector('#btn-clear').addEventListener('click', handleClearAllClick);

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

        //Create buttons
        const btnContainer = document.createElement('div');
        btnContainer.classList.add('menu');
        const btnDelete = document.createElement('img');
        btnDelete.classList.add('btn-delete');
        btnDelete.setAttribute('src', './images/trash-can.svg');
        btnDelete.setAttribute('alt', 'trash can icon');
        btnDelete.setAttribute('data-index', i);
        const btnEdit = document.createElement('img');
        btnEdit.setAttribute('src', './images/pencil.svg');
        btnDelete.setAttribute('alt', 'pencil icon');
        btnEdit.setAttribute('data-index', i);

        //Draw cards on page
        btnContainer.append(btnEdit, btnDelete);
        card.append(textContainer, btnContainer);
        textContainer.append(title, author, yearPublished, statusLabel);
        gridContainer.append(card);

        //Handle status clicks
        status.addEventListener('click', (event) => {
            let book = myLibrary[event.target.dataset.index];
            editBook(book, i);
        });

        //Handle edit button clicks
        btnEdit.addEventListener('click', (event) => {
            let book = myLibrary[event.target.dataset.index];
            editBook(book, i);
        });

        //Handle delete clicks
        btnDelete.addEventListener('click', (event) => {
            let deleted = myLibrary.splice(i, 1);
            drawBooks();
        });
    }
}

function editBook(book, i) {
    const dialogEdit = document.querySelector('#dialog-edit');
    const inputTitle = document.querySelector('#edit_title');
    const inputAuthor = document.querySelector('#edit_author');
    const inputYear = document.querySelector('#edit_yearPublished');
    const inputStatus = document.querySelector('#edit_status');

    //Save book identifier
    dialogEdit.setAttribute('data-index', i);

    //Set form content
    inputTitle.value = book.title;
    inputAuthor.value = book.author;
    inputYear.value = book.yearPublished;
    inputStatus.value = book.status;

    dialogEdit.showModal();
}

const handleSaveClick = (event) => {
    const dialogEdit = document.querySelector('#dialog-edit');
    const inputTitle = document.querySelector('#edit_title');
    const inputAuthor = document.querySelector('#edit_author');
    const inputYear = document.querySelector('#edit_yearPublished');
    const inputStatus = document.querySelector('#edit_status');

    //Get book identifier
    let i = dialogEdit.dataset.index;

    myLibrary[i] = {
        title: inputTitle.value,
        author: inputAuthor.value,
        yearPublished: inputYear.value,
        status: inputStatus.value,
    };

    drawBooks();
};
document.querySelector('#btn-save').addEventListener('click', handleSaveClick);

const checkDialogOpen = (event) => {
if (event.key === 'Enter') {
    let clickEvent = new Event('click');
    const dialogAdd = document.querySelector('#dialog-add');
    const dialogEdit = document.querySelector('#dialog-edit');

    if (dialogAdd.open) {
        document.querySelector('#btn-submit').dispatchEvent(clickEvent);
    } else if (dialogEdit.open) {
        document.querySelector('#btn-save').dispatchEvent(clickEvent);
    } else {
        //Do nothing
    }
}
}
document.addEventListener('keydown', checkDialogOpen);
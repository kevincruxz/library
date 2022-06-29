let library = []

function Book(title, author, pages, readed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
}

Book.prototype.info = function() {
    let readString = this.readed ? 'readed' : 'not read yet';
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readString}`;
}

// Make a method to insert new books into an array of objects
function addToLibrary(title, author, pages, read) {
    library.push(new Book(title, author, pages, read));
}

function display() {
    const cardsArea = document.querySelector('.card-space')
    library.forEach(book => {
        let card = createCardHtml(book);
        cardsArea.appendChild(card);
    });
    displayNewBookButton();
}

function createCardHtml(book) {
    let card = document.createElement('div');

    Object.keys(book).forEach(key => {
        let tag = document.createElement('p');
        tag.innerHTML = book[key];
        card.appendChild(tag);
    });

    card.classList.add('card')
    card = makeInteractive(card);
    return card;
}

function makeInteractive(card) {
    card.addEventListener('click', (e) => {
        card.classList.contains('expanded-card') ? card.classList.remove('expanded-card') : card.classList.add('expanded-card');
    });
    return card;
}

function displayNewBookButton() {
    const button = document.createElement('img');
    button.src = 'img/plus-symbol-transparent-images-png-arts-163387.png';
    button.style.cssText = 'width: 100px;'
    const buttonSpace = document.createElement('div');
    buttonSpace.classList.add('new-button');
    document.querySelector('.card-space').appendChild(buttonSpace).appendChild(button);
    makeItWork(buttonSpace);
}

function makeItWork(button) {
    button.addEventListener('click', (e) => {
        button.classList.add('expanded-new-button');
        createForm(button);
    });
}

function createForm(button) {
    const img = document.querySelector('img') 
    document.querySelector('.new-button').removeChild(img);
    const formDiv = document.createElement('div');
    formDiv.innerHTML = `
    <form action="" class="form">
        <label for="title">Title</label>
        <input type="text" id="title">

        <label for="author">Author</label>
        <input type="text">

        <label for="year">Year</label>
        <input type="number">

        <label for="read">Readed</label>
        <div class="yes-no-buttons">
            <input type="radio" value="yes" name="read">Yes</input>
            <input type="radio" value="no" name="read">No</input>
        </div>

        <input type="submit">
    </form>`;
    formDiv.classList.add('form');
    document.querySelector('.new-button').appendChild(formDiv);
}

addToLibrary('kk', 'aasas', 2121, true);
addToLibrary('kk', 'aasas', 2121, false);
addToLibrary('kk', 'aasas', 2121, true);
addToLibrary('kk', 'aasas', 2121, false);
addToLibrary('kk', 'aasas', 2121, true);
addToLibrary('kk', 'aasas', 2121, false);
addToLibrary('kk', 'aasas', 2121, true);
addToLibrary('kk', 'aasas', 2121, false);
addToLibrary('kk', 'aasas', 2121, true);
addToLibrary('kk', 'aasas', 2121, false);
display();
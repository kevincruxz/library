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
        card.classList.contains('expanded-card') ? card.classList.remove('expanded-card') : card.classList.add('expanded-card')
    });
    return card;
}

function displayNewBookButton() {
    return;
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
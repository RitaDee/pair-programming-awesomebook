const booklist = document.querySelector('#booklist');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const buttonAdd = document.getElementById('add-btn');

let collection = [];

// It is considered good practice to name constructor functions with an upper-case first letter.
class Library {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook(Booktitle, Bookauthor) {
    this.title = Booktitle;
    this.author = Bookauthor;
    if (Booktitle && Bookauthor) {
      const newBook = new Library(Booktitle, Bookauthor);
      collection.push(newBook);
    }
  }

  removeBook(index) {
    this.index = index;
    collection.splice(index, 1);
  }
}

const stringCollection = localStorage.getItem('collection');
const obj = new Library();

if (stringCollection) {
  const parsedCollection = JSON.parse(stringCollection);
  collection = parsedCollection;
}
function getBooks() {
  let innerhtml = '';

  collection.forEach((book, index) => {
    innerhtml += `
    <div>
        <div>${book.title} </div>
        <div> ${book.author} </div>
        <button id="remove-btn${index}">Remove</button>
            </div>
            <hr>
        `;
  });

  booklist.innerHTML = innerhtml;

  collection.forEach((book, index) => {
    const removeBtn = document.getElementById(`remove-btn${index}`);
    removeBtn.addEventListener('click', () => {
      obj.removeBook(index);
      getBooks();
    });
  });

  localStorage.setItem('collection', JSON.stringify(collection));
}

getBooks();

buttonAdd.addEventListener('click', (event) => {
  event.preventDefault();
  obj.addBook(inputTitle.value, inputAuthor.value);
  getBooks();

  inputTitle.value = '';
  inputAuthor.value = '';
});
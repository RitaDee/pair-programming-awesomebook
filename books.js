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

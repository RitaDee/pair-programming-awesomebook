const booklist = document.querySelector('#booklist');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const buttonAdd = document.getElementById('add-btn');

class Library {
  constructor() {
    this.collection = [];
  }

  addBook(Booktitle, Bookauthor) {
    if (Booktitle && Bookauthor) {
      const newBook = { title: Booktitle, author: Bookauthor };
      this.collection.push(newBook);
    }
  }

  removeBook(index) {
    this.collection.splice(index, 1);
  }
}

const obj = new Library();

const stringCollection = localStorage.getItem('collection');

if (stringCollection) {
  const parsedCollection = JSON.parse(stringCollection);
  obj.collection = parsedCollection;
}

function getBooks() {
  let innerhtml = '';

  obj.collection.forEach((book, index) => {
    innerhtml += `
    <div>
 
     <p>  "${book.title}" by 
         ${book.author} 
     </p>
        <button id="remove-btn${index}">Remove</button>
            </div>
            
    `;
  });

  booklist.innerHTML = innerhtml;

  obj.collection.forEach((book, index) => {
    const removeBtn = document.getElementById(`remove-btn${index}`);
    removeBtn.addEventListener('click', () => {
      obj.removeBook(index);
      getBooks();
    });
  });

  localStorage.setItem('collection', JSON.stringify(obj.collection));
}

getBooks();

buttonAdd.addEventListener('click', (event) => {
  event.preventDefault();
  obj.addBook(inputTitle.value, inputAuthor.value);
  getBooks();

  inputTitle.value = '';
  inputAuthor.value = '';
});

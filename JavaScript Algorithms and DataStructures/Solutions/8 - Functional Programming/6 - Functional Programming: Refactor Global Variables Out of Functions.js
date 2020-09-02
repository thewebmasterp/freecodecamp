// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (list, bookName) {
  let bookList_copy = [...list]
  bookList_copy.push(bookName);
  return bookList_copy;
  
  // Change code above this line
}

// Change code below this line
function remove (list, bookName) {
  let bookList_copy = [...list]
  var book_index = bookList_copy.indexOf(bookName);
  if (book_index >= 0) {

    bookList_copy.splice(book_index, 1);
    return bookList_copy;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

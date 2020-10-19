const fs = require('fs');
const path = require('path');

const filePath  = path.join(path.dirname(process.mainModule.filename), 'data', 'books.json');

exports.getLibraryIndex = (req, res, next) => {
  let books = [];
  fs.readFile(filePath, (err, bookList) => {
    if(!err){
      books = JSON.parse(bookList);

      res.render('library', { books });
    }
  })
}
exports.getBook = (req, res, next) => {
  const id = parseInt(req.params.id) - 1;
  fs.readFile(filePath, (err, bookList) => {
    if(!err){
      books = JSON.parse(bookList);

      res.render('book-details', { book : books[id] });
    }
  })
}

exports.getAddBook = (req, res, next) => {
  res.render('add-book');
}

exports.postAddBook = (req, res, next) => {
  const bookId = req.body.bookId;
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const createdAt = new Date();

  console.log(filePath);
  
  const newBookData = {
    bookId, 
    title,
    price,
    description,
    createdAt 
  }

  fs.readFile(filePath, (err, bookList) => {
    // console.log(err);
    let books = []
    // if file exists
    if(!err){
      // console.log(bookList);
      books = JSON.parse(bookList);
    }
    books.push(newBookData);
    console.log(books[0]);

    fs.writeFile(filePath, JSON.stringify(books), (err) => {
      if(err){
        console.log(err); 
      }

      res.redirect('/');
    } )
  })

}
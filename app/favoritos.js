var books = [];
booksRequest();

async function booksRequest() {
  var request = await fetch(
    'https://guilhermeonrails.github.io/casadocodigo/livros.json'
  );
  books = await request.json();
  //console.log(books)
  let booksInSale = apllyDiscount(books);
  displayBooks(booksInSale);
}

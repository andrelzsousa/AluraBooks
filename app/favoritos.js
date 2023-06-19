var books = []
booksRequest()

const element = document.getElementById('livros')

async function booksRequest() {

    var request = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json')
    books = await request.json()
    console.log(books)
    displayBooks(books)
}













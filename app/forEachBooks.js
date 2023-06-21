const booksDisplayElement = document.getElementById('livros')
const totalValueElement = document.getElementById('valor_total_livros_disponiveis')

function displayBooks(bookList) {
  booksDisplayElement.innerHTML = ''
  totalValueElement.innerHTML = ''


  bookList.forEach((book, index) => {

    let availability = book.quantidade > 0 ? '' : 'indisponivel'
    booksDisplayElement.innerHTML +=
      `
        <div class="livro">
        <img
          class="livro__imagens ${availability}"
          src=${book.imagem}
          alt=${book.alt}
        />
        <h2 class="livro__titulo">
            ${book.titulo}
        </h2>
        <p class="livro__descricao">${book.autor}</p>
        <p class="livro__preco" id="preco">R$${book.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${book.categoria}</span>
        </div>
      </div>
        `
  })
}
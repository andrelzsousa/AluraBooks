// const btnFrontFilter = document.getElementById('btnFiltrarLivrosFront')
// btnFrontFilter.addEventListener('click', filtrar)

// function filtrar() {
//     let filteredBooks = books.filter((book) => {
//         return book.categoria == 'front-end'
//     })
//     console.table(filteredBooks)
// }
console.log(document.querySelectorAll('.btn'))
const buttonList = Array.from(document.querySelectorAll('.btn'))

const filterTypeButtons = buttonList.filter((btn) => {
    return btn.value == 'front-end' || btn.value == 'back-end' || btn.value == 'dados'
})

filterTypeButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        let filteredBooks = books.filter(book => {
            return book.categoria == btn.value
        })
        displayBooks(filteredBooks)
    })
})

const btnAvailableFilter = document.getElementById('btnLivrosDisponiveis')
btnAvailableFilter.addEventListener('click', () => {
    let availableBooks = books.filter((book) => {
        return book.quantidade > 0
    })
    displayBooks(availableBooks)
    let totalValue = availableBooks.reduce((acc, cur) => acc + cur.preco, 0)
    displayTotalValue(totalValue)
})

const btnRemoveFilter = document.getElementById('remove')
remove.addEventListener('click', () => {
    displayBooks(books)
})

function displayTotalValue(totalValue) {
    totalValueElement.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">R$${totalValue.toFixed(2)}</span></p>
    </div>
    `
}
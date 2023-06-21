const btnSort = document.getElementById('btnOrdenarPorPreco')
let btnSortSwitch = false
btnSort.addEventListener('click', () => {
    let sortedBooks = books.toSorted((a, b) => {
        return a.preco - b.preco
    })
    displayBooks(sortedBooks)
    //btnSortSwitch = btnSortSwitch == false ? true : false

})


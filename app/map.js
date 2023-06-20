function apllyDiscount(books) {
    return books.map(book => {
        return { ...book, preco: book.preco * 0.7 }
    })
}
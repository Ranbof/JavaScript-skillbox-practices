let books = ["Война и мир", "Мастер и Маргарита", "Преступление и наказание", "За пропастью во ржи", "Властелин колец", "Дюна"]

const bookList = document.getElementById('book-list')
const addBook = document.getElementById('add-book')
const searchBook = document.getElementById('search-book')


function showBooks() {
    bookList.innerHTML = '' 
    books.forEach(book => {
        const li = document.createElement('li')
        li.textContent = book;
        bookList.appendChild(li);
    })
}


addBook.onclick = function () {
    const newBook = prompt("Введите название книги: ")
    if (newBook) {
        books.push(newBook)
        showBooks()
    } else {
        alert("Название книги не введено!")
    }
}


searchBook.onclick = function () {
    const searchEl = prompt("Введите название книги для поиска: ")
    if (searchEl) {
        let found = false
        books.forEach(book => {
            const bookItem = [...bookList.getElementsByTagName('li')]
            bookItem.forEach(item => {
                item.style.backgroundColor = '' 
                if (item.textContent.toLowerCase() === searchEl.toLowerCase()) {
                    item.style.backgroundColor = 'yellow'
                    found = true;
                }
                else{
                    item.style.backgroundColor = ''
                }
            })
        })
        if (!found) {
            alert("Книга не найдена!")
        }
    }
}

showBooks()
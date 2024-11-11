let products = ["Арбуз", "Книга", "Кофе", "Макароны", "Молоко", "Сахар", "Яблоки"]

const productList = document.getElementById('product-list')
const addProduct = document.getElementById('add-product')

function showProducts() {
    productList.innerHTML = ''
    sortProduct(products)
    products.forEach(product => {
        const li = document.createElement('li')
        li.textContent = product
        productList.appendChild(li)
    })
}


addProduct.onclick = function () {
    const newProduct = prompt("Введите название товара: ")
    if (newProduct) {
        products.push(newProduct)
        showProducts()  
    } else {
        alert("Название товара не введено!")
    }
}

function sortProduct(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

showProducts()
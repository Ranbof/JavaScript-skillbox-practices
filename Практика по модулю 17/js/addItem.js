import { storage } from './storage.js'
import { showLoader } from './app.js'

const form = document.createElement('form')
form.innerHTML = `
    <h1>Добавить запись</h1>
    <label>Название: <input type="text" id="name" required></label>
    <label>Полка: <input type="text" id="shelf" required></label>
    <label>Вес: <input type="number" id="weight" required min="0.01" step="0.01"></label>
    <label>Время хранения: <input type="date" id="storageTime" required></label>
    <button type="submit">Добавить</button>
`

form.onsubmit = (event) => {
    event.preventDefault()
    const weightValue = parseFloat(form.weight.value)
    if (weightValue <= 0) {
        alert("Вес должен быть положительным числом больше нуля.")
        return
    }
    const newItem = {
        name: form.name.value,
        shelf: form.shelf.value,
        weight: weightValue,
        storageTime: form.storageTime.value
    }
    storage.addItem(newItem)
    showLoader()
    window.location.href = 'index.html'
}

document.getElementById('app').appendChild(form)
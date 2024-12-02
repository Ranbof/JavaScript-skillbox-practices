import { renderItemTable } from './itemTable.js'

const app = document.getElementById('app')
const preloader = document.getElementById('preloader')

const loadApp = () => {
    preloader.style.display = 'none'
    const heading = document.createElement('h1')
    heading.textContent = 'Склад'
    app.appendChild(heading)

    const addButton = document.createElement('button')
    addButton.textContent = 'Добавить запись'
    addButton.onclick = () => {
        window.location.href = 'add-item.html'
    }
    app.appendChild(addButton)

    const itemTable = renderItemTable()
    app.appendChild(itemTable)
}

export const showLoader = () => {
    const loader = document.querySelector('.lds-spinner')
    const app = document.getElementById('app')
    if (loader) {
        loader.style.display = 'flex'
        app.style.display = 'none'
    }
}

export const hideLoader = () => {
    const loader = document.querySelector('.lds-spinner')
    const app = document.getElementById('app')
    if (loader) {
        loader.style.display = 'none'
        app.style.display = 'block'
    }
}

window.addEventListener('beforeunload', showLoader)

window.onload = () => {
    hideLoader()
    const preloader = document.getElementById('preloader')
    loadApp()
}


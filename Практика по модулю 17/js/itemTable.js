import { storage } from './storage.js'

let currentSortColumn = null
let sortDirection = 'asc'

export const renderItemTable = () => {
    const items = storage.getItems()
    const table = document.createElement('table')

    const header = table.createTHead()
    const headerRow = header.insertRow()

    const columns = ['Название', 'Полка', 'Вес', 'Время хранения', 'Действия']

    columns.forEach(column => {
        const th = document.createElement('th')
        th.textContent = column
        th.onclick = () => sortTable(column)
        headerRow.appendChild(th)
    });

    const body = table.createTBody()
    items.forEach((item, index) => {
        const row = body.insertRow()
        row.insertCell().textContent = item.name
        row.insertCell().textContent = item.shelf
        row.insertCell().textContent = item.weight
        row.insertCell().textContent = item.storageTime
        const deleteCell = row.insertCell()
        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Удалить'
        deleteButton.onclick = () => deleteItem(index)
        deleteCell.appendChild(deleteButton)
    })

    return table
}

const sortTable = (columnName) => {
    const items = storage.getItems()
    const columnIndex = {
        'Название': 'name',
        'Полка': 'shelf',
        'Вес': 'weight',
        'Время хранения': 'storageTime'
    }[columnName]

    if (currentSortColumn === columnName) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc'
    } else {
        sortDirection = 'asc'
    }
    currentSortColumn = columnName

    items.sort((a, b) => {
        let aValue = a[columnIndex];
        let bValue = b[columnIndex];

        if (columnName === 'Вес') {
            aValue = parseFloat(aValue)
            bValue = parseFloat(bValue)
        }

        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
        return 0
    })

    storage.saveItems(items)

    const table = renderItemTable()
    const oldTable = document.querySelector('table')
    if (oldTable) {
        oldTable.replaceWith(table)
    } else {
        document.getElementById('app').appendChild(table)
    }
}

const deleteItem = (index) => {
    const items = storage.getItems()
    items.splice(index, 1)
    storage.saveItems(items)

    const table = renderItemTable()
    const oldTable = document.querySelector('table')
    if (oldTable) {
        oldTable.replaceWith(table)
    } else {
        document.getElementById('app').appendChild(table)
    }
}
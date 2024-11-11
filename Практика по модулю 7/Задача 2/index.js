let heights = [164, 157, 160, 143, 170]

const heightList = document.getElementById('height-list')
const addHeight = document.getElementById('add-height')
const filterHeigh = document.getElementById('filter-height')


function showHeights(filteredHeights = heights) {
    heightList.innerHTML = ''
    filteredHeights.forEach(height => {
        const li = document.createElement('li')
        li.textContent = height
        heightList.appendChild(li)
    })
}


addHeight.onclick = function () {
    const newHeight = prompt("Введите рост ученика: ")
    const parsedHeight = parseInt(newHeight)

    if (!newHeight || isNaN(parsedHeight)) {
        alert("Рост не введён")
    } else {
        heights.push(parsedHeight)
        showHeights()
    }
}


filterHeigh.onclick = function () {
    const minHeight = prompt("Введите минимальный рост для фильтрации: ")
    const parsedMinHeight = parseInt(minHeight)

    if (!minHeight || isNaN(parsedMinHeight)) {
        showHeights()
    } else {
        const filteredHeights = heights.filter(height => height >= parsedMinHeight)
        showHeights(filteredHeights)
    }
}



showHeights()
export const storage = {
    getItems() {
        const items = localStorage.getItem('warehouseItems')
        return items ? JSON.parse(items) : []
    },
    saveItems(items) {
        localStorage.setItem('warehouseItems', JSON.stringify(items))
    },
    addItem(item) {
        const items = this.getItems()
        items.push(item)
        this.saveItems(items)
    },
    deleteItem(index) {
        const items = this.getItems()
        items.splice(index, 1)
        this.saveItems(items)
    }
  }
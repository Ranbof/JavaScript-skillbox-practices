import { EditDelivery } from './editDelivery.js'

const deliveryArr = [
    new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8, "delivery"),
    new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
    new EditDelivery("Оля", "ул. Ткачей, д. 43", 11, "canceled")
]

const deliveryListElement = document.getElementById('delivery-list')
deliveryArr.forEach(delivery => {
    const card = delivery.createDeliveryCard()
    deliveryListElement.appendChild(card)
})
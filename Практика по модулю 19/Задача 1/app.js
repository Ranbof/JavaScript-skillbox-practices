import { Delivery } from './delivery.js'

const deliveryArr = [
    new Delivery("Ольга", "ул. Вымыслов, д. 12", 8),
    new Delivery("Дмитрий", "ул. Задачная, д. 7", 3),
    new Delivery("Оля", "ул. Ткачей, д. 43", 11)
]

const deliveryListElement = document.getElementById('delivery-list')
deliveryArr.forEach(delivery => {
    const card = delivery.createDeliveryCard()
    deliveryListElement.appendChild(card)
})

import { Delivery } from './delivery.js'

export class EditDelivery extends Delivery {
    constructor(customerName, address, distance, status) {
        super(customerName, address, distance, status);
    }

    static getTotalDistance(deliveryArray) {
        return deliveryArray.reduce((total, delivery) => {
            if (delivery.status !== 'canceled') {
                return total + delivery.distance;
            }
            return total;
        }, 0);
    }

    static addTotalDistanceButton(deliveryArr) {
        const button = document.createElement('button');
        button.textContent = 'Общее расстояние';
        button.id = 'total-distance-btn';

        const resultElement = document.createElement('div');
        resultElement.id = 'total-distance-result';

        button.addEventListener('click', () => {
            const totalDistance = EditDelivery.getTotalDistance(deliveryArr);
            resultElement.textContent = `Общее расстояние: ${totalDistance} км`;
        });

        document.body.appendChild(button);
        document.body.appendChild(resultElement);
    }

    editDelivery(card) {
        const modal = document.createElement('div');
        modal.className = 'modal';
    
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>Изменить</h2>
                    <span class="close-btn">&times;</span>
                </div>
                <input type="text" id="name" value="${this.customerName}">
                <input type="text" id="address" value="${this.address}">
                <input type="number" id="distance" value="${this.distance}" min="0"> 
                <select id="status">
                    <option value="delivery" ${this.status === 'delivery' ? 'selected' : ''}>Доставка</option>
                    <option value="delivered" ${this.status === 'delivered' ? 'selected' : ''}>Доставлено</option>
                    <option value="canceled" ${this.status === 'canceled' ? 'selected' : ''}>Отменено</option>
                </select>
    
                <button id="save-btn">Сохранить</button>
            </div>
        `;
    
        document.body.appendChild(modal);

        modal.querySelector('.close-btn').addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modal.querySelector('#save-btn').addEventListener('click', () => {
            const name = modal.querySelector('#name').value;
            const address = modal.querySelector('#address').value;
            const distance = modal.querySelector('#distance').value;
            const status = modal.querySelector('#status').value;
    
            if (name) this.customerName = name;
            if (address) this.address = address;
            if (distance) this.distance = Number(distance); 
            if (['delivery', 'delivered', 'canceled'].includes(status)) this.status = status;
    
            this.updateCardDisplay(card);
            document.body.removeChild(modal);
        });
    }
    
    
    updateCardDisplay(card) {
        card.querySelector('p:nth-of-type(1)').textContent = this.customerName;
        card.querySelector('p:nth-of-type(2)').innerHTML = ` ${this.address}`;
        card.querySelector('p:nth-of-type(3)').innerHTML = ` ${this.distance} км`;
        card.querySelector('p:nth-of-type(4)').innerHTML = ` ${this.status}`;

        this.updateCardAppearance(card);
    }
}
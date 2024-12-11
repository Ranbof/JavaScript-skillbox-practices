export class Delivery {
    constructor(customerName, address, distance, status = 'delivery') {
        this._customerName = customerName;
        this._address = address;
        this._distance = distance;
        this._status = status; 
    }

    get customerName() {
        return this._customerName;
    }

    get address() {
        return this._address;
    }

    get distance() {
        return this._distance;
    }

    get status() {
        return this._status;
    }

    set customerName(name) {
        this._customerName = name;
    }

    set address(addr) {
        this._address = addr;
    }

    set distance(dist) {
        this._distance = dist;
    }

    set status(stat) {
        this._status = stat;
    }

    createDeliveryCard() {
        const card = document.createElement('div');
        card.className = 'delivery-card';
        card.innerHTML = `
            <div class="delivery-info">
                <strong>Имя:</strong><br>
                <p>${this.customerName}</p>
                <strong>Адрес:</strong><br>
                <p>${this.address}</p>
                <strong>Расстояние:</strong><br>
                <p>${this.distance} км</p>
                <strong>Статус:</strong><br>
                <p>${this.status}</p>
            </div>
            <button class="edit-btn">Изменить</button> 
        `;

        this.updateCardAppearance(card);

        card.querySelector('.edit-btn').addEventListener('click', () => this.editDelivery(card));
    
        return card;
    }

    updateCardAppearance(card) {
        switch (this.status) {
            case 'delivered':
                card.style.borderColor = 'green'; 
                card.style.backgroundColor = '#ffffff';
                break;
            case 'canceled':
                card.style.borderColor = '#ced4da';
                card.style.backgroundColor = 'transparent'; 
                break;
            default:
                card.style.borderColor = '#0f117c'; 
                card.style.backgroundColor = '#ffffff';
                break;
        }
    }
}
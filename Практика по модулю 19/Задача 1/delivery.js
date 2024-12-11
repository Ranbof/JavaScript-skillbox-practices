export class Delivery {
    constructor(customerName, address, distance) {
        this._customerName = customerName;
        this._address = address;
        this._distance = distance;
    }

    get customerName() {
        return this._customerName;
    }

    get address() {
        return this._address;
    }

    get distance() {
        return `${this._distance} км`;
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

    createDeliveryCard() {
        const card = document.createElement('div');
        card.className = 'delivery-card';
        card.innerHTML = `
            <div class="delivery-info">
                <strong>Имя:</strong><br>
                ${this.customerName}<br><br>
                <strong>Адрес:</strong><br>
                ${this.address}<br><br>
                <strong>Расстояние:</strong><br>
                ${this.distance}
            </div>
        `;
        return card;
    }
}

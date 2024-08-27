class Computer {
    constructor(model, manufacturer, price) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.price = price;
    }
    
    getInfo() {
    return `Модель: ${this.model}, Производитель: ${this.manufacturer}, Цена: ${this.price}`;
    }
    }
    
    const computers = [
    new Computer('Model X', 'XYZ Corp', '50000 руб.'),
    new Computer('Model Y', 'ABC Inc', '60000 руб.'),
    new Computer('Model Z', '123 Technologies', '55000 руб.')
    ];
    
    function showComputerInfo() {
    const selectedComputer = computers[document.getElementById('computerSelect').value];
    document.getElementById('info').innerText = selectedComputer.getInfo();
    }
    
// lista de carros
const carList = [
    { brand: 'Audi', model: 'Rs7', mileage: 8000, color: 'Branco', price: 900000, image: 'assets/img/rs7/rs7_1.jpg' },
    { brand: 'Porshe', model: '911', mileage: 0, color: 'Azul', price: 1449000, image: 'assets/img/porshe/911_1.jpg' },
    { brand: 'Lamborghini', model: 'Urus', mileage: 3000, color: 'Branco', price: 3590000, image: 'assets/img/urus/Urus_1.jpg' },
    { brand: 'Ram', model: '1500', mileage: 28200, color: 'Preto', price: 400000, image: 'assets/img/ram/ram_1.jpg' },
    { brand: 'Volvo', model: 'S60', mileage: 28200, color: 'Preto', price: 278900, image: 'assets/img/s60/s60_1.jpg' },
    { brand: 'Audi', model: 'Rsq8', mileage: 13383, color: 'Preto', price: 959990, image: 'assets/img/rsq8/rsq8_1.jpg' },
    { brand: 'Toyota', model: 'Supra', mileage: 0, color: 'Branco', price: 1080000, image: 'assets/img/supra/supra_1.jpg' },
    { brand: 'Bmw', model: 'M3', mileage: 7000, color: 'Azul', price: 699700, image: 'assets/img/m3/m3_1.jpg' },
    { brand: 'Fiat', model: 'Uno', mileage: 54000, color: 'Cinza', price: 45000, image: 'assets/img/uno/uno_1.jpg' },
];

// marca e modelo
function populateOptions() {
    const brandSelect = document.getElementById('brand');
    const modelSelect = document.getElementById('model');

    const uniqueBrands = [...new Set(carList.map(car => car.brand))];
    const uniqueModels = [...new Set(carList.map(car => car.model))];

    brandSelect.innerHTML = '<option value="">Todas as marcas</option>';
    modelSelect.innerHTML = '<option value="">Todos os modelos</option>';

    uniqueBrands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandSelect.appendChild(option);
    });

    uniqueModels.forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
    });
}

// aplicar o filtro e exibir os resultados
function applyFilter() {
    const brand = document.getElementById('brand').value.toLowerCase();
    const model = document.getElementById('model').value.toLowerCase();
    const maxMileage = parseInt(document.getElementById('mileage').value);
    const color = document.getElementById('color').value.toLowerCase();
    const maxPrice = parseInt(document.getElementById('price').value);

    const filteredCars = carList.filter(car => 
        (brand === "" || car.brand.toLowerCase() === brand) &&
        (model === "" || car.model.toLowerCase() === model) &&
        (!maxMileage || car.mileage <= maxMileage) &&
        (color === "" || car.color.toLowerCase() === color) &&
        (!maxPrice || car.price <= maxPrice)
    );

    displayCars(filteredCars);
}

// exibir a lista de carros filtrados
function displayCars(cars) {
    const carListContainer = document.getElementById('car-list');
    carListContainer.innerHTML = '';

    if (cars.length === 0) {
        carListContainer.innerHTML = '<p>Nenhum carro encontrado.</p>';
    } else {
        cars.forEach(car => {
            const carBox = document.createElement('div');
            carBox.classList.add('car-box');

            const carImage = document.createElement('img');
            carImage.src = car.image;
            carImage.alt = `${car.brand} ${car.model}`;

            const carDetails = document.createElement('div');
            carDetails.classList.add('car-details');
            carDetails.innerHTML = `<p><strong>Marca:</strong> ${car.brand}</p>
                                    <p><strong>Modelo:</strong> ${car.model}</p>
                                    <p><strong>Quilometragem:</strong> ${car.mileage} km</p>
                                    <p><strong>Cor:</strong> ${car.color}</p>
                                    <p><strong>Preço:</strong> R$ ${car.price}</p>`;

            carBox.appendChild(carImage);
            carBox.appendChild(carDetails);
            carListContainer.appendChild(carBox);
        });
    }
}

// clicar no botao de filtro
const filterButton = document.getElementById('filter-button');
filterButton.addEventListener('click', applyFilter);

// opcoes de marca e modelo
populateOptions();

// mostrar todos os carros 
displayCars(carList);

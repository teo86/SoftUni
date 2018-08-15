let service = (() => {
    
    function listAllCars() {
        const endpoint = 'cars?query={}&sort={"_kmd.ect": -1}';
        return remote.get('appdata', endpoint, 'kinvey');
    }
    
    function createCarListing(brand, description, fuel, imageUrl, model, price, seller, title, year) {
        let data = {brand, description, fuel, imageUrl, model, price, seller, title, year }
        return remote.post('appdata', 'cars', 'kinvey', data)
    }

    function detailsListening(id) {
        const endpoint = `cars/${id}`;
        return remote.get('appdata', endpoint, 'kinvey');
    }
    
    function myCarsListening() {
        let username = sessionStorage.getItem('username');
        const endpoint = `cars?query={"seller":"${username}"}&sort={"_kmd.ect": -1}`
        return remote.get('appdata', endpoint, 'kinvey');
    }
    
    function editCarListening(id, brand, description, fuel, imageUrl, model, price, seller, title, year) {
        const endpoint = `cars/${id}`
        data = {brand, description, fuel, imageUrl, model, price, seller, title, year}
        return remote.update('appdata', endpoint, 'kinvey', data)
    }

    function deleteCar(id) {
        const endpoint = `cars/${id}`
        return remote.remove('appdata', endpoint, 'kinvey')

    }


    return {
        listAllCars,
        createCarListing,
        detailsListening,
        myCarsListening,
        editCarListening,
        deleteCar
    }
})();
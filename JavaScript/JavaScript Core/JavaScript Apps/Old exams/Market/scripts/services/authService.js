let auth = (() => {
    function isAuth() {
        return sessionStorage.getItem('authtoken') !== null;
    }

    function isLoged() {
        return sessionStorage.getItem('authtoken') === null;
    }

    function saveSession(userData) {
        sessionStorage.setItem('authtoken', userData._kmd.authtoken);
        sessionStorage.setItem('username', userData.username);
        sessionStorage.setItem('userId', userData._id);
        sessionStorage.setItem('name', userData.name);
        sessionStorage.setItem('cart', JSON.stringify(userData.cart));
    }


    function register(username, password, name) {
        let obj = { username, password, name, cart:{} };

        console.log(obj);
        return remote.post('user', '', 'basic', obj);
    }

    function login(username, password) {
        let obj = { username, password };

        return remote.post('user', 'login', 'basic', obj);
        
    }

    function logout() {
        return remote.post('user', '_logout', 'kinvey');
    }

    return {
        isAuth,
        login,
        logout,
        register,
        saveSession,
        isLoged
    };

})();
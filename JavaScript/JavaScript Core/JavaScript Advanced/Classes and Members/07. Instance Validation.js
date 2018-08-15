class CheckingAccount {
    constructor(clientId,email,firstName,lastName){
        if(clientId.match(/^[0-9]{6}$/)){
            this.clientId = clientId
        } else {
            throw new TypeError("Client ID must be a 6-digit number")
        }

        if(email.match(/^[A-Za-z0-9]+@[a-zA-Z.]+$/)){
            this.email = email
        } else {
            throw new TypeError("Invalid e-mail")
        }
        if(firstName.length>=3 && firstName.length<=20){
            if(firstName.match(/^[a-zA-Z]+$/)) {
                this.firstName = firstName
            } else {
                throw new TypeError("First name must contain only Latin characters")
            }
        } else {
            throw new TypeError("First name must be between 3 and 20 characters long")
        }
        if(lastName.length>=3 && lastName.length<=20){
            if(lastName.match(/^[a-zA-Z]+$/)) {
                this.lastName = lastName
            } else {
                throw new TypeError("Last name must contain only Latin characters")
            }
        } else {
            throw new TypeError("Last name must be between 3 and 20 characters long")
        }
        this.products = []
    }

}
let acc = new CheckingAccount('131445', 'ivan@some.com', 'Ivan', 'P3trov')
console.log(acc.clientId)
class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(val){
        this._email = val
    }

    get password(){
        return `${this._password}Atif`
    }

    set password(value){
        this._password = value
    }
}

const Atif = new User("atif@gmail.com", "abc")

console.log(Atif.email);
console.log(Atif.password);
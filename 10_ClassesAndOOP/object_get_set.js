const User = {
    _email: 'atif@gmail.com',
    _passwrod: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(val){
        this._email = val
    }
}

const tea = Object.create(User)
console.log(tea.email);

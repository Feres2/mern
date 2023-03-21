

class User  {
    constructor(password, email,PhoneNumber, lastName, firstName, _id) {
        this.password = password
        this.email = email
        this.PhoneNumber = PhoneNumber
        this.lastName = lastName
        this.firstName = firstName
        this._id = _id
    }
}

module.exports = (app) => {

    app.post("/api/user/new", (res,req)=>{
        user.push(req.body)
        res.json({message})
    }
    )
}


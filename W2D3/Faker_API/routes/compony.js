class Address {
    constructor(street,city,state,zipCode,country){
        this.street = street
        this.city = city
        this.state = state
        this.zipCode = zipCode
        this.country = country
    }
}




class Company  {
    constructor(name, address, _id) {
        this.name = name
        this._id = _id
        this.address = new Address (address.street, address.city, address.state, address.zipCode, address.country)
    }
}


module.exports = (app) => {

    app.post("/api/company/new", (res,req)=>{
        company.push(req.body)
        res.json({message})
    }
    )
}

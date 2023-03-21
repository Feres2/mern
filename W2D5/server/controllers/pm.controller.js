const manager = require("../models/pm.model")

//*RAED ALL
module.exports.findAllManagers = (request, response) =>{
    manager.find()
    .then((allDaManagers)=>{
        response.json(allDaManagers) // []
    })
    .catch((err)=>{ response.json({message: "Something went wrong", error: err})})
    }
    


module.exports.createManager = (req, res) => {

    manager.create(req.body)
    .then(newManager => {
        console.log(newManager);
        res.json(newManager);
    }).catch(err => {
        console.log(err)
        console.log("e5dem aman")
        res.status(400).json({error:err})
    })
}
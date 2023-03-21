const managerController = require("../controllers/pm.controller")
module.exports= app =>{
    app.get("/api/manager", managerController.findAllManagers);
    app.post("/api/manager", managerController.createManager);
}
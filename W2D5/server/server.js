const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;
const DB = "productManger"

// MIDDLEWARE
app.use(cors()); 

app.use(express.json(), express.urlencoded({extended:true}));
// -------------------------------------------
require("./config/mongoose.config")(DB)

// Import the routes
require("../server/routes/pm.routes")(app)
// START THE SERVER
app.listen(PORT,()=>{console.log("We have a lift off 🚀")})
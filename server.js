require('./config/db') 
const express = require('express'); 
const colors = require('colors'); 
const dotenv = require('dotenv'); 
const morgan = require("morgan"); 
const cors = require("cors");  
const app = express();                  
const authRoutes =  require("./routes/authRoute")
const categoryRoutes =  require("./routes/categoryRouters")
const productRoutes =  require("./routes/productRouter")
        
dotenv.config();
 
//port 
const port = process.env.PORT || 8080;


app.use(cors()) ;
app.use(express.json());
app.use(morgan("dev"));


app.use('/api/v1/auth' , authRoutes)
app.use('/api/v1/category' , categoryRoutes)
app.use("/api/v1/product", productRoutes);


app.get('/', (req, res) => {
    res.send("<h1>Welcome to our ecommerce app</h1>");
});

app.listen(port, () => {
    console.log(`E_Commerce app listening at http://localhost:${port}`);
})

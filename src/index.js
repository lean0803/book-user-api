const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

//Middleware
app.use(cors());
app.use(express.json());   //agar bisa membaca JSON dari req body
app.use(morgan('dev'));     //Logging request ke terminal

//Routes
app.use('/books', bookRoutes);
app.use('/users', userRoutes);

//Test endpoint
app.get('/', (req, res) =>{
    res.send('API is running');
});

//start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
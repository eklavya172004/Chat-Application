const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); 

// console.log(process.env.PORT);

const app = express();

app.use(express.json());

app.get('/',(req,res) => {
    res.send('Welcome to the chaqt app');
})

const port = process.env.PORT || 5000 

app.listen(port, () => {
    console.log(`App is running on ${port}`);
});
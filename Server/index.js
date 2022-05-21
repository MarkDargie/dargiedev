const express = require ('express');
const app = express();
const port = 3000;
const cors = require('cors');
const database = require('./Database/database');

// import and use routes
app.use(require('./Routes'));

app.get('/', (req, res)=>{
    res.send('Hello World')
});

// listen on port 3000
app.listen(port, () => {
    console.log(`DargieDev Server is running on Port ${port}`);
});


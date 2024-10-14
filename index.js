const express = require('express');
const empRouter = require('./emp');
const userRouter = require('./users');
const app = express();
const SERVER_PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user',userRouter)
app.use('/emp',empRouter)


app.listen(SERVER_PORT, () => {
    console.log('Server is running on port 3000');
})
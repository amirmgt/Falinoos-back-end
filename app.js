const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');
// const user = require('./user');


app.use(cors());
app.options('*', cors());


const api = process.env.API_URL

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));




// Router
const authRouter = require('./routes/auth');
const allquestRouter = require('./routes/allquest');
const editquestRouter = require('./routes/editquest');
const addquestRouter = require('./routes/addquest');
const userRouter = require('./routes/user');
const dashboardRouter = require('./routes/dashboard');

// router.use('/user', user);


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(`${api}/auth`, authRouter);
app.use(`${api}/all`, allquestRouter);
app.use(`${api}/accept/`, editquestRouter);
app.use(`${api}/add`, addquestRouter);
app.use(`${api}/`, userRouter);
app.use(`${api}/dashboard`, dashboardRouter);



const port = process.env.PORT || 3000;

app.listen( port, () => {
    console.log('app is running on port 3000');
});
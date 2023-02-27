const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./MealRoutes');
const cors = require('cors');

require('dotenv').config();

mongoose.set("strictQuery", false);

const PORT = 7000 || process.env.port;

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE ARE CONNECTED TO MONGO'))
.catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () => {
    console.log(`I AM LISTENING ON PORT ${PORT}`);
})

//mongodb+srv://Zhanna:<password>@cluster0.zais312.mongodb.net/?retryWrites=true&w=majority
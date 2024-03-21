const express = require('express');
const app = express();
const { connectToMongo } = require('./db');
const cors = require('cors');


app.use(cors());
app.use(express.json());

app.use("/api/v1/", require('./routes/data'));
app.use("/api/v1/",require('./routes/user.route'));


connectToMongo();



const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`listening at ${port}`);
})

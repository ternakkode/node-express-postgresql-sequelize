const express = require('express');
const app = express();

const errorHandling = require('./middleware/error')
const routes = require('./routes')

app.use(express.json());
app.use(routes)
app.use(errorHandling)

app.listen(3000, () => {
    console.log(`app running on port 3000`)
})
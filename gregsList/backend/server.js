const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const port = 3001

app.use(express.json())
app.use(cors())

const connection_url = "mongodb+srv://gouriswag1:password@cluster0.gk6vhkh.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.get('/', (req, res) => res.status.send("Hello, world"));

app.listen(port, () => console.log("listening on port", port))
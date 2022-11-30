const express = require('express')
const app = express()
const port = 3000

// Post new name
app.post('/', (req, res) => {
    res.send(res)
})

// Get all names
app.get('/', (req, res) => {
    res.get()
})

// Get names based on given starting name
app.get('/', (req, res) => {
    res.get()
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
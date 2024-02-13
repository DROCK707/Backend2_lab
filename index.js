const express = require('express')
const path = require('path');
const {getHouses} = require('./controller.js')
const {createHouse} = require('./controller.js')
const {deleteHouse} = require ('./controller.js')
const {adjustPrice} = require ('./controller.js')

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/static'));

app.get('/api/houses', getHouses)
app.get('/', (req, res) => {
    res.sendFile('static/index.html', {root: __dirname});
})

app.post('/api/houses', createHouse)

app.delete('/api/houses/:id', deleteHouse)

app.put('/api/houses/:id',adjustPrice)


app.listen(4000, () => console.log(`Server running on port 4000`))


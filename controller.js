const houses = require('./db.json');
let globalId = 4









module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        let {address, price, imageURL} = req.body

        let newHouse = {
            id: globalId,
            address,
            price,
            imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        globalId++
    },
    deleteHouse: (req,res) => {
        const {id} = req.params

        const index = houses.findIndex(home => {
            // console.log(home , id)
            return home.id === +id
        })

        houses.splice(index, 1)

        res.status(200).send(houses)
    },
    adjustPrice: (req,res) => {
        const {id} = req.params
        const {type} = req.body
        const index = houses.findIndex(home => {
            return home.id === +id
        })

        if(houses[index].price === 0 && type === "minus"){
            res.status(400).send("Price cannot be less than $0")
        } else if (type === 'plus'){
            houses[index].price += 10000
            // console.log(houses[index].price)
            res.status(200).send(houses)
        } else if (type === 'minus'){
            houses[index].price -= 10000
            // console.log(houses[index].price)
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }
    }
};
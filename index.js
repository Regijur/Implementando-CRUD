const express = require("express")

const server = express()

server.use(express.json())

const people = ['Regis', 'Ana', 'Maria', 'Bruna', 'Pedro']

server.get('/people/:index', (req, res)=>{
    const {index} = req.params;

    return res.json(people[index])
})

server.get('/people', (req,res)=>{
    return res.json(people)
})

server.post('/people', (req, res) =>{
    const {name} = req.body

    people.push(name)

    return res.json(people)
})

server.put('/people/:index', (req, res) =>{
    const {index} = req.params
    const {name} = req.body

    people[index] = name

    return res.json(people)
})

server.delete('/people/:index', (req,res) =>{
    const {index} = req.params

    people.splice[index,1];
    return res.json({message: "O curso foi deletado"})
})
server.listen(3000)
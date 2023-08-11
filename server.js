const express = require('express')
require('dotenv').config()

const mongoConfig = require('./config')
mongoConfig()

const app = express()
const pokeRoutes = require('./route/Route')
const PORT = 3000

// Load the create engine function
const jsxEngine = require('jsx-view-engine')

// const methodOverride = require('method-override')
app.set('view engine', 'jsx')

// app.use(methodOverride('_method'))

// Createthe engine and accept files ending in jsx
app.engine('jsx', jsxEngine())

// A middleware that formats the data into an object we can use on req.body
app.use(express.urlencoded({ extended: true }))

app.use('/pokemon',pokeRoutes)
app.get('/',(req,res) =>{
    res.send('<a href="/pokemon">Welcome to the Pokemon App!</a>')
})
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})
const express = require('express')
const exphbs = require('express-handlebars')
const router = require('./router')


const app = express()

app.use(router)
app.use(express.static('public'))
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')



app.listen(3000, () => {
    console.log('http://localhost:3000')
})
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generator = require('./generator.js')
const app = express()
const port = 3000
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})
app.post('/', (req, res) => {
  const career = req.body.options
  const results = generator(career)
  res.render('index', { results })
})

app.listen(port, () => {
  console.log(`The server listening on localhost: http://localhost:${port}`)
})

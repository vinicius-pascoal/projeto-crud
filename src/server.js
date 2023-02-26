const express = require('express');
const path = require('path');

const db = require('./database');
const routes = require('./routes');

const app = express()

//conectando ao banco de dados
db.connect()


//definindo template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//definindo arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

//habilita server para receber dados via post (formulario)
app.use(express.urlencoded({ extended: true }))

//definindo rotas
app.use('/', routes)

// 404 error (not found)
app.use((req, res) => {
  res.status(404).send('Página não encontrada!')
})

// executando o servidor
const port = process.env.PORT || 5050

app.listen(port, () => { console.log(`Servidor rodando na porta ${port}`) })

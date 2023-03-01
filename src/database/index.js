const mongoose = require('mongoose');

function connect() {

  // atualizou o mongoose o comando agr e diferente
  //mongoose.set('useNewUrlParser', true)
  //mongoose.set('useUnifiedTopology', true)

  mongoose.set('strictQuery', false);

  mongoose.connect("mongodb+srv://viniciuspascoal013:4lv5EU6dkxbnpIuW@polucl0.78hzei6.mongodb.net/projetocluster?retryWrites=true&w=majority")

  const db = mongoose.connection

  db.once('open', () => {
    console.log('MongoDB conectado com sucesso!')
  })

  db.on('error', console.error.bind(console, 'Erro ao conectar ao MongoDB:'))
}

module.exports = { connect }

const CustomersModel = require('../models/Customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'registro'

function index(req, res) {
  res.render('register', {
    title: defaultTitle
  })
}

async function add(req, res) {
  const {
    name,
    age,
    email,
    password
  } = req.body

  const passwordCrypto = await crypto(password)

  const register = new CustomersModel({
    name,
    age,
    email,
    password: passwordCrypto,
  })

  register.save()

  res.render('register', {
    title: defaultTitle,
    menssage: 'cadastro realizado com sucesso',
  })
}

async function listUsers(req, res) {
  const users = await CustomersModel.find()

  res.render('listUsers', {
    title: 'Lista de Usuários',
    users,
  })
}

module.exports = {
  index,
  add,
  listUsers,
}

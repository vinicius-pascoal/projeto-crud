function index(req, res) {
  res.render('index', {
    title: 'pagina inicial'
  })
}

module.exports = {
  index,
}

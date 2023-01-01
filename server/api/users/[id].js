module.exports = (req, res) => {
    const { id } = req.query
    res.json({
      id: id || 10086,
      name: 'shanyue',
      mobilePhone: '18800008888',
      email: 'me@shanyue.tech'
    })
  }
class DataController {
  constructor () {
    this.renderDataInterest = this.renderDataInterest.bind(this)
  }

  calculateInterest (capital, rate, years) {
    return data => (capital * (rate / 100) * years)
  }

  renderData (req, res) {
    res.render('data')
  }

  renderDataInterest (req, res) {
    const payload = req.body

    const data = [
      payload.capital,
      payload.rate,
      payload.years
    ]

    const numberData = data.map(data => parseFloat(data))

    res.render('data', {
      interest: this.calculateInterest(numberData)
    })
  }
}

module.exports = DataController

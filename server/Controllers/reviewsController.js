const Models = require('../Models/Models.js');

reviewController = {
  get: (req, res) => {
      Models.reviews.getReviews(req.body)
      .then(response => {
        res.send(response.data)
      })
      .catch(err => {
        res.send(err, 'Failed to fetch reviews!')
      })
  },
  post: (req, res) => {
    Models.reviews.postReview(req.body)
    .then(response => {
      console.log('Successfully posted review!')
      res.send(response.data)
    })
    .catch(err => {
      console.log(err, 'Failed to post review!')
      res.send(err.data)
    })
  },
  getMeta: (req, res) => {
    Models.reviews.getMeta(req.body)
    .then(response => {
      res.send(response.data)
    })
    .catch(err => res.send(err, 'Failed to fetch review metadata!'))
  }
}


module.exports = reviewController;
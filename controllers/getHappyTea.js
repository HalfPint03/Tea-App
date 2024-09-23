const fetchHappyTea = require('../models/fetchHappyTea')

function getHappyTea(req, res, next){
    fetchHappyTea().then((rows) => {
        res.status(200).send({rows})
    }).catch((err) => {
        next(err)
    })
}
module.exports = getHappyTea
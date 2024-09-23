const fetchRelaxedTea = require('../models/fetchRelaxedTea')

function getRelaxedTea(req, res, next){
    fetchRelaxedTea().then((rows) => {
        res.status(200).send({rows})
    }).catch((err) => {
        next(err)
    })
}
module.exports = getRelaxedTea
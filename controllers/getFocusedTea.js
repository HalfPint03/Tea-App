const fetchFocusedTea = require('../models/fetchFocusedTea')

function getFocusedTea(req, res, next){
    fetchFocusedTea().then((rows) => {
        res.status(200).send({rows})
    }).catch((err) => {
        next(err)
    })
}
module.exports = getFocusedTea
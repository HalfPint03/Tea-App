const fetchEnergisedTea = require('../models/fetchEnergisedTea')

function getEnergisedTea(req, res, next){
    fetchEnergisedTea().then((rows) => {
        res.status(200).send({rows})
    }).catch((err) => {
        next(err)
    })
}
module.exports = getEnergisedTea
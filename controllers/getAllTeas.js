const fetchAllTeas = require("../models/fetchAllTeas");

function getAllTeas(req, res, next){
    fetchAllTeas().then((rows) => {
        res.status(200).send({rows})
    }).catch((err) => {
        next(err)
    })
}
module.exports = getAllTeas
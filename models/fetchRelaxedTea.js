const db = require("../db/connection");

function fetchRelaxedTea(){
    return db.query('SELECT * FROM relaxed_teas;').then(({rows}) => {
        const teaIndex = Math.floor(Math.random() * rows.length)
        return rows[teaIndex]
    })
}
module.exports = fetchRelaxedTea
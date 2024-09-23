const db = require("../db/connection");

function fetchEnergisedTea(){
    return db.query('SELECT * FROM energised_teas;').then(({rows}) => {
        const teaIndex = Math.floor(Math.random() * rows.length)
        return rows[teaIndex]
    })
}
module.exports = fetchEnergisedTea
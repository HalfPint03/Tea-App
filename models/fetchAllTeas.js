const db = require("../db/connection");

function fetchAllTeas(){
    return db.query('SELECT * FROM all_teas;').then(({rows}) => {
        return rows
    })
}
module.exports = fetchAllTeas
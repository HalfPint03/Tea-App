const db = require("../db/connection");

function fetchFocusedTea(){
    return db.query('SELECT * FROM focused_teas;').then(({rows}) => {
        const teaIndex = Math.floor(Math.random() * rows.length)
        return rows[teaIndex]
    })
}
module.exports = fetchFocusedTea
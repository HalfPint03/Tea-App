const db = require("../db/connection");

function fetchHappyTea(){
    return db.query('SELECT * FROM happy_teas;').then(({rows}) => {
        const teaIndex = Math.floor(Math.random() * rows.length)
        return rows[teaIndex]
    })
}
module.exports = fetchHappyTea
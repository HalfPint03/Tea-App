const express = require("express");
const app = express();
const cors = require("cors");
const {getAllTeas, getEnergisedTea, getFocusedTea, getHappyTea, getRelaxedTea} = require('./controllers/index')

app.use(cors());

app.use(express.json())

app.get('/api/teas', getAllTeas)

app.get('/api/energised_tea', getEnergisedTea)

app.get('/api/focused_tea', getFocusedTea)

app.get('/api/happy_tea', getHappyTea)

app.get('/api/relaxed_tea', getRelaxedTea)

app.use((err, request, response, next) => {
    if (err.code === "22P02" || err.code === "23502" || err.code === "23503") {
      response.status(400).send({ message: "Bad Request" });
    }
    next(err);
  });
  app.use((err, request, response, next) => {
    if (err.status && err.message) {
      response.status(err.status).send({ message: err.message });
    }
    next(err);
  });
  app.use((err, request, response, next) => {
    response.status(500).send({ message: "Internal Server Error" });
  });


module.exports = app
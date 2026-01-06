// Load environment variables FIRST
require("dotenv").config({
  path: ".env.production"
});

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const errorController = require("./controllers/errorController");
const exchangeRouter = require("./routers/exchangeRouter");
const exchangeRateService = require("./service/ExchangeRateService");



const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());


app.use('/api', exchangeRouter);
app.use(errorController.get404);

// Server port
const PORT = process.env.PORT || 3005;

async function init() {
  await exchangeRateService.getRates();

  app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
 });
}

init();


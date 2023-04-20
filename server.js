const express = require("express");
const api = require("./api.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the decisionEngine.html file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/decisionEngine.html");
});

// Serve the css file
app.get("/decisionEngine.css", (req, res) => {
  res.sendFile(__dirname + "/decisionEngine.css");
});


// Post data 
let loanData = {};

app.post("/", async (req, res) => {
  const { creditModifiers, loanSum, loanPeriod } = req.body;
  loanData = { creditModifiers, loanSum, loanPeriod };
  try {
    const result = await api.calculateLoan(
      creditModifiers,
      loanSum,
      loanPeriod
    );
    res.send(result);
    console.log(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Just in case to get a separate JSON api endpoint for the calculated decision 
app.get("/calculate-loan", (req, res) => {
  const { creditModifiers, loanSum, loanPeriod } = loanData;
  const result = api.calculateLoan(creditModifiers, loanSum, loanPeriod);
  res.json(result);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

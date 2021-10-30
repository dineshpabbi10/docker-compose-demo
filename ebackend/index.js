const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

const products = [
  {
    name: "product 1",
    price: "10$",
  },
  {
    name: "product 2",
    price: "20$",
  },
  {
    name: "product 3",
    price: "30$",
  },
];
app.get("/getlist", (req, res) => {
  res.status(200).send(products);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

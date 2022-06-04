const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

let data = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (req, res) => res.json(data));
app.get("/info", (req, res) => {
  let info = `Phonebook has info for ${data.length} people
    ${new Date()}
    `;
  res.send(info);
});
app.get("/api/persons/:id", (req, res) => {
  let id = req.params.id;
  let person = data.find((p) => p.id === Number(id));
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});
app.delete("/api/persons/:id", (req, res) => {
  let id = req.params.id;
  data = data.filter((p) => p.id !== id);
  res.status(204).end();
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

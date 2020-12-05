const express = require("express");
const cors = require("cors");

const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json({ repositories });
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body

  const repository = { id: uuid(), title, url, techs, likes: 0 }

  repositories.push(repository)

  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body

  const foundRepository = repositories.findIndex((repository) => repository.id === id)

  if(!foundRepository) {
    return response.status(400).json({ error: 'Repository not found.'}); 
  }

  const repository = { title, url, techs }

  repositories[findIndex] = repository;

  return response.json(foundRepository);
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;

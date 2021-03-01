import express, { response } from "express";

const app = express();

app.get("/", (request, response) => {
  // return response.send("Hello Word");  --> Retornando mensagem
  return response.json({ message: "Hello Word" }); // Retornando um JSON
});

app.post("/", (request, response) => {
  return response.json({ message: "Dados salvos com sucesso!" });
});

app.listen(3333, () => console.log("Server is running!"));

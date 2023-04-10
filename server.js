var express = require("express");
const userRoute = require("./routes/users");
const fs = require("fs"),
  swaggerFile = require("./swagger_output.json"),
  swaggerUi = require("swagger-ui-express");
var app = express();
var PORT = 8000;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function logger(request, response, next) {
  let log = `${new Date()}, ${request.method}, ${request.url}, ${
    request.body
  } \n`;
  fs.appendFile("./LOGGING.log", log, (err) => {
    if (err) throw err;
    console.log(log);
  });
  next();
}
app.use(logger);

// Registra os endpoints de users
app.use("/api/users", userRoute);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// {
// res.json({ Mensagem: "Servidor Ok" });
// });

app.use((req, res) => {
  res.status(404);
  res.send("Endpoint não existe.");
});

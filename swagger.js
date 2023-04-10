const swagger_auto_gen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./server.js"];

const doc = {
  info: {
    title: "Minha API",
    description: "CRUD de usuário UniNassau",
  },
  host: "localhost:8000",
  schemes: ["http"],
};

swagger_auto_gen(outputFile, endpointsFiles, doc);

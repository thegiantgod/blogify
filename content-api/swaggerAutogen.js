const swaggerAutogen = require("swagger-autogen")();
const outputFile = "./swagger-output.json";
const endpointsFiles = ["./routes/index.js", "./routes/users.js", "./routes/posts.js"];
const config = {}
swaggerAutogen(outputFile, endpointsFiles, config);
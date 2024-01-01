const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require("./middleware/errorHandler.js");
const port = 3000;
// Configuracion Middleware con el Servidor de Autorización -> http://localhost:3000/api/biblioteca

const autenticacion= auth({
    audience: 'http://localhost:3000/api/biblioteca',
    issuerBaseURL: 'https://dev-xl3sc5wpvp4jm16o.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });

const app = express();
app.use(express.json());
// Importamos el Router de Libros
const librosRouter = require("./routes/libros.js");
//Configuramos el middleware de autenticacion
app.use("/api/biblioteca", autenticacion, librosRouter);
app.use(errorHandler);


app.listen(port, ()=> {
    console.log(`Servidor funcionando en el pueto http://localhost:${port}`)
});
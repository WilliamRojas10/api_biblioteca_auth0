const mongoose = require("mongoose")
//conexion a mongo de docker mediante host y puerto
mongoose.connect("mongodb://localhost:27017/biblioteca");


//bd: biblioteca. coleccion: libross
const LibroSchema = new mongoose.Schema({
    titulo: String,
    autor: String
}, { collection: 'libros' })

const Libro = mongoose.model("Libro", LibroSchema);

module.exports = Libro;
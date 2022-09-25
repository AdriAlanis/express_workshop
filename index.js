const express = require('express');
const app = express();

/*
Verbos HTTP
Get : normalmente regresa una pagina web
Post : cuando te registras en una pag
Patch : actualización de un dato de un recurso en especifico
Put : modifica todos los elementos de la misma tabla
Delete : elimina un registro
*/

app.get("/", (req, res, next) => {
    res.status(200);
    res.send("Bienvenido");
});

app.listen(3000, () => {
    console.log("Server is running...");
});
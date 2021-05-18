const express = require("express");
const path = require("path");
const app = express();
const PUERTO = 3456;
const usuarios =[];
function newUsers(nombre, password){
    this.nombre = nombre;
    this.password = password;
}

// Middleware para archivos de imagen, css, scripts, etc ("recursos estáticos")
app.use(express.static(path.join(__dirname, "client")))

// Middleware para poner el contenido de un form post en req.body
app.use(express.urlencoded({ extended: true}));

// GET inicial, retorna la página index.html
app.get("/", function(req, res){
    res.sendFile((path.join(__dirname, "client/index.html")))
});

// GET register, pagina de registro de usuario
app.get("/register", function(req, res){
    res.sendFile(path.join(__dirname, "client/register.html"))
});

//POST login, hace validaciones de los registros con datos contenidos en array usuarios
app.post("/login", function(req, res){
    for (let index = 0; index < usuarios.length; index++) {
        if(usuarios[index].nombre == req.body.usuario && usuarios[index].password == req.body.password){
        res.sendFile(path.join(__dirname, "client/home.html"));
        };        
    }        
});

// POST register, hace validaciones y redirecciona o muestra alerta en caso de errores
app.post("/register", function(req, res){
    if(!req.body.usuario || !req.body.password || !req.body.passwordRepeat || req.body.password !== req.body.passwordRepeat){
        res.sendFile(path.join(__dirname, "client/register.html"))
    }
    else{
        usuarios.push(new newUsers(req.body.usuario, req.body.password));
        res.sendFile(path.join(__dirname, "client/index.html"))
    }
});

app.listen(PUERTO, ()=> console.log(`Escuchando en puerto ${PUERTO}...`));






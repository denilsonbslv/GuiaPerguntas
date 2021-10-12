const express = require("express");
const app = express();

// Estou dizendo para o Express usar o EJS como view engine
app.set('view engine','ejs');

app.get("/", (req, res) => {
    var nome = "denilson";
    var lang = "Python";
    var exibirMsg = false;

    var Produtos = [
        {nome: "Doritos",preco: 3.15},
        {nome: "Coca-cola",preco: 4},
        {nome: "Leite",preco: 1.45}
    ]

    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Iskista Atakado",
        inscritos: 15,
        msg: exibirMsg,
        produtos: Produtos
    });
});

app.listen(8080, ()=>{
    console.log("App rodando!")
});
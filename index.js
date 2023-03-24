const express = require('express')
const app = express()

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})


const lista = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];

app.get("/herois", function(req, res) {
    res.send(lista);
});

app.get("/herois/:id", function(req, res) {
    const id = req.params.id;
    const item = lista[id]
    res.send(item);
});

app.post("/herois", function(req, res){
    const item = req.body.nome;

    lista.push(item);

    res.send("O item foi adicionado com suscesso " + item + " na lista " );

});

app.put("/herois/:id", function(req, res) {
    
    const id = req.params.id;

    const item = req.body;

    lista[id] = item.nome;
    
    res.send("Item atualizado com sucesso");
});


app.delete("/herois/:id", function(req, res) {
    const id = req.params.id;
    
    delete lista[id];

    res.send("Item deletado com sucesso");
});


app.listen(3000);
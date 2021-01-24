const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('./models/home');
const Home = mongoose.model('Home');

app.use(express.json());
mongoose.connect('mongodb://localhost/Luci', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com o mongo DB realizada com sucesso!");
}).catch((err) => {
    console.log("Erro: Nao conseguiu conexão com o mongo DB com sucesso." + err);

});

app.get('/', (req, res) => {
    res.json({ name: "Luci Lua" });
});

app.post('/home', async(req, res) => {

    const homeExiste = await Home.findOne({});
    if (homeExiste) {
        return res.status(400).json({
            error: true,
            message: "Erro: a página home já possui um registro"
        });

    }



    Home.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: Conteudo da pagina home nao cadastrado com sucesso."
        });
    });

    return res.json({
        error: false,
        message: " Conteudo da pagina home cadastrado com sucesso!"
    });
});

app.listen(8080, () => {
    console.log("servidor iniciado na porta 8080: http://localhost:8080");

});
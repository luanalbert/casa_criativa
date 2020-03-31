const express =  require("express")
const server = express()
// requeri requirir algo que esta sendo exportado
const db = require("./db.js")


// configurar arquivos  estaticos ( css, script, imagens)
server.use(express.static("./public"))

//habilitar uso do req.body
server.use(express.urlencoded({ extended: true}))

//configuração do nun jucck (instalar i nunjucks)
const nunjucks = require("nunjucks")
nunjucks.configure("views",{ 
    express: server,
    noCache: true,
}) 
// criei uma rota /
// e capturo o pedido do cliente para responder
server.get("/", function(req, res) {  

 db.all('SELECT * FROM ideas', function(err, rows) {
    if(err){
        
        }
    const reverseIdeas = [...rows].reverse()
   
    let lastideas = []
    for (idea of reverseIdeas){
        if(lastideas.length < 2) {
            lastideas.push(idea)
        }
    }
   

    return res.render("index.html", {ideas: lastideas});
    })
 })


server.get("/ideias", function(req, res) {

    db.all('SELECT * FROM ideas', function(err, rows) { 
        if(err){
        
        }
        const reverseIdeas = [...rows].reverse()
    
        return res.render("ideias.html", {ideas: reverseIdeas});
    })

})

server.post("/", function(req, res){
      //inserir dados na tabela
const query =`
   INSERT INTO ideas (
       image,
       title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?);
   `
    const values =  [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link,
        
      ]

   db.run(query, values, function(err) {
        if(err){
        
        }

        return res.redirect("/ideias")
   })

   
    
})


    
// liguei meu servidor na porta 3000
server.listen(3000) 
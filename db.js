// instalar com npm i sqlite3
//verbose se comunicar com a gente
// new = criando um novo objeto 

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./aula.db') 

// db.serialize(function(){
    
//     // Criar uma tabela

//     db.run(`
//     CREATE TABLE IF NOT EXISTS ideas(
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//         image TEXT,
//         title TEXT,
//         category TEXT,
//         description TEXT,
//         link TEXT
//        );`
  //   )
  //   // o crase possibilida escrever separado sem perder sua função

  
  //   })
  // //   //deletar um dado da tabela
  // //   db.run('DELETE FROM ideas WHERE id = ?', [1], function(err){
  // //     if (err) return console.log(err)

  // //  console.log("DELETEI",this)
  // //   })
  //    //db.run vai fazer nossa tabela com 3 valores nos quais os 2 primeiros
  //   //sao quais são e os seus valores e a terceira, vai ser um função de callback
  //   //ela vai ser a função que fara apos o "run" colocar as 2 primeiras "aki no caso o query e o valor"
  //  // essa função vai ter que fazer uma pergunta "sim ou não"
   
   
   
   

    //consultar dados na tabela
   db.all('SELECT * FROM ideas', function(err, rows) {
    if(err) return console.log(err)

    console.log(rows)})
   module.exports = db

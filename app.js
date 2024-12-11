// const express = require('express');
// const app = express();
// const port = 3000;

// // Обработка GET запросов
// app.get('/', (req, res) => {
//   res.send(`GET параметры: ${JSON.stringify(req.query)}`);
// });

// // Обработка POST запросов
// app.use(express.json()); // для обработки JSON в теле запроса
// app.use(express.urlencoded({ extended: true })); // для обработки URL-encoded данных

// app.post('/', (req, res) => {
//   res.send(`POST тело: ${JSON.stringify(req.body)}`);
// });


// // Выдача статического контента
// app.use(express.static('public')); // Предполагается папка 'public' в той же директории


// // Обработка ошибки 404
// app.use((req, res) => {
//   res.status(404).send('Страница не найдена');
// });


// app.listen(port, () => {
//   console.log(`Сервер запущен на порту ${port}`);
// });


var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(express.static("./static"))

app.get('/', function (req, res) {
  res.send(req.query);
});

app.post('/', function (req, res) {
  res.send(req.body);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

const catchNotFound= function(req, res){
  res.send("not found"
  )

}
  
app.get('*', catchNotFound);
app.post('*', catchNotFound);

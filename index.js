// Importamos librerías pertinentes
var express = require("express");
var bodyParser = require('body-parser')

// Configuración
var app = express();
app.use( bodyParser.json() ); 
app.listen(3000, () => {});

// Definición del método deseado
app.post("/fibonacci", (req, res, next) => {
   let n2=1, n1=0;
   let num = req.body.numero;
   
   if (num == 0) {
   	n1 = num
   	res.json(n1)
   } else if (num == 1 || num == 2) {
   	n1 = 1
   	res.json(n1)
   } else {
	for (let j = 0;; j++) {
		n2 += n1;
		n1 = n2 - n1;
		if (j == num)
			break;
	}
   	res.json(n1);
   }
   console.log('Resultado: ', n1)
});

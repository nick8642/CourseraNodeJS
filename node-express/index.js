const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');


const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use('/dishes',dishRouter);


// // with same req,res this will be called next
// app.get('/dishes/:dishId',(req,res,next)=>{
//     res.end('Will send you details of  the dish : '+ req.params.dishId);
    
// });


// // if request is post then after app.all this will be executed
// app.post('/dishes/:dishId',(req,res,next)=>{
//     res.statusCode = 403;
//     res.end('POST operation not supported on /dishes/ ' + req.params.dishId);
// });


// app.put('/dishes/:dishId',(req,res,next)=>{

//     res.write('Updating the dish :'+ req.params.dishId + '\n');
//     res.end('Will update the dish : '+ req.body.name + 'with details '+ req.body.description);
// });

// app.delete('/dishes/:dishId',(req,res,next)=>{
//     res.end('deleting  dish :'+ req.params.dishId);
    
// });





app.use((req,res,next)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Hello</h1></body></html>');

});


const server = http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`Server running at port${port} with hostname : ${hostname}`);
});
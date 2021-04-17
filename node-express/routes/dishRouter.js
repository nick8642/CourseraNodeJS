const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
//first this is called
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();

})
// with same req,res this will be called next
.get((req,res,next)=>{
    res.end('Will send you all the dishes');
    
})
// if request is post then after app.all this will be executed
.post((req,res,next)=>{
    res.end('Will add this dish : ' + req.body.name  + ' with details : ' + req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes ');
})
.delete((req,res,next)=>{
    res.end('Will delete all the dishes !');
    
});


module.exports = dishRouter;
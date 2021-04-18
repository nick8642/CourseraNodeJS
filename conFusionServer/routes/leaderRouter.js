const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
//first this is called
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();

})
// with same req,res this will be called next
.get((req,res,next)=>{
    res.end('Will send you all the leaders to you!');
    
})
// if request is post then after app.all this will be executed
.post((req,res,next)=>{
    res.end('Will add the leaders: ' + req.body.name  + ' with details: ' + req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders ');
})
.delete((req,res,next)=>{
    res.end('Will delete all the leaders!');
    
});



leaderRouter.route('/:leaderId')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send you details of the leader: '+ req.params.leaderId + ' to you!');
    
})
.post((req,res,next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on /leaders/' + req.params.leaderId);
})
.put((req,res,next)=>{

    res.write('Updating the leader: '+ req.params.leaderId + '\n');
    res.end('Will update the leader: '+ req.body.name + ' with details '+ req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting leader: '+ req.params.leaderId);
    
});


module.exports = leaderRouter;
const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/server.config');
// const BaseError = require('./errors/Base.error');
const connectToDB = require('./config/db.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.text());

app.use('/api', apiRouter);

// If any request comes and route start with /api, we map it to apiRouter

app.get('/ping', (req,res) => {
     return res.json({message: 'Problem service is alive'});
});

// last middleware
app.use(errorHandler);

app.listen(PORT, async () => {
    console.log(`Server started at PORT: ${PORT}`);
    await connectToDB();
    console.log("Succesffully connected to db");
}); 
//    try {
    //        throw new BaseError("Not Found", 404, "Resource not found", {});   
    //       // 1. opened a db connection
    //       // 2. queried on db, but u wrong syntax query
    //       // 3. Exception will be thrown
    //    } catch(error) {
    //     // log the error
    //     console.log("something went error",error.name,);  // exception handling
    //    } finally {
    //     // close the db connection
    //     console.log("executed finally")  // always happen
    //    }

// error or exception handling is imp because the thing is that if we can handle exception then program get stop

// example 

/*
     async function fun() {
        try {
        await fetch("http://localhost:3002");
        } catch(error) {
            console.log("something went wrong", error);
        }
     }

     func()  
*/
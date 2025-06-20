# Code problem setting service



## How routing is working in the project

     -/api/v1/problems/ping
       - because the route starts with /api
        /api            -> /v1    -> /problems                  -> /ping
        apiRouter -> v1Router -> problemRouter -> problemController


// last middleware controller, it will collect the request and send it to the service layer, express js is unopinated framework, so for meaning and sense

var appRouter = function(app,https) {

  app.get("/data", function(req, res) {
    console.log("LØYE");
    var responseObject;
    var options = {
        host: 'jsonplaceholder.typicode.com',
        path: '/posts/1',
        method: 'GET',
        headers: {},
        rejectUnauthorized:false

        };

          var responseString = '';

      var req = https.request(options, function(result) {
        result.setEncoding('utf-8');

         responseString = '';

        result.on('data', function(data) {
          responseString += data;
        });

        result.on('end', function() {
          console.log(responseString);
           responseObject = JSON.parse(responseString);
          //success(responseObject);
          res.send(responseObject);
        });
      });

    //  req.write(dataString);
      req.end();

  });
}

module.exports = appRouter;

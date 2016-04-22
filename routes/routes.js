var appRouter = function(app) {

  app.get("/data", function(req, res) {
      res.send("Hello World");
  });
}

module.exports = appRouter;

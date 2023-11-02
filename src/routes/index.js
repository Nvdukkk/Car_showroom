 function route(app) {
  app.get("/", (req, res) => {
    res.render("home");
  });

  app.get("/news/:slug", (req, res) => {
    res.send("news detail");
  });
    
  app.get("/news", (req, res) => {
    res.render("news");
  });
    
  app.get("/upload", (req, res) => {
    res.render("upload");
  });
}

export default route;

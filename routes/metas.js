module.exports = (app) => {
  const metasControllers = require("../controllers/metasControllers.js");
  app.get("/metas", (req, res) => {
    metasControllers.getMetas(app, req, res);
  });
  app.post("/metas", (req, res) => {
    metasControllers.createMetas(app, req, res);
  });
  app.put("/metas", (req, res) => {
    metasControllers.updateMetas(app, req, res);
  });
  app.delete("/metas/:id", (req, res) => {
    metasControllers.deleteMetas(app, req, res);
  });
};

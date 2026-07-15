module.exports = (app) => {
  const atividadesControllers = require("../controllers/atividadesControllers");
  app.get("/atividades", (req, res) => {
    atividadesControllers.getAtividades(app, req, res);
  });
  app.post("/atividades", (req, res) => {
    atividadesControllers.createAtividade(app, req, res);
  });
  app.put("/atividades/:id", (req, res) => {
    atividadesControllers.updateAtividade(app, req, res);
  });
  app.delete("/atividades/:id", (req, res) => {
    atividadesControllers.deleteAtividade(app, req, res);
  });
};

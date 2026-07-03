module.exports = (app) => {
  const caixaControllers = require("../controllers/caixaControllers");
  app.get("/caixa", (req, res) => {
    caixaControllers.getCaixa(app, req, res);
  });
  app.post("/caixa", (req, res) => {
    caixaControllers.setCaixa(app, req, res);
  });
  app.delete("/caixa/:id", (req, res) => {
    caixaControllers.deleteCaixa(app, req, res);
  });
  app.post("/faturamento", (req, res) => {
    caixaControllers.setFaturamento(app, req, res);
  });
};

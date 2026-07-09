module.exports = (app) => {
  const campanhasControllers = require("../controllers/campanhasControllers");
  app.get("/campanhas", (req, res) => {
    campanhasControllers.getCampanhas(app, req, res);
  });
  app.post("/campanhas", (req, res) => {
    campanhasControllers.createCampanha(app, req, res);
  });
  app.put("/campanhas", (req, res) => {
    campanhasControllers.updateCampanha(app, req, res);
  });
  app.delete("/campanhas/:id", (req, res) => {
    campanhasControllers.deleteCampanha(app, req, res);
  });
};

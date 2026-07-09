const campanhasModels = require("../models/campanhasModels");

module.exports.getCampanhas = async (app, req, res) => {
  const campanhas = await campanhasModels.getCampanhas();

  if (campanhas == false) {
    return res.status(500).json({
      success: false,
      message: "Error get campanhas",
    });
  }

  return res.status(200).json({
    success: true,
    data: campanhas,
  });
};
module.exports.createCampanha = async (app, req, res) => {
  const data = {
    dateInit: new Date(req.body.dateInit),
    dateFinish: new Date(req.body.dateFinish),
    name: req.body.name,
    canal: req.body.canal,
    value_inv: req.body.value_inv,
    interessados: req.body.interessados,
    vendas: req.body.vendas,
    cpi: req.body.value_inv / req.body.interessados,
    cpv: req.body.value_inv / req.body.vendas,
  };

  const campanhaCreated = await campanhasModels.createCampanha(data);
  if (campanhaCreated == false) {
    return res.status(500).json({
      success: false,
      message: "Error create campanha",
    });
  }

  return res.status(201).json({
    success: true,
    data: campanhaCreated,
  });
};
module.exports.updateCampanha = async (app, req, res) => {
  const id = req.body.id_campanha;
  const data = {
    dateInit: new Date(req.body.dateInit),
    dateFinish: new Date(req.body.dateFinish),
    name: req.body.name,
    canal: req.body.canal,
    value_inv: req.body.value_inv,
    interessados: req.body.interessados,
    vendas: req.body.vendas,
    cpi: req.body.value_inv / req.body.interessados,
    cpv: req.body.value_inv / req.body.vendas,
  };

  const campanhaUpdated = await campanhasModels.updateCampanhas(id, data);
  if (campanhaUpdated == false) {
    return res.status(500).json({
      success: false,
      message: "Error update campanha",
    });
  }

  return res.status(200).json({
    success: true,
    data: campanhaUpdated,
  });
};
module.exports.deleteCampanha = async (app, req, res) => {
  const id = req.params.id;
  const campanhaDeleted = await campanhasModels.deleteCampanha(id);

  if (campanhaDeleted == false) {
    return res.status(500).json({
      success: false,
      message: "Error delete campanhas",
    });
  }

  return res.status(200).json({
    success: true,
    data: campanhaDeleted,
  });
};

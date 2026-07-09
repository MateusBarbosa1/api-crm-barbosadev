const caixaModels = require("../models/caixaModels");

module.exports.getCaixa = async (app, req, res) => {
  const caixa = await caixaModels.getCaixa();
  if (caixa == false) {
    return res.status(500).json({
      success: false,
      message: "Error find box",
    });
  }
  return res.status(200).json({
    success: true,
    data: caixa,
  });
};
module.exports.setCaixa = async (app, req, res) => {
  const data = {
    data: req.body.data,
    faturamento: req.body.faturamento,
    lucro: req.body.faturamento - req.body.despesas,
    despesas: req.body.despesas,
  };

  const caixa = await caixaModels.setCaixa(data);
  if (caixa == false) {
    return res.status(500).json({
      success: false,
      message: "Error creating box",
    });
  }
  return res.status(201).json({
    success: true,
    data: caixa,
  });
};
module.exports.deleteCaixa = async (app, req, res) => {
  const id = req.params.id;
  const caixaDeleted = await caixaModels.deleteCaixa(id);

  if (!caixaDeleted) {
    return res.status(500).json({
      success: false,
      message: "Error delete caixa",
    });
  }
  return res.status(200).json({
    success: true,
    message: "Delete OK",
  });
};
module.exports.setFaturamento = async (app, req, res) => {
  const data = req.body;
  const caixa = await caixaModels.setFaturamento(data.id, data.faturamento);
  if (caixa == false) {
    return res.status(500).json({
      success: false,
      message: "Error set 'faturamento'",
    });
  }
  return res.status(200).json({
    success: true,
    data: caixa,
  });
};
module.exports.setDespesas = async (app, req, res) => {
  const data = req.body;
  const caixa = await caixaModels.setDespesas(data.id, data.despesas);
  if (caixa == false) {
    return res.status(500).json({
      success: false,
      message: "Error set 'Despesas'",
    });
  }
  return res.status(200).json({
    success: true,
    data: caixa,
  });
};

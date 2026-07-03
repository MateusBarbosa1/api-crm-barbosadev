const caixaModels = require("../models/caixaModels");

module.exports.getCaixa = async (app, req, res) => {
  const caixa = await caixaModels.getCaixa();
  if (caixa == false) {
    res.status(500).json({
      success: false,
      message: "Error find box",
    });
  }
  res.status(200).json({
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
    res.status(500).json({
      success: false,
      message: "Error creating box",
    });
  }
  res.status(201).json({
    success: true,
    data: caixa,
  });
};
module.exports.deleteCaixa = async (app, req, res) => {
  const id = req.params.id;
  const caixaDeleted = await caixaModels.deleteCaixa(id);

  if (!caixaDeleted) {
    res.status(500).json({
      success: false,
      message: "Error delete caixa",
    });
  }
  res.status(200).json({
    success: true,
    message: "Delete OK",
  });
};
module.exports.setFaturamento = async (app, req, res) => {
  const data = req.body;
  const caixa = await caixaModels.setFaturamento(data.id, data.faturamento);
  if (caixa == false) {
    res.status(500).json({
      success: false,
      message: "Error set 'faturamento'",
    });
  }
  res.status(200).json({
    success: true,
    data: caixa,
  });
};

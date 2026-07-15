const atividadesModel = require("../models/atividadesModel");

module.exports.getAtividades = async (app, req, res) => {
  try {
    const atividades = await atividadesModel.getAtividades();
    if (atividades === false) {
      return res.status(500).json({
        success: false,
        message: "Error find atividades",
      });
    }
    return res.status(200).json({
      success: true,
      data: atividades,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Unexpected error" });
  }
};
module.exports.createAtividade = async (app, req, res) => {
  try {
    const data = req.body;
    const atividadeCreated = await atividadesModel.createAtividade(data);
    if (atividadeCreated === false) {
      return res.status(500).json({
        success: false,
        message: "Error create atividade",
      });
    }
    return res.status(201).json({
      success: true,
      data: atividadeCreated,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Unexpected error" });
  }
};

module.exports.updateAtividade = async (app, req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const atividadeUpdated = await atividadesModel.updateAtividade(id, data);
    if (atividadeUpdated === false) {
      return res.status(500).json({
        success: false,
        message: "Error update atividade",
      });
    }
    return res.status(200).json({
      success: true,
      data: atividadeUpdated,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Unexpected error" });
  }
};
module.exports.deleteAtividade = async (app, req, res) => {
  try {
    const id = req.params.id;
    const atividadeDeleted = await atividadesModel.deleteAtividade(id);
    if (atividadeDeleted === false) {
      return res.status(500).json({
        success: false,
        message: "Error delete atividade",
      });
    }
    return res.status(200).json({
      success: true,
      data: atividadeDeleted,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Unexpected error" });
  }
};

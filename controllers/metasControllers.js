const metasModel = require("../models/metasModel.js");

module.exports.getMetas = async (app, req, res) => {
  const metas = await metasModel.getMetas();
  if (metas == false) {
    res.status(500).json({
      success: false,
      message: "Error find 'metas'",
    });
  }
  res.status(200).json({
    success: true,
    data: metas,
  });
};
module.exports.createMetas = async (app, req, res) => {
  const data = req.body;

  const meta = await metasModel.createMeta(data);

  if (meta == false) {
    res.status(500).json({
      success: false,
      message: "Error create 'meta'",
    });
  }
  res.status(201).json({
    success: true,
    data: meta,
  });
};
module.exports.updateMetas = async (app, req, res) => {
  const id = req.body.id;
  const data = req.body.data;

  const metaUpdated = await metasModel.updateMetas(id, data);
  if (metaUpdated == false) {
    res.status(500).json({
      success: false,
      message: "Error update meta",
    });
  }

  res.status(200).json({
    success: true,
    data: metaUpdated,
  });
};
module.exports.deleteMetas = async (app, req, res) => {
  const id = req.params.id;

  const metaDeleted = await metasModel.deleteMeta(id);
  if (metaDeleted == false) {
    res.status(500).json({
      success: false,
      message: "Error delete meta",
    });
  }

  res.status(200).json({
    success: true,
    data: metaDeleted,
  });
};

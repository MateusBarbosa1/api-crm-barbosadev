const metasModel = require("../models/metasModel.js");

module.exports.getMetas = async (app, req, res) => {
  try {
    const metas = await metasModel.getMetas();

    if (metas === false) {
      return res.status(500).json({
        success: false,
        message: "Error find 'metas'",
      });
    }

    return res.status(200).json({
      success: true,
      data: metas,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Unexpected error" });
  }
};

module.exports.createMetas = async (app, req, res) => {
  try {
    const data = req.body;
    const meta = await metasModel.createMeta(data);

    if (meta === false) {
      return res.status(500).json({
        success: false,
        message: "Error create 'meta'",
      });
    }

    return res.status(201).json({
      success: true,
      data: meta,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Unexpected error" });
  }
};

module.exports.updateMetas = async (app, req, res) => {
  try {
    const id = req.body.id;
    const data = req.body.data;

    const metaUpdated = await metasModel.updateMetas(id, data);

    if (metaUpdated === false) {
      return res.status(500).json({
        success: false,
        message: "Error update meta",
      });
    }

    return res.status(200).json({
      success: true,
      data: metaUpdated,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Unexpected error" });
  }
};

module.exports.deleteMetas = async (app, req, res) => {
  try {
    const id = req.params.id;

    const metaDeleted = await metasModel.deleteMeta(id);

    if (metaDeleted === false) {
      return res.status(500).json({
        success: false,
        message: "Error delete meta",
      });
    }

    return res.status(200).json({
      success: true,
      data: metaDeleted,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Unexpected error" });
  }
};

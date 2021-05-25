import db from "../../../models";
import { logger, defValues } from "../../../utils";

const Model = db.usuario;
/*
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
*/
export const postUser = () => async (req, res) => {
  const data = req.body;
  const def = defValues();
  const values = {
    ...data,
    ...def,
  };
  try {
    const data = await Model.create(values);

    if (data) {
      res.status(200).json({ data: data });
    } else {
      throw new Error("No se creo el usuario");
    }
  } catch (error) {
    logger.error(error.message);
    res.status(202).json({ error: error.message });
  }
};

export const getByUser = () => async (req, res) => {
  try {
    const usuario = req.params.usuario;

    const data = await Model.findOne({
      where: {
        usuario,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "createdUsu", "updatedUsu"],
      },
    });

    if (data) {
      res.status(200).json({ data: data });
    } else {
      throw new Error("No se encontro el usuario");
    }
  } catch (error) {
    logger.error(error.message);
    res.status(202).json({ error: error.message });
  }
};

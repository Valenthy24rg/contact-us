import db from "../database/db.js";
import { DataTypes } from "sequelize";

const FormModel = db.define('contact_us_forms',  {
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  phone: { type: DataTypes.INTEGER },
  email_select: { type: DataTypes.BOOLEAN },
  phone_select: { type: DataTypes.BOOLEAN },
  message: { type: DataTypes.STRING },
})

export default FormModel;
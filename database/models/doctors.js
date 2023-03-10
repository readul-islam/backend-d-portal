"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Doctors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    models.Doctors.belongsTo(models.Departments,{
      foreignKey: 'department_id',
      as:'department'
    })

    models.Doctors.belongsTo(models.Hospitals,{
      foreignKey: 'hospital_id',
      as:'hospital'
    })
    models.Doctors.hasOne(models.Appointments,{
      foreignKey: 'doctor_id',
      as:'doctor'
    })
    }
  }
  Doctors.init(
    {
      name: DataTypes.STRING,
      contactNo: DataTypes.STRING,
      education: DataTypes.STRING,
      designation: DataTypes.STRING,
      img: DataTypes.STRING,
      basicCharges: DataTypes.STRING,
      followupCharges: DataTypes.STRING,
      followupRange: DataTypes.STRING,
      departmentId: {
        field:'department_id',
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "departments",
          },
          key: "id",
        },
      },
      experience:DataTypes.STRING,
      hospitalId: {
        type: DataTypes.INTEGER,
        field:'hospital_id',
        references: {
          model: {
            tableName: "hospitals",
          },
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Doctors",
      tableName: "doctors",
    }
  );
  return Doctors;
};

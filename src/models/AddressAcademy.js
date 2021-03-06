const { Model, DataTypes } = require("sequelize");

class AddressAcademy extends Model {
  static init(sequelize) {
    super.init(
      {
        cep: DataTypes.STRING,
        street: DataTypes.STRING,
        state: DataTypes.STRING,
        city: DataTypes.STRING,
        number:DataTypes.STRING
      },
      {
        tableName: "address_academy",
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.AdministratorAcademy, { foreignKey: "academy_id" });
  }
}

module.exports = AddressAcademy;

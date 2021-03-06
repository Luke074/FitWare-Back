const { Model, DataTypes } = require("sequelize");

class UserStudent extends Model {
  static init(sequelize) {
    super.init(
      {
        first_name: DataTypes.STRING,
        surname: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image_profile: DataTypes.STRING,
        weight: DataTypes.STRING,
        height: DataTypes.STRING,
        cpf: DataTypes.STRING,
        birth_date: DataTypes.DATEONLY,
        celular: DataTypes.STRING,
        gender: DataTypes.STRING,
        contact_type: DataTypes.STRING,

      },
      {
        tableName: "user_students",
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasOne(models.AddressStudent, { foreignKey: "student_id" });
    this.hasOne(models.ContactType, { foreignKey: "student_id" });
    
    this.belongsToMany(models.Schedule, {through: "schedule_student"});
    this.belongsToMany(models.AdministratorAcademy, {through: "student_academy"});
  }
}

module.exports = UserStudent;

const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type :DataTypes.UUID,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Imagen :{
      type:DataTypes.STRING,
      allowNull:false
    },
    Vida:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    Ataque : {
      type:DataTypes.STRING,
      allowNull:false,
    },
    Defensa : {
      type:DataTypes.STRING,
      allowNull:false,
    },
    Velocidad : {
      type:DataTypes.STRING,
      allowNull:false
    },
    Altura: {
      type: DataTypes.FLOAT(),
      allowNull:false
    },
    Peso: {
      type: DataTypes.DOUBLE() ,
      allowNull:false,
    },

  },
  {freezeTableName:true ,timestamps:false}
  );
};
    
    

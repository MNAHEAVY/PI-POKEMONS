const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    image: {
      type: DataTypes.STRING,
      
    },
    name: {
      type: DataTypes.STRING,
    
    },
    life: {
      type: DataTypes.INTEGER,
      
    },
    strength: {
      type: DataTypes.INTEGER,
      
    },
    defense: {
      type: DataTypes.INTEGER,
     
    },
    velocity: {
      type: DataTypes.INTEGER,
     
    },
    height: {
      type: DataTypes.INTEGER,
      
    },
    weight: {
      type: DataTypes.INTEGER,
      
    },
  
  });
};


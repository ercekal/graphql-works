export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isAlphanumeric: {
          args: true,
          message: 'username can only contain numbers and letters',
        },
        len: {
          args: [3, 20],
          message: 'can only be between 3-20 letters',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          message: 'please anter a valid email',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [5, 20],
          message: 'can only be between 5-20 letters',
        },
      },
    },
  });

  User.associate = (models) => {
    User.belongsToMany(models.Team, {
      through: 'member',
      foreignKey: 'user_id',
    });
    User.belongsToMany(models.Channel, {
      through: 'channel_member',
      foreignKey: 'user_id',
    });
  };

  return User;
};

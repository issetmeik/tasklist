import dotenv from 'dotenv';
dotenv.config();

module.exports = {
  dialect: `${process.env.DB_DIALECT}`,
  host: `${process.env.DB_HOST}`,
  username: `${process.env.DB_USER}`,
  password: `${process.env.DB_PWD}`,
  database: `${process.env.DB_NAME}`,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

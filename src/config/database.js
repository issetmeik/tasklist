module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'YOU_USERNAME',
  password: 'YOU_PASSWORD',
  database: 'tasklist',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

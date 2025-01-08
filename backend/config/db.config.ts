export default {
  HOST: "195.250.20.169",
  USER: "mintlabs",
  PASSWORD: "mintlabs",
  DB: "aramco",
  // HOST: "localhost",
  // USER: "root",
  // PASSWORD: "root",
  // DB: "leaderbord",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

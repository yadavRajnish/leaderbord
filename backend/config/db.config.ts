export default {
  HOST: "195.250.20.169",
  USER: "mintlabs",
  PASSWORD: "mintlabs",
  DB: "aramco",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

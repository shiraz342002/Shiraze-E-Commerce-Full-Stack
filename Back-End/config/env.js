const environment = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  mongodbUri: process.env.DB_URI || "mongodb://localhost:27017/ShirazFabrics",
  jwtSecret:process.env.DB_URI || "johncena"
};

export default environment;

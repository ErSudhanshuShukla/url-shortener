import "dotenv/config";

const config = {
  MONGODB_URI: process.env.MONGODB_URI,
  PORT: process.env.PORT,
  BASE_URL: process.env.BASE_URL,
};

export default config;

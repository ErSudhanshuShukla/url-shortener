import "dotenv/config";

const config = {
  MONGODB_URI: process.env.MONGODB_URI,
  PORT: process.env.PORT || 3000,
  BASE_URL: process.env.BASE_URL,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
};

export default config;

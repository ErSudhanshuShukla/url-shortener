import app from "./app.js";
import connectDB from "./config/db.js";
import config from "./config/config.js";

await connectDB();

app.listen(config.PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${config.PORT}`);
});
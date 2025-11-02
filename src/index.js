const { ServerConfig, Logger } = require("./config");
const apiRoutes = require("./routes");
const express = require("express");

const app = express();
app.use(express.json());

app.use("/api", apiRoutes);

app.listen(ServerConfig.Port, () => {
  console.log(`Server is running on port ${ServerConfig.Port}`);
});

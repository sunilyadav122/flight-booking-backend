const { Port } = require("./config");
const apiRoutes = require("./routes");
const express = require("express");

const app = express();
app.use(express.json());

app.use("/api/v1", apiRoutes);

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});

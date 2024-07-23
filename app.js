const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const userRoutes = require("./routes/userRoutes");
const articleRoutes = require("./routes/articleRoutes");
const likeRoutes = require("./routes/likeRoutes");
const viewRoutes = require("./routes/viewRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());

app.use("/users", userRoutes, notificationRoutes);
app.use("/articles", articleRoutes, likeRoutes, viewRoutes);

app.listen(PORT, () => {
  console.log(`Server started at port - ${PORT}`);
});

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const clothingRoutes = require("./routes/clothingRoutes");

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(cors);
app.use(express.json());

app.use("/api/admins", adminRoutes);
app.use("/api/users", userRoutes);
app.use("/api/clothings", clothingRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

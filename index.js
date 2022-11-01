const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const authRouter = require("./api/routes/authRouter");
const userRouter = require("./api/routes/userRouter");
require("./api/config/db").connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/********--ROUTES--********/

// Route for authentication
app.use("/auth", authRouter);

// Route for user handling
app.use("/user", userRouter);

app.listen(8000, () => {
  console.log("Server is listening at 8000");
});

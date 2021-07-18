const express = require("express");
const mongoose = require("mongoose");
const DBconnectionUrl = require("./config/keys");
const app = express();
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");
const boydParser = require("body-parser");
const passport = require("passport");

//Body parser middleware
app.use(boydParser.urlencoded({ extended: false }));
app.use(boydParser.json());

//DB configuration
const db = require("./config/keys").mongoURI;

//Connect to mongoDB
mongoose
  .connect(DBconnectionUrl.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

//passport middleware
app.use(passport.initialize());

//passport Config
require("./config/passport.js")(passport);

//Use Routes
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profile", profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} `));

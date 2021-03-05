require("dotenv").config();
const massive = require("massive");
const express = require("express");
const session = require("express-session");
const {
  login,
  logout,
  register,
  userSession,
} = require("./controllers/authController");
const { deleteProfile, updateZip } = require("./controllers/profileController");
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
const app = express();

app.use(express.static(`${__dirname}/../build`));
app.use(express.json());

// const path = require("path");
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // One week
    },
  })
);

app.post("/api/login", login);
app.post("/api/register", register);
app.get("/api/session", userSession);

//user_id required
app.get("/api/logout", logout);
app.delete("/api/profile/:id", deleteProfile);
app.put("/api/profile/:id", updateZip);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((db) => {
    app.set("db", db);
    console.log("All your base are belong to us");
    app.listen(SERVER_PORT, () => {
      console.log(`Server is listening on port ${SERVER_PORT}`);
    });
  })
  .catch((error) => {
    console.log(
      error,
      "An error occurred while trying to establish a server. Please scroll up to view the error"
    );
  });

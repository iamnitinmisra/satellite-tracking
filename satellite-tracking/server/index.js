require("dotenv").config();
const massive = require("massive");
const express = require("express");
const session = require("express-session");
const {
  login,
  logout,
  register,
  userSession
} = require("./controllers/authController");
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("All your base are belong to us");
});

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 // One week
    }
  })
);

app.post('/api/login', login)
app.post('/api/register', register)
app.get('/api/session', userSession)

//user_id required
app.get('/api/logout', logout)

app.listen(SERVER_PORT, () =>
  console.log(`Listening on server port ${SERVER_PORT}`)
);

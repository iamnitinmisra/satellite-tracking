const bcrypt = require("bcrypt");
const axios = require("axios");

module.exports = {
  //async
  login: async (req, res, next) => {
    const db = req.app.get("db");
    const { password, email } = req.body;

    const foundUser = await db
      .select_user(email)
      .catch((err) => console.log(err));
    if (!foundUser.length) {
      res
        .status(401)
        .send({ message: "That username/password does not exist" });
    } else {
      const matchedPassword = await bcrypt
        .compare(password, foundUser[0].password)
        .catch((err) => console.log(err));

      if (matchedPassword) {
        foundUser[0];
        req.session.user = {
          user_id: foundUser[0].user_id,
          user_email: foundUser[0].user_email,
          user_zip: foundUser[0].zip,
          user_lat: foundUser[0].lat,
          user_lng: foundUser[0].lng,
        };
        return res.status(200).send(req.session.user);
      } else {
        return res
          .status(401)
          .send({ message: "That username/password does not exist" });
      }
    }
  },

  //async
  register: async (req, res, next) => {
    const db = req.app.get("db");
    const { password, email, zip } = req.body;
    const zipData = await axios
      .get(
        `https://www.zipcodeapi.com/rest/xb6Ouqgn8iSRHStMqNjzotS7F7iHkfGynZiPBNDecCP2ueSyv5nF7cCcK6veARY0/info.json/${zip}/degrees`
      ) //not my api key"
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
    const lat = zipData.lat;
    const lng = zipData.lng;

    await db.select_user(email).then(([foundUser]) => {
      if (foundUser) {
        res.status(409).send({ warning: "That email is already registered" });
      } else {
        const saltRounds = 12;
        bcrypt.genSalt(saltRounds).then((salt) => {
          bcrypt.hash(password, salt).then((hashedPassword) => {
            db.create_user([hashedPassword, email])
              .then((user) => {
                db.create_profile([user[0].user_id, zip, lat, lng]).then(
                  ([user]) => {
                    res.sendStatus(200);
                  }
                );
              })
              .catch((err) => console.log(err));
          });
        });
      }
    });
  },
  logout: (req, res, next) => {
    req.session.destroy();
    // console.log("USER LOGOUT - Session Destroyed");
    return res.sendStatus(200);
  },

  userSession: (req, res, next) => {
    return res.status(200).send(req.session.user);
  },
};

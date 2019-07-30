const bcrypt = require("bcrypt");

module.exports = {
  //async
  login: async (req, res, next) => {
    const db = req.app.get("db");
    const { password, email } = req.body;

    const foundUser = await db
      .select_user(email)
      .catch(err => console.log(err));
    if (!foundUser.length) {
      res.status(401).send("That username or password does not exist");
    } else {
      const matchedPassword = await bcrypt
        .compare(password, foundUser[0])
        .catch(err => console.log(err));

      if (matchedPassword) {
        foundUser[0];
        req.session.user = {
          user_id: foundUser[0].user_id,
          user_email: foundUser[0].user_email
        };
        res.status(200).send(req.session.user);
      } else {
        res.status(401).send("That username or password does not exist");
      }
    }
  },

  //async
  register: async (req, res, next) => {
    const db = req.app.get("db");
    const { password, email } = req.body;
    await db.select_user(email).then(([foundUser]) => {
      //check here for async error
      console.log(foundUser);
      if (foundUser) {
        res.status(409).send("That email is already registered");
      } else {
        const saltRounds = 12;
        bcrypt.genSalt(saltRounds).then(salt => {
          bcrypt.hash(password, salt).then(hashedPassword => {
            db.create_user([hashedPassword, email]).then(([user]) => {
              req.session.user = user;
              res.status(200).send(req.session.user);
            });
          });
        });
      }
    });
  },
  logout: (req, res, next) => {
    res.session.destroy();
    res.status(200).send([]);
  },
  userSession: (req, res, next) => {
    res.status(200).send(req.session.user);
  }
};

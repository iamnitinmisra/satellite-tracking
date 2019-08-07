const axios = require("axios");

module.exports = {
  deleteProfile: (req, res) => {
    const db = req.app.get("db");
    const deleteId = req.params.id;
    req.session.destroy(); // clears out session

    db.delete_profile(deleteId)
      .then(() => res.status(200).send("deleted"))
      .catch(err => {
        console.log(err);
      });
  },

  updateZip: async (req, res) => {
    const db = req.app.get("db");
    const updateId = req.params.id;
    const updateZip = req.query.zip;
    console.log("updateId", updateId);
    console.log("updateZip", updateZip);

    //axios to external api with new zip
    const zipData = await axios
      .get(
        `https://www.zipcodeapi.com/rest/zQikoFcAnHS1gCG1Ugm9n1Wo6PDD827OePlkSIclLsqftHtUOAqNql2f2AP8EBPt/info.json/${updateZip}/degrees`
      ) //not my api key"
      .then(res => {
        return res.data;
      });
    const lat = zipData.lat;
    const lng = zipData.lng;

    db.update_zip([updateId, updateZip, lat, lng])
      .then(() => res.status(200).send("updated"))
      .catch(err => {
        console.log(err);
      });
  }
};

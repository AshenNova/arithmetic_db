const Trial = require("../models/trialModel");

exports.new = async (req, res) => {
  try {
    // Object.keys(req.body).forEach((key) => {
    //   if (req.body[key] == "") delete req.query[key];
    // });
    console.log(req.body);
    const trial = await Trial.create(req.body);
    res.status(200).json({ status: "Success" });
  } catch (e) {
    res.status(401).json({ message: e });
  }
};

exports.signup = (req, res) => {
  res.render("trial/signup");
};

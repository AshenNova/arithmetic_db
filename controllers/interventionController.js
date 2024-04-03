const Intervention = require("../models/interventionModel");
const Attempt = require("../models/attemptModel");
const schedule = require("node-schedule");
const User = require("../models/userModel");

exports.create = async (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  if (!currentUser.admin || !authenticate) {
    return res.redirect("user/login");
  }
  console.log("Creating Intervention");
  const users = await User.distinct("username");

  res.render("./intervention/create", {
    username,
    authenticate,
    currentUser,
    users,
  });
};

function updateIntervention() {
  schedule.scheduleJob("50 23 * * *", async function () {
    let start = new Date();
    start.setHours(0, 0, 0, 0);
    let end = new Date();
    end.setHours(23, 59, 59, 999);
    const today = await Attempt.find({
      date: { $gte: start, $lt: end },
      interventionID: { $exists: true },
    });
    console.log(today);
    if (today) {
      today.forEach(async (item) => {
        if (item.interventionID != "x" && item.interventionID != "") {
          const intervention = await Intervention.findById(item.interventionID);
          if (intervention.quantity == 1) {
            await Intervention.findByIdAndDelete(item.interventionID);
          } else {
          }
          await Intervention.findByIdAndUpdate(item.interventionID, {
            quantity: intervention.quantity - 1,
          });
        }
      });
    }
  });
}
updateIntervention();
exports.save = async (req, res) => {
  console.log("Saving intervention");
  try {
    if (req.params.id) {
      const update = await Intervention.findByIdAndUpdate(
        req.params.id,
        req.body
      );
    } else {
      // console.log(req);
      for (const key in req.body) {
        if (req.body[key] == "" && key != "setting") {
          console.log(key);
          delete req.body[key];
        }
      }
      console.log(req.body);
      const intervention = new Intervention(req.body);
      await intervention.save();
      console.log(intervention);
    }

    res.redirect("/intervention");
  } catch (e) {
    console.log(e);
  }
};
exports.edit = async (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  if (!currentUser.admin || !authenticate) {
    return res.redirect("user/login");
  }
  const id = req.params.id;
  const users = await User.distinct("username");
  const intervention = await Intervention.findById(id);

  res.render("./intervention/edit", {
    username,
    authenticate,
    currentUser,
    intervention,
    users,
  });
};
exports.all = async (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  if (!currentUser.admin || !authenticate) {
    return res.redirect("user/login");
  }
  console.log("Viewing Intervention");
  const interventions = await Intervention.find();

  res.render("./intervention/all", {
    username,
    authenticate,
    currentUser,
    interventions,
  });
};

exports.delete = async (req, res) => {
  console.log("Deleting intervention");
  const id = req.body.id;
  await Intervention.findByIdAndDelete(id);
  res.send("success");
};
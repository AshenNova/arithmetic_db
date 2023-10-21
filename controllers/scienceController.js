const Science = require("../models/scienceModel.js");
const User = require("../models/userModel.js");
const Attempt = require("../models/attemptModel.js");
const catchAsync = require("../utils/catchAsync");
const stream = require("stream");
const multer = require("multer");
const upload = multer();
const { google } = require("googleapis");
const bodyParser = require("body-parser");

const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

exports.getAllQuestions = catchAsync(async (req, res, next) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  console.log("Getting all questions");
  // console.log(req.query);
  if (Object.keys(req.query).length != 0) {
    console.log("QUERY DETECTED");
    Object.keys(req.query).forEach((key) => {
      if (req.query[key] == "") {
        delete req.query[key];
      }
    });
    if (req.query.question) {
      const text = req.query.question;
      req.query.question = {
        // question: {
        $regex: text,
        // $options: "i",
        // },
      };
      // console.log(req.query.question);
    }
    console.log(req.query);
    const getAllQuestions = await Science.find(req.query).sort({ date: -1 });
    res.render("./science/displayAllQuestions", {
      username,
      authenticate,
      currentUser,
      getAllQuestions,
    });
    // } catch (e) {
    //   res.status(400).json({ status: "Failed", message: e });
    // }
  } else {
    // try {
    const getAllQuestions = await Science.find().sort({ date: -1 }).limit(20);
    res.render("./science/displayAllQuestions", {
      username,
      authenticate,
      currentUser,
      getAllQuestions,
    });
    // } catch (e) {
    //   res.status(400).json({ status: "Failed", message: e });
    // }
  }

  // res.status(200).json({ message: "Well come to science!" });
});

exports.extraPracticeQuestions = catchAsync(async (req, res, next) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  let extra = req.user.incorrectScience;
  // console.log(extra);
  console.log("Getting extra questions");
  console.log(extra);
  if (extra.includes("")) {
    const index = extra.indexOf("");
    extra.splice(index, 1);
    await User.findByIdAndUpdate(req.user._id, { incorrectScience: extra });
  }
  // try {
  const extraQuestions = await Science.find({ _id: { $in: extra } });
  // console.log(extraQuestions);
  res.render("./science/extraPracticeQuestions", {
    username,
    authenticate,
    currentUser,
    extraQuestions,
  });
  // } catch (e) {
  //   res.status(400).json({ status: "Failed", message: e });
  // }
  // res.status(200).json({ message: "Well come to science!" });
});

exports.createQuestion = async (req, res) => {
  console.log("Creating Questions");
  //   res.status(200).json({ message: "Creating new question" });
  let topic = await Science.distinct("topic");
  let subtopic = await Science.distinct("subtopic");
  if (subtopic.includes("")) {
    const index = subtopic.indexOf("");
    console.log(index);
    subtopic.splice(index, 1);
  }
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  res.render("./science/scienceQuestion", {
    username,
    authenticate,
    currentUser,
    topic,
    subtopic,
  });
};

const GOOGLE_API_SCIENCE_FOLDER_ID = process.env.GOOGLE_API_SCIENCE_FOLDER_ID;
console.log(`Environment: ${process.env.NODE_ENV}`);

let auth;
if (process.env.NODE_ENV == "DEVELOPMENT") {
  auth = new google.auth.GoogleAuth({
    keyFile: "./googlekey.json",
    scopes: ["https://www.googleapis.com/auth/drive"],
  });
} else {
  auth = new google.auth.GoogleAuth({
    keyFile: "./google-credentials.json",
    scopes: ["https://www.googleapis.com/auth/drive"],
  });
}

async function uploadFile(imagePath) {
  const bufferStream = new stream.PassThrough();
  bufferStream.end(imagePath.buffer);
  const { data } = await google.drive({ version: "v3", auth }).files.create({
    media: {
      mimeType: imagePath.mimeType,
      body: bufferStream,
    },
    requestBody: {
      name: imagePath.originalname,
      parents: [GOOGLE_API_SCIENCE_FOLDER_ID],
    },
    fields: "id,name",
  });
  console.log(`Uploaded file ${data.name} ${data.id}`);
  return data.id;
}

exports.saveQuestion = async (req, res) => {
  if (!req.user.admin) {
    return res.redirect("/science/topics");
  }
  console.log(req.body);
  // NORMAL SAVE
  try {
    if (!req.body.questionID) {
      if (req.body.topic[1] == "Select") {
        req.body.topic = req.body.topic[0];
      } else {
        req.body.topic = req.body.topic[1];
      }
      if (req.body.subtopic[1] == "Select") {
        req.body.subtopic = req.body.subtopic[0];
      } else {
        req.body.subtopic = req.body.subtopic[1];
      }
      req.body.level = req.body.level.toLowerCase();

      // FOR IMAGES
      console.log(req.files);
      // try {
      const { body, files } = req;
      // if (files)
      console.log(body);
      console.log(files.length);
      if (files.length != 0) {
        if (files.length == 1) {
          if (files[0].fieldname == "imageQ") {
            const imageQ = await uploadFile(files[0]);
            req.body.imageQ = imageQ;
          }
          if (files[0].fieldname == "imageA") {
            const imageA = await uploadFile(files[0]);
            req.body.image = imageA;
          }
        } else {
          const imageQ = await uploadFile(files[0]);
          req.body.imageQ = imageQ;
          const imageA = await uploadFile(files[1]);
          req.body.image = imageA;
        }
      }
      const newQuestion = await Science.create(req.body);
      console.log(newQuestion);
      console.log("Question saved");
      let data = {};
      data.newQuestion = newQuestion;
      // console.log(data);
      // res.send(JSON.parse(data));
      // data = JSON.stringify(data);
      // console.log(data);
      res.send(data);

      // res.redirect("/science/new");

      // res.send(JSON.stringify(data));
    } else {
      // SAVE EDITS

      console.log("Trying to save previous question");
      const { body, files } = req;
      if (req.body.topic[1] == "Select") {
        req.body.topic = req.body.topic[0];
      } else {
        req.body.topic = req.body.topic[1];
      }
      if (req.body.subtopic[1] == "Select") {
        req.body.subtopic = req.body.subtopic[0];
      } else {
        req.body.subtopic = req.body.subtopic[1];
      }
      req.body.level = req.body.level.toLowerCase();
      if (files.length != 0) {
        if (files.length == 1) {
          if (files[0].fieldname == "imageQ") {
            const imageQ = await uploadFile(files[0]);
            req.body.imageQ = imageQ;
          }
          if (files[0].fieldname == "imageA") {
            const imageA = await uploadFile(files[0]);
            req.body.image = imageA;
          }
        } else {
          const imageQ = await uploadFile(files[0]);
          req.body.imageQ = imageQ;
          const imageA = await uploadFile(files[1]);
          req.body.image = imageA;
        }
      }
      const updates = req.body;
      // Object.keys(updates).forEach((key) => {
      //   if (obj[key] == "") {
      //     delete obj[key];
      //   }
      // });
      const question = await Science.findByIdAndUpdate(
        req.body.questionID,
        updates
      );
      console.log(question);
      res.send();
    }
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

exports.getTopic = async (req, res) => {
  if (!req.user.subject.includes("Primary Science") && !req.user.admin) {
    return res.redirect("/user/login");
  }
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  try {
    let topic_p3 = [];
    let topic_p4 = [];
    let topic_p5 = [];
    let topic_p6 = [];
    let age = new Date().getFullYear() - currentUser.DOB.getFullYear();
    console.log(age);
    const everything = await Science.find();
    everything.forEach((item) => {
      item.level = item.level.toLowerCase();
      if (item.level == "p3" && !topic_p3.includes(item.topic) && age >= 8)
        topic_p3.push(item.topic);
      if (item.level == "p4" && !topic_p4.includes(item.topic) && age >= 9)
        topic_p4.push(item.topic);
      if (item.level == "p5" && !topic_p5.includes(item.topic) && age >= 10)
        topic_p5.push(item.topic);
      if (item.level == "p6" && !topic_p6.includes(item.topic) && age >= 11)
        topic_p6.push(item.topic);
    });
    // const topics = await Science.distinct("topic");

    res.render("./science/getTopic", {
      username,
      authenticate,
      currentUser,
      topic_p3,
      topic_p4,
      topic_p5,
      topic_p6,
    });
  } catch (e) {
    res.status(400).json({ status: "Failed", message: e });
  }
};

exports.getQuestions = async (req, res) => {
  console.log("Sent topic, querying for questions");
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;
  let limit = req.body.numberOfQuestions;
  try {
    console.log(req.body);
    const [p3, p4, p5, p6] = await Promise.all([
      Science.find({ level: "p3", topic: req.body.topic_p3 }).lean(),
      Science.find({ level: "p4", topic: req.body.topic_p4 }).lean(),
      Science.find({ level: "p5", topic: req.body.topic_p5 }).lean(),
      Science.find({ level: "p6", topic: req.body.topic_p6 }).lean(),
    ]);
    // const p3 = await Science.find({ topic: req.body.topic_p3, level: "p3" });
    // const p4 = await Science.find({ topic: req.body.topic_p4, level: "p4" });
    // const p5 = await Science.find({ topic: req.body.topic_p5, level: "p5" });
    // const p6 = await Science.find({ topic: req.body.topic_p6, level: "p6" });

    const questionsDB = p3.concat(p4, p5, p6);
    let questions = [];
    let questionsIdArr = [];

    // SET NUMBER OF QUESTIONS
    if (limit > questionsDB.length) limit = questionsDB.length;

    //FIND IF THE CURRENT USER HAS ANY PREVIOUSLY INCORRECT QUESTIONS
    const incorrectQuestionsId = (await User.findById(currentUser._id))
      .incorrectScience;
    console.log(incorrectQuestionsId);
    const chosenId =
      incorrectQuestionsId[
        Math.floor(Math.random() * incorrectQuestionsId.length)
      ];
    console.log(chosenId);
    if (chosenId) {
      const incorrectQuestion = await Science.findById(chosenId.toString());
      console.log(incorrectQuestion);
      questions.push(incorrectQuestion);
      questionsIdArr.push(incorrectQuestion._id);
    }

    // console.log(questionsIdArr);
    //FILL UP WITH OTHER QUESTIONS
    while (questions.length < limit) {
      const chosenQuestion =
        questionsDB[Math.floor(Math.random() * questionsDB.length)];
      const index = questionsDB.indexOf(chosenQuestion);
      questionsDB.splice(index, 1);
      // console.log(chosenQuestion._id);
      if (!questionsIdArr.includes(chosenQuestion._id))
        questions.push(chosenQuestion);
    }
    // console.log(questions);
    // res.status(200).json({ status: "Success", message: e });
    res.render("./science/displayQuestions", {
      username,
      authenticate,
      currentUser,
      questions,
      limit,
    });
  } catch (e) {
    res.status(400).json({ status: "Failed", message: e });
  }
};

exports.updateUserScience = async (req, res) => {
  console.log("Received!");
  // const arrStr = req.body;
  console.log(req.body);
  console.log(req.body.incorrect);

  const currentUser = req.user;
  const list = currentUser.incorrectScience;
  // console.log(currentUser);
  console.log(list);
  if (req.body.correct) {
    req.body.correct.forEach((item) => {
      if (list.includes(item)) {
        const index = list.indexOf(item);
        list.splice(index, 1);
      }
    });
  }
  if (req.body.incorrect) {
    req.body.incorrect.forEach((item) => {
      if (!list.includes(item)) {
        list.push(item);
      }
    });
  }
  console.log(currentUser);
  let name = currentUser.username.split(" ");
  let nameArr = [];
  console.log(name);
  name.forEach((item) => {
    console.log(item);
    item = item.charAt(0).toUpperCase() + item.slice(1);
    nameArr.push(item);
  });
  const finalUserName = nameArr.join(" ");
  console.log(finalUserName);
  const attempt = await Attempt.create({
    user: finalUserName,
    subject: "Science",
    summary: "",
    score: req.body.questions,
  });
  const updating = await User.findByIdAndUpdate(
    currentUser._id,
    { incorrectScience: list },
    { new: true }
  );
  res.send();
};

exports.viewScience = async (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;

  const id = req.params.id;
  console.log(id);
  // let question;
  // if (id == 0) {
  //   question = await Science.findOne().sort({ date: -1 });
  // } else {
  //   question = await Science.findById(id);
  // }
  const question = await Science.findById(id);

  res.render("./science/viewQuestion", {
    username,
    authenticate,
    currentUser,
    question,
  });
};

exports.editScience = async (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;

  let topic = await Science.distinct("topic");
  let subtopic = await Science.distinct("subtopic");
  if (subtopic.includes("")) {
    const index = subtopic.indexOf("");
    console.log(index);
    subtopic.splice(index, 1);
  }

  const id = req.params.id;
  console.log(id);
  const question = await Science.findById(id);

  res.render("./science/editQuestion", {
    username,
    authenticate,
    currentUser,
    question,
    topic,
    subtopic,
  });
};

exports.deleteScience = catchAsync(async (req, res, next) => {
  console.log("Deleting Science question");
  const id = req.params.id;
  const deleteQuestion = await Science.findByIdAndDelete(id);
  res.redirect("/science");
});

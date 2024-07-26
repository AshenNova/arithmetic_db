const Graduation = require("../models/graduationModel");
const stream = require("stream");
const { google } = require("googleapis");

const GOOGLE_API_FOLDER_ID = process.env.GOOGLE_API_GRADUATION_ID;
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
      parents: [GOOGLE_API_FOLDER_ID],
    },
    fields: "id,name",
  });
  console.log(`Uploaded file ${data.name} ${data.id}`);
  return data.id;
}
exports.upload = async (req, res) => {
  let username = req.user.username;
  let authenticate = req.auth;
  let currentUser = req.user;

  res.render("graduation/upload", {
    username,
    authenticate,
    currentUser,
  });
};

exports.uploadNew = async (req, res) => {
  console.log(req.body);
  // try {
  const { body, files } = req;

  const imageID = await uploadFile(files[0]);
  console.log(imageID);
  req.body.link = imageID;
  const newGrad = await Graduation.create(req.body);
  console.log(newGrad);
  res.send("Success");
};

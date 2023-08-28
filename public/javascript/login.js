// const { login } = require("../../controllers/authController");
// import axios from "axois";

// alert("hello!");
console.log("sending..");
const login = async (username, password) => {
  console.log(username, password);
  try {
    const res = await axios({
      method: "POST",
      url: "localhost:3000/user/login",
      data: {
        username,
        password,
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err.response.data);
  }
};
document.querySelector("#submitForm").addEventListener("submit", (e) => {
  console.log("Submitting");
  e.preventDefault();
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  login(username, password);
});

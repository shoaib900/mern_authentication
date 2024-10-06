require("dotenv").config();
const User = require("../model/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password,3);

  await User.create({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });
  res.status(201).send("Registration successful");
};

// const login = async (req, res) => {
//   const user = await User.findOne({ email: req.body.email })
//     .then((user) => {
//       if (user.password === req.body.password) {
//         return res.status(200).send({ message: "Login successful" });
//       } else {
//         return res.status(400).send({ message: "Invalid password" });
//       }
//     })
//     .catch((err) => console.log(err));
//   if (!user) return res.status(400).send("Invalid email or password");
// }


const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email })

    const token = jwt.sign( {id:user._id}, process.env.privateKey,{expiresIn: "1h"})
    if(user){
      res.json({
        message:"login successfully",
        token
      })
    }


    
}

module.exports = { register, login };

import express from "express";
import User from "../models/usermodel";
import getToken from "../util";

const router = express.Router();

router.post("/createuser", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      isAdmin: false,
    });
    await user.save()
  } catch (error) {
    res.send({msg:error.message})
  }
});

router.post("/login", async (req , res) => {
  const certificate = await User.findOne({
    email: req.body.email,
    password:req.body.password
  })
  if(certificate){
    res.send({
      _id: certificate.id,
      email: certificate.email,
      name: certificate.name,
      isAdmin: certificate.isAdmin,
      token: getToken(certificate)
    })
  }else{
    res.status(401).send({msg: "email invalido o contraseña invalida"})
  }
})


export default router
'use strict'

var Plant = require('../models/plant');
var User = require('../models/user');

exports.create_user = (req,res) => {
  var new_user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });

  new_user.save((err)=>{
    if (err) return res.status(500).send(err);

    return res.status(200).send('User saved!');
  });
}

exports.create_plant = (req,res) => {
  var new_plant = new Plant({
    name: req.body.name,
    type: req.body.type,
    gender: req.body.gender,
    user_ref: req.body.user_ref,
    img: req.body.img
  });

  new_plant.save((err)=>{
    if(err) return res.status(500).send(err);
    return res.status(200).send("Plant saved!");
  });
}

exports.get_user = (req,res) => {
  User.findById({_id:req.params.id}, (err,user)=>{
    if (err) return res.status(500).send(err);
    return res.status(200).send(user);
  });
}

exports.get_users = (req,res) => {
  User.find({}, (err,users)=>{
    if (err) return res.status(500).send(err);
    return res.status(200).send(users);
  });
}

exports.get_plant = (req,res) => {
  Plant.findById({_id:req.params.id}, (err,plant)=>{
    if (err) return res.status(500).send(err);
    return res.status(200).send(plant);
  });
}

exports.get_plants_by_user = (req,res) => {
  Plant.find({user_ref:req.params.id}, (err,plants)=>{
    if (err) return res.status(500).send(err);
    return res.status(200).send(plants);
  });
}

exports.test = (req,res) => {
  return res.status(200).send("Hola mundo, PetPlant!");
}

const express = require('express');

const { resolve } = require('path');

require('dotenv').config();

const menuItem=require('./models/model.js')

const connectMongo=require('./database.js')
connectMongo();

const app = express();
const port = 3010;
app.use(express.json());

app.use(express.static('static'));

const mongoose = require('mongoose');


app.get('/menu',async(req,res)=>{
  const MenuItems=await menuItem.find()
  res.json(MenuItems) 
});

app.post('/menu',async(req,res)=>{
  try{
    const {name,description,price}=req.body;
    if (!name || !description || !price){
      res.status(400).json("please provide all the fields")
    }
   const newMenu=await menuItem.create({name,description,price})
  //  await newMenu.save()
   res.status(201).json({message:"added succesfully"})

  }
  catch(err){
    res.status(500).json("error , internal server error")
  }
})




app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

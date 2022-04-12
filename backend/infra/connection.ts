import express from 'express'
import mongoose from 'mongoose';

export const pdoRouter = express.Router()

mongoose.connect("mongodb+srv://root:root@cluster0.jpywx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', () => {
  console.log("Connection Successful!");
});
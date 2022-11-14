const firebase = require ("firebase/app");
const express = require('express');
const app = express();
const port =  process.env.PORT || 4000;

const firebaseConfig = {
    apiKey: "AIzaSyA9FpJk_IKSEi5hejrq1gwA17y8Q1XxQPM",
    authDomain: "exercise-five-914d7.firebaseapp.com",
    projectId: "exercise-five-914d7",
    storageBucket: "exercise-five-914d7.appspot.com",
    messagingSenderId: "216434598810",
    appId: "1:216434598810:web:21b74a98ad80d96da7d023"
  };

firebase.initializeApp(firebaseConfig);

const indexRoute = require('./routes/index');
const singlePostRoute = require("./routes/singlePost");
const createPostRoute = require("./routes/createPost");

app.use('/', indexRoute);
app.use('/post', singlePostRoute);
app.use('/create', createPostRoute);

app.listen(port, () => {
    console.log(`Working on port: ${port}`)
  });
const express = require('express');
const router = express.Router();

const {
    getStudent,
    createStudent,
    deleteStudent,
    updateStudent,
} = require('../conrollers/studentControllers');



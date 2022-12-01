import { Response, Request } from 'express';
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const student = require('../models/studentmodel');
const queryCondition = require('../utils/logic')

// Get all students with pagination and query
// GET /api/students
const getStudents = asyncHandler(async (req: Request, res: Response) => {
    try {
        const pageSize = parseInt(req.query.pageSize) || 0
        const pageNumber = parseInt(req.query.pageNumber) || 1
        let queryCondition = {}
        for (const [key, value] of Object.entries(req.query)) {
        if (['firstName', 'lastName', 'grade', 'division'].includes(key)) {
        queryCondition[key] = value
        }
      }
      const queries = queryCondition
      const studentPagination = await student
        .find(queries)
        .limit(pageSize)
        .skip(pageNumber - 1)
        res.status(200).send(studentPagination)
        } catch (err) {
          res.status(500).json({ message: "The student Database is not found!" })
        }
});


// Get a student by id
// GET /api/student/:id
const getStudent = asyncHandler(async (req: Request, res: Response) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error(`${req.params.id} is not a valid id`);
    }
    const students = await student.findById(req.params.id);
    if (!students) {
        res.status(404);
        throw new Error('student data not found');
    }
    res.status(200).json(students);
});

//  Delete a student by id
//  DELETE /api/student/:id
const deleteStudent = asyncHandler(async (req: Request, res: Response) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error(`${req.params.id} is not a valid id`);
    }
    const students = await student.findByIdAndDelete(req.params.id);
    if (!student) {
        res.status(404);
        throw new Error('student data not found');
    }
    res.status(200).json({
        message: `Project ${req.params.id} deleted`,
    });
});

//  Update a student by id
// PUT /api/student/:id
const updateStudent = asyncHandler(async (req: Request, res: Response) => {
    if (!req.body.student) {
        res.status(400);
        throw new Error('Student data is required');
    }
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400);
        throw new Error(`${req.params.id} is not a valid id`);
    }
    const students = await student.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!students) {
        res.status(404);
        throw new Error('student data not found');
    }
    res.json(student);
});

module.exports = {
    getStudents,
    getStudent,
    createStudent,
    deleteStudent,
    updateStudent,
};

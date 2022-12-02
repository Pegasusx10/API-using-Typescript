"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose = require('mongoose');
// export interface IStudent extends IStudent, Document {}
var studentSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
        versionKey: false
    },
    lastName: {
        type: String,
        required: true,
        versionKey: false
    },
    grade: {
        type: Number,
        required: true,
        versionKey: false
    },
    division: {
        type: String,
        required: true,
        versionKey: false
    },
});
module.exports = mongoose.models.student || mongoose.model('student', studentSchema);
// export default mongoose.model<IStudentModel>('Student', studentSchema )

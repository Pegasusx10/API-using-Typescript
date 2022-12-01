import { Schema } from "mongoose";

const mongoose = require('mongoose');
export interface IStudent {
  firstName: string;
  lastName: string;
  grade: Number;
  division: string;
}
// export interface IStudent extends IStudent, Document {}

const studentSchema: Schema = new Schema(
{
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
  })

module.exports = mongoose.models.student || mongoose.model('student', studentSchema);
// export default mongoose.model<IStudentModel>('Student', studentSchema )
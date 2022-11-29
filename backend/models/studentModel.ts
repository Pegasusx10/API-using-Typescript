const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
{
    firstname: {
      type: String,
      required: true,
      versionKey: false
    },

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

module.exports =
    mongoose.models.student || mongoose.model('student', studentSchema);

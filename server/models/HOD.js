import mongoose from "mongoose";

const HodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  highestQualification: {
    type: String,
    required: true,
  },
  yearsOfExperience: {
    type: Number,
    required: true,
  },
  noOfResearchPapers: {
    type: Number,
    required: true,
  },
  awards: {
    type: Array,
    required: true,
  },
  dateOfJoining: {
    type: String,
    required: true,
  },
  UGPassout: {
    type: String,
    required: true,
  },
  UGgrade: {
    type: String,
    required: true,
  },
  PGpassout: {
    type: String,
    required: true,
  },
  PGgrade: {
    type: String,
    required: true,
  },
});

const HOD = mongoose.model("HOD", HodSchema);

export default HOD;

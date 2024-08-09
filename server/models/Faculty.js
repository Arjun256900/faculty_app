import mongoose from "mongoose";

const FacultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    doingPhd: {
        type: Boolean,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    passoutYear: {
        type: Number,
        required: true
    },
    projects: {
        type: Array,
        required: true
    },
    percentage10th: {
        type: Number,
        required: true
    },
    percentage12th: {
        type: Number,
        required: true
    },
    doingResearch: {
        type: Boolean,
        required: true
    },
    numberOfResearchWorks: {
        type: Number,
        required: true
    },
    researchAreas: {
        type: Array,
        required: true
    },
});

const Faculty = mongoose.model("Faculty", FacultySchema);

export default Faculty;
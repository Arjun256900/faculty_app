import HOD from "../models/HOD.js";

const retrieveDetails = async (req, res) => {
  try {
    const { department, name, designation } = req.query;
  } catch (e) {
    console.log("From retrieveDetails.js : " + e.msg);
  }
};

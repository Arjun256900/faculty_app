import HOD from "../models/HOD.js";

async function retrieveHod(req, res) {
  try {
    const department = req.query.department;
    console.log("Department requested: ", department);
    const hod = await HOD.findOne({
      department: department,
    });
    if (hod) {
      console.log("HOD found: ", hod);
      res.json({ name: hod.name , email: hod.email});
    } else {
      console.log("HOD not found for department: ", department);
      res.status(404).json({ message: "HOD not found" });
    }
  } catch (error) {
    console.error("Server error: ", error);
    res.status(500).json({ message: "Server error" });
  }
}

export default retrieveHod;

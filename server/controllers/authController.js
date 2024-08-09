import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import HOD from "../models/HOD.js";
import dotenv from "dotenv";

dotenv.config();

export const registerHOD = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if user already exists
    const existingUser = await HOD.findOne({ name: name });
    console.log(existingUser);
    if(existingUser.password){
      console.log("User already exists with email: ", email);
      res.status(409).json({existingUser});
      return;
    }
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Update the user
    await HOD.updateOne({ name: name }, { $set: { email: email } });
    await HOD.updateOne({ name: name }, { $set: { password: hashedPassword } });
    // Generate and send JWT
    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log("Registered as : " + name);
    res.json({ token , existingUser});
  } catch (e) {
    console.error("Error in registerHOD : " + e.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const loginHOD = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user exists
    const user = await HOD.findOne({ email: email });
    if (!user) {
      console.log("User not found");
      res.status(404).json({ message: "User not found" });
    } else {
      // Check if password matches
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log("Incorrect password for email: ", email);
        res.status(401).json({ message: "Incorrect password" });
      } else {
        // Generate and send JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        console.log("Logged in as : " + email);
        res.json({ token });
      }
    }
  } catch (e) {
    console.error("Error in loginHOD : " + e.message);
    res.status(500).json({ message: "Server error" });
  }
};

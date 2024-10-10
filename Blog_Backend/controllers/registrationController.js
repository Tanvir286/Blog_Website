const blankFieldValidation = require("../helpers/blankFieldValidation");
const emailValidation = require("../helpers/emailValidation");
const textLengthValidation = require("../helpers/textLengthValidation");
const User = require("../models/userModel");
const emailSender = require("../helpers/emailSender");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const registrationController = async (req, res) => {
    
    const { name, email, password } = req.body;

    console.log("Request received:", { name, email, password });

    if (blankFieldValidation(name)) {
        console.log("Validation Error: Name is required");
        return res.status(400).json({ message: "Name is required" });
    } else if (textLengthValidation(name, 3)) {
        console.log("Validation Error: Minimum 3 characters needed for name");
        return res.status(400).json({ message: "Minimum 3 characters needed for name" });
    } else if (blankFieldValidation(password)) {
        console.log("Validation Error: Password is required");
        return res.status(400).json({ message: "Password is required" });
    } else if (textLengthValidation(password, 8)) {
        console.log("Validation Error: Minimum 8 characters needed for password");
        return res.status(400).json({ message: "Minimum 8 characters needed for password" });
    } else if (blankFieldValidation(email)) {
        console.log("Validation Error: Email is required");
        return res.status(400).json({ message: "Email is required" });
    } else if (!emailValidation(email)) {
        console.log("Validation Error: Invalid Email");
        return res.status(400).json({ message: "Invalid Email" });
    }

    try {
        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log("Conflict Error: Email already in use");
            return res.status(409).json({ message: "Email already in use" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Password hashed successfully");

        // Save the user data
        const userData = new User({
            name,  
            email,
            password: hashedPassword,
        });
        await userData.save();
        console.log("User data saved:", userData);

        // Generate a JWT token
        const token = jwt.sign({ email }, "abcd", { expiresIn: '1h' });
        console.log("JWT token generated:", token);

        // Send the email with the verification link
        await emailSender(email, token);
        console.log("Verification email sent to:", email);

        return res.status(200).json({ 
            message: "Registration successful. Please check your email for verification.",
            data: { email: userData.email, name: userData.name, emailVerify: userData.emailVerify }
        });
    } catch (error) {
        console.error("Registration failed:", error);
        return res.status(500).json({ message: "Registration failed. Please try again later." });
    }
};

module.exports = registrationController;

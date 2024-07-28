import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// login user 
const loginUser = async (req, res) => {

};

// token creation
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

// register user 
const registerUser = async (req, res) => {
    const { name, email, password } = req.body || {};
    try {
        // Checking if the user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }
        // email format and strong password validation
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        };

        if (password.length < 6) {
            return res.json({ success: false, message: "Password must be 6 digits of more!!" })
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        return res.json({success:true, token})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Something went wrong!!"})
    }
};

export { loginUser, registerUser };
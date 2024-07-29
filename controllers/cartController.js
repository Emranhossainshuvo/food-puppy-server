import userModel from "../models/userModel.js";

// add to cart function for users
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findOne({ _id: req.body.userId });
        let cartData = await userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        }
        else {
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Added to cart." })

    } catch (error) {
        console.log(error);
        res.json({ success: true, message: "Something went wrong!!" })
    }
};

// remove from cart function for users
const removeFromCart = async (req, res) => {

}

// get cart function for users
const getCart = async (req, res) => {

}


export { addToCart, removeFromCart, getCart }; 
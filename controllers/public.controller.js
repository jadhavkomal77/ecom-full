// publicGetAllProduct
// publicGetProductDetails

const asyncHandler = require("express-async-handler")
exports.publicGetAllProduct = asyncHandler(async (req, res) => {
    res.json({ message: "Public GetAllProduct Sucess" })
})
exports.publicGetProductDetails = asyncHandler(async (req, res) => {
    res.json({ message: "Public GetProductDetails Sucess" })
})
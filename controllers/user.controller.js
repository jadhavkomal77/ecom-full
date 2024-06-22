const asyncHandler = require("express-async-handler")

exports.userGetAllOrders = asyncHandler(async (req, res) => {
    res.json({ message: "Users Fetch Sucess" })
})
exports.userGetOrderDetails = asyncHandler(async (req, res) => {
    res.json({ message: "User GetOrderDetails Sucess" })
})
exports.userUpdatePassword = asyncHandler(async (req, res) => {
    res.json({ message: "User UpdatePassword Sucess" })
})
exports.userPlacedOrder = asyncHandler(async (req, res) => {
    res.json({ message: "User PlacedOrder Sucess" })
})
exports.userCancelOrder = asyncHandler(async (req, res) => {
    res.json({ message: "User CancelOrder Sucess" })
})

// userGetAllOrders
// userGetOrderDetails
// userUpdatePassword
// userPlacedOrder
// userCancelOrder
const router = require("express").Router()
const userController = require("./../controllers/user.controller")

router
    .get("/orders/:id", userController.userGetAllOrders)
    .get("/orders-details/:id", userController.userGetOrderDetails)
    .put("/update-password", userController.userUpdatePassword)
    .post("/placed-order", userController.userPlacedOrder)
    .put("/order-cancel/:id", userController.userCancelOrder)

module.exports = router
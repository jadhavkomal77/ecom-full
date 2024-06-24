const router = require("express").Router()
const publicController = require("./../controllers/public.controller")

router
    .get("/product", publicController.publicGetAllProduct)
    .get("/product-details/:id", publicController.publicGetProductDetails)


module.exports = router
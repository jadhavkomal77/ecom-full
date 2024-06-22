const router = require("express").Router()
const publicController = require("./../controllers/public.controller")

router
    .get("/Product", publicController.publicGetAllProduct)
    .get("/Product/:id", publicController.publicGetProductDetails)


module.exports = router
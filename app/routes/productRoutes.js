const express = require("express");
const router= express.Router();
const productController = require("../controllers/productController");

//get all products
router.get("/",productController.getProducts);

//get product by id
router.get("/:id",productController.getProductsById);

//add product 
router.post("/",productController.addProduct);

//update product by id
router.put("/:id",productController.updateProduct);

//delete product by id
router.delete("/:id",productController.deleteProduct);

module.exports = router;
const ProductRepo = require("../Repositories/productRepository");
const GlobalError = require("../utils/GlobalError");


//Get Products
exports.getProducts = async (req, res, next) => {
  try {
    const products = await ProductRepo.getProducts();
    res.json(products);
  } catch (err) {
    next(err);
  }
};


//Get products by id
exports.getProductsById = async (req, res, next) => {
  try {
    const product = await ProductRepo.getProductById(req.params.id);
    if (!product) return next(new GlobalError("Product not found", 404));
    res.json(product);
  } catch (err) {
    next(err);
  }
};


//Add products 
exports.addProduct = async (req, res, next) => {
  try {
    const { name, price, description, instock } = req.body;
    const product = await ProductRepo.addProduct({ name, price, description, instock });

    if (!product) return next(new GlobalError("Product already exists", 400));

    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};


//Update products
exports.updateProduct = async (req, res, next) => {
  try {
    const updated = await ProductRepo.updateProduct(req.params.id, req.body);
    if (!updated) return next(new GlobalError("Product doesn't exist", 404));
    res.json(updated);
  } catch (err) {
    next(err);
  }
};



//Delete Products
exports.deleteProduct = async (req, res, next) => {
  try {
    const deleted = await ProductRepo.deleteProduct(req.params.id);
    if (!deleted) return next(new GlobalError("Product doesn't exist", 404));
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    next(err);
  }
};

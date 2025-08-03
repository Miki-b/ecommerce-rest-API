const Product = require("../models/productsModel");

class ProductRepository {
  // Retrieve all products
  async getProducts() {
    try {
      return await Product.find();
    } catch (err) {
      throw err;
    }
  }

  // Retrieve a product by id
  async getProductById(id) {
    try {
      const product = await Product.findById(id);
      return product; // return null if not found
    } catch (err) {
      throw err;
    }
  }

  // Add Product
  async addProduct({ name, price, description, instock }) {
    try {
      const existingProduct = await Product.findOne({ name, description });
      if (existingProduct) {
        return null;
      }
      const product = await Product.create({ name, price, description, instock });
      return product;
    } catch (err) {
      throw err;
    }
  }

  // Update Product
  async updateProduct(id, { name, price, description, instock }) {
    try {
      const product = await Product.findById(id);
      if (!product) return null;

      product.name = name || product.name;
      product.price = price || product.price;
      product.description = description || product.description;
      product.instock = instock !== undefined ? instock : product.instock;

      const updatedProduct = await product.save();
      return updatedProduct;
    } catch (err) {
      throw err;
    }
  }

  // Delete Product
  async deleteProduct(id) {
    try {
      const product = await Product.findById(id);
      if (!product) return null;

      await Product.findByIdAndDelete(id);
      return true;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new ProductRepository();

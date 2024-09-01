import Product from "../models/Products.js"

const ProductService = {
  addProduct: async (productData) => {
    try {
      const product = new Product(productData);
      await product.save();
      return { message: "success", data: product };
    } catch (error) {
      return { message: "failed", data: error.message };
    }
  },
};

export default ProductService;

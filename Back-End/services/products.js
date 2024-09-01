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
  getAllProducts: async () => {
    try {
      const products = await Product.find();
      return { success: true, data: products };
    } catch (error) {
      console.error("Error fetching products:", error);
      return { success: false, error: "Failed to fetch products" };
    }
  }
};

export default ProductService;

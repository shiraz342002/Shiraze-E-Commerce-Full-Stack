import Product from "../models/Products.js"

const ProductService = {
  addProduct: async (productData) => {
    const product = new Product(productData);
    await product.save();
    return product;
  },
};

export default ProductService;

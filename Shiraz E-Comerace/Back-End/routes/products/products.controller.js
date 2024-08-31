import ProductService from "../../services/products.js";
import httpResponse from "../../utils/httpResponse.js";

const ProductController = {
  addProduct: async (req, res) => {
    console.log(req.body);
    
    const addResponse = await ProductService.addProduct(req.body);
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse.data);
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, addResponse.data);
    }
  }
}

export default ProductController;

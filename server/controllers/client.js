import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";

export const getProcuts = async (req, res) => {
  try {
    const products = await Product.find();
    const productWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return { ...product._doc, stat };
      })
    );
    res.status(200).json(productWithStats);
  } catch (error) {
    res.statusP(404).json({ message: error.message });
  }
};

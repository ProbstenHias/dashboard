import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    yearlySalesTotal: {
      type: Number,
      required: true,
      min: 0,
    },
    yearlyTotalSoldUnits: {
      type: Number,
      required: true,
      min: 0,
    },
    year: {
      type: Number,
      min: 2000,
    },
    monthlyData: [
      {
        month: {
          type: String,
          required: true,
        },
        totalSales: {
          type: Number,
          min: 0,
        },
        totalUnits: {
          type: Number,
          min: 0,
        },
      },
    ],
    dailyData: [
      {
        date: {
          type: String,
          min: 2,
          max: 100,
        },
        totalSales: {
          type: Number,
          min: 0,
        },
        totalUnits: {
          type: Number,
          min: 0,
        },
      },
    ],
  },
  { timestamps: true }
);

const ProductStat = mongoose.model("ProductStat", ProductStatSchema);
export default ProductStat;

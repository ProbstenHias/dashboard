import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    yearlySalesTotal: {
      type: Number,
      required: true,
      min: 0,
    },
    yearlyTotalsSold: {
      type: Number,
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

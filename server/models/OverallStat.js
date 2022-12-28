import mongoose from "mongoose";

const OverallStatSchema = new mongoose.Schema(
  {
    totalProducts: {
      type: Number,
      min: 0,
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
      required: true,
      min: 2020,
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
    salesByCategory: {
      type: Map,
      of: Number,
    },
  },
  { timestamps: true }
);

const OverallStat = mongoose.model("OverallStat", OverallStatSchema);
export default OverallStat;

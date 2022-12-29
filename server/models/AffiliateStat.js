import mongoose from "mongoose";

const AffiliateStatSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: "Transaction",
      required: true,
    },
  },
  { timestamps: true }
);

const AffiliateStat = mongoose.model("AffiliateStat", AffiliateStatSchema);
export default AffiliateStat;

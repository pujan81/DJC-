const mongoose = require("mongoose");

const GemstoneSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
   
    image_url: {
      type: String,
      required: true,
    },
}
   
);


const Gemstone = mongoose.model("Gemstone", GemstoneSchema);

module.exports = Gemstone;

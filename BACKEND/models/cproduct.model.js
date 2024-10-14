const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CProductSchema = mongoose.Schema({

    gemstone_id: {
        type: Schema.Types.ObjectId,
        ref: 'Gemstone',
        required: true
      },
    product_id: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
      } ,
  type: {
    type: String,
    }

})


const CProduct = mongoose.model("CProduct", CProductSchema);
module.exports = CProduct;


































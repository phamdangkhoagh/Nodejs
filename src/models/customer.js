const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
// shape data
const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  {
    timestamps: true,
    // statics: {
    //   findByKhoa(name) {
    //     return this.find({ name: new RegExp(name, 'i') });
    //   },
    //   findByNamee(name) {
    //     return this.find({ name: new RegExp(name, 'i') });
    //   },
    // }
  }
);

// Override all methods
customerSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
// const cat = new Kitten({ name: 'Hi Khoa' });
// cat.save();

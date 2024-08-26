const Customer = require("../models/customer");
const aqp = require("api-query-params");

const createCustomerService = async (customerData) => {
  try {
    let result = await Customer.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      description: customerData.description,
      image: customerData.image,
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createArrayCustomerService = async (arr) => {
  try {
    let result = await Customer.insertMany(arr);
    return result;
  } catch (error) {
    console.log(">>> error", error);
    return null;
  }
};

const getAllCustomersService = async (limit,page,name,queryString) => {
  try {
    let result = null;

    if (limit && page){
      let offset = (page - 1)*limit;

      const { filter} = aqp(queryString);
      delete filter.page;
      console.log(">> check filter",filter);
      result = await Customer.find(filter).skip(offset).limit(limit).exec();
      
      // if(name){
      //   result = await Customer.find(
      //     { 
      //       "name": { $regex: '.*' + name + '.*' } 
      //   }).skip(offset).limit(limit).exec();
      // }else
      // result = await Customer.find({}).skip(offset).limit(limit).exec();
    }else{
      result = await Customer.find({});
    }
    return result;
  } catch (error) {
    console.log(">>error", error);
    return null;
  }
};

const putUpdateCustomersService = async (id, email, name) => {
  try {
    let customer = await Customer.updateOne(
      { _id: id },
      { email: email, name: name }
    );

    return customer;
  } catch (error) {
    console.log(">>error", error);
    return null;
  }
};

const deleteACustomerService = async (id) => {
  try {
    let customer = await Customer.deleteById(id);

    return customer;
  } catch (error) {
    console.log(">>error", error);
    return null;
  }
};

const deleteArrayCustomerService = async (arrIds) => {
  try {
    let result = await Customer.delete({_id: { $in:arrIds}});
    return result;
  } catch (error) {
    console.log(">>> error", error);
    return null;
  }
}

module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomersService,
  putUpdateCustomersService,
  deleteACustomerService,deleteArrayCustomerService
};

const { uploadSingleFile } = require("../services/fileService");
const {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomersService,
  putUpdateCustomersService,
  deleteACustomerService,deleteArrayCustomerService
} = require("../services/customerService");

module.exports = {
  postCreateCustomer: async (req, res) => {
    let { name, address, phone, email, description } = req.body;

    let imageUrl = "";

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    } else {
      let result = await uploadSingleFile(req.files.image);
      imageUrl = result.path;
    }

    let customerData = {
      name,
      address,
      phone,
      email,
      description,
      image: imageUrl,
    };

    let customer = await createCustomerService(customerData);

    return res.status(200).json({
      errorCode: 0,
      data: customer,
    });
  },
  postCreateArrayCustomer: async (req, res) => {
    let customers = await createArrayCustomerService(req.body.customers);
    if (customers) {
      return res.status(200).json({
        errorCode: 0,
        data: customers,
      });
    } else {
      return res.status(200).json({
        errorCode: -1,
        data: customers,
      });
    }
  },
  getAllCustomersAPI: async (req, res) => {
    let results = await getAllCustomersService();
    return res.status(200).json({
      errorCode: 0,
      data: results,
    });
  },
  putUpdateCustomerAPI: async (req, res) => {
    let { email, name, id } = req.body;
    let result = await putUpdateCustomersService(id, email, name);
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },
  deleteACustomer: async (req, res) => {
    let id = req.body.id;
    console.log(id);
    let result = await deleteACustomerService(id);
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },
  deleteArrayCustomer: async (req, res) => {
    let ids = req.body.customerId;
    console.log("check id:",ids);
    let customers = await deleteArrayCustomerService(ids);
    return res.status(200).json({
      errorCode: 0,
      data: customers,
    });
  
  },
};

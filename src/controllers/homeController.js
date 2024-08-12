// const connection = require('./config/database');
const User = require('../models/user');
const {getAllUsers} = require('../services/CRUDservices');


const getHomePage = async(req,res) => {
    let results = await User.find({})
    
    return res.render('home.ejs',{listUsers: results})
}

const getABC = (req,res) => {
    res.send('Hi there!!!');
}

const getKhoa = (req,res) => {
    res.render('sample.ejs')
}

const getCreatePage = (req,res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req,res) => {
    const userId = req.params.id;
    // console.log(">> request.param",req.params,userId);
    let user = await User.findById(userId).exec();
    res.render('edit.ejs',{userEdit: user})
}

const postCreateUser = async (req,res) => {
    let email = req.body.email;
    let name = req.body.myName;
    let city = req.body.city;

    console.log(">> email =",email,">> name =",name,">> city =",city);

    await User.create({
        email: email,
        name: name,
        city: city,
    })
    res.send('create a user success');
}

const postUpdateUser = async (req,res) => {
    let email = req.body.email;
    let name = req.body.myName;
    let city = req.body.city;
    let userId = req.body.id;

    console.log('update',email,name,city,userId);

    await User.updateOne({ _id: userId },{email: email,name:name,city: city });
    res.redirect('/');
}

const postDeleteUser = async (req,res) => {
    const userId = req.params.id;
    let user = await User.findById(userId).exec();
    res.render('delete.ejs',{userEdit: user})
}

const postHandleRemoveUser = async (req,res) => {
    const id = req.body.id;

    let result = await User.deleteOne({
        _id: id
    })
    
    console.log(">> result: ",result);
    res.redirect('/');
}



module.exports = {
    getHomePage,getABC,getKhoa,postCreateUser,getCreatePage,getUpdatePage,
    postUpdateUser,postDeleteUser,postHandleRemoveUser
    
}
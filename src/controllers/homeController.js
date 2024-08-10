
const getHomePage = (req,res) => {
    
    return res.render('home.ejs')
}

const getABC = (req,res) => {
    res.send('Hi there!!!');
}

const getKhoa = (req,res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req,res) => {
    console.log(">> req.body",req.body);
    res.send('create a new user');
}

module.exports = {
    getHomePage,getABC,getKhoa,postCreateUser
}

const getHomePage = (req,res) => {
    //process data
    //call model
    res.send('Hi there!!!');
}

const getABC = (req,res) => {
    res.send('Hi there!!!');
}

const getKhoa = (req,res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,getABC,getKhoa
}
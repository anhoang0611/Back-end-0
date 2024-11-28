const getHomepage = (req, res) => {
    //process data
    //call model 
    res.send('Hello world vs')
}

const getABC = (req, res) => {
    res.send('check ABC')
}
const getHoi = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {
    getHomepage,
    getABC,
    getHoi
}

/* GET Homepage */
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const index = (req , res) => {
    res.render('index', { title: "Travlr Getaways"});
};

module.exports = {
    index
}
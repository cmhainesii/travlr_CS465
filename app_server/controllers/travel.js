/* Get Travel view */

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways'})
};

module.exports = {
    travel
}
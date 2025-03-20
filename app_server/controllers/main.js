const fs = require('fs');
const blog_data = JSON.parse(fs.readFileSync(`./data/blog_posts.json`, `utf8`));
const testimonials = JSON.parse(fs.readFileSync(`./data/testimonials.json`, `utf8`));

/* GET Homepage */
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const index = (req , res) => {
    res.render('index', { title: "Travlr Getaways", blog_data, testimonials});
};

module.exports = {
    index
}
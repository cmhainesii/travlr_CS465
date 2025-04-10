const fs = require('fs');
const main_article = JSON.parse(fs.readFileSync(`./data/about_main_article.json`, `utf8`));
const ad_data = JSON.parse(fs.readFileSync(`./data/ads.json`, `utf8`));
const sub_articles = JSON.parse(fs.readFileSync(`./data/sub_articles.json`, `utf8`));

/* Get About view */

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const about = (req, res) => {
    res.render('about', { title: 'About', main_article:  main_article[0], ad_data, sub_articles })
};

module.exports = {
    about
}
const fs = require('fs')
const latest_news = JSON.parse(fs.readFileSync(`./data/latest_news.json`, `utf8`));
const news_articles = JSON.parse(fs.readFileSync(`./data/news_articles.json`, `utf8`));
const vacation_tips = JSON.parse(fs.readFileSync(`./data/vacation_tips.json`, `utf8`));
/* Get Rooms view */

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const news = (req, res) => {
    res.render('news', { title: 'News', latest_news, news_articles, vacation_tips});
};

module.exports = {
    news
}
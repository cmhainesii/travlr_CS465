const fs = require('fs')
const contact_info = JSON.parse(fs.readFileSync(`./data/contact.json`, `utf8`));

/* Get Rooms view */

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const contact = (req, res) => {
    res.render('contact', { title: 'contact', contact_info})
};

module.exports = {
    contact
}
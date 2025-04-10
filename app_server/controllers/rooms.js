const fs = require('fs')
const roomData = JSON.parse(fs.readFileSync(`./data/rooms.json`, `utf8`));

/* Get Rooms view */

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Rooms', roomData})
};

module.exports = {
    rooms
}
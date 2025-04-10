const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: {
        'Accept' : 'application/json'
    }
}

/* Get Travel view */

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const travel = async (req, res) => {
    //console.log('TRAVEL CONTROLLER BEGIN');
    await fetch(tripsEndpoint, options)
        .then(res => res.json())
        .then(json => {
            //console.log(json);
            let message = null;
            if (!(json instanceof Array)) {
                message = 'API lookup error';
                json = [];
            } else if(!json.length) {
                message = "No trips exist in our database. How embarrassing!";
            }
            res.render('travel', {title: 'Travlr Geztaways', trips: json});
            //console.log('TRAVEL CONTROLLER AFTER RENDER');
        })
        .catch(err => {
            console.error('Error fetching trips:' ,err);
            res.status(500).send('Internal service error');
        });
        

        
}

module.exports = {
    travel
}
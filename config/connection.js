/* Set up MySQL connection */
var mysql = require('mysql2');
var connection;

/* for heroku / jawsdb */
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'x40p5pp7n9rowyv6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        port: 3306,
        user: 'lm9xqaxuuanfu5iy',
        password: 'ysvpya2sevrcr8gy!',
        database: 'fwg3uiyrzs3wv8ee'
    });
};

/* running locally */ 
// var connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'xxxxx',
//     database: 'go_fish_db',
// });

/* Make connection */
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

/* Export connection for our ORM to use */
module.exports = connection;

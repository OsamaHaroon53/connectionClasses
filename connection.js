var mysql = require('mysql');
var mongoose = require('mongoose');
let connection = null, db = null;

class Connection {
    MySQL() {
        connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'root',
            database: 'todo'
        })
        connection.connect((err) => {
            if (err) throw err;
            console.log('You are now connected...');
        });

    }
    disconnectionMySQL() {
        if (connection != null) {
            connection.end(function (err) {
                // The connection is terminated now
                if (err) throw err;
                console.log('You are now disconnected...');
            });
            connection = null;
        }
    }
    mongoDB() {
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://localhost:27017/auction', { useNewUrlParser: true })
        db = mongoose.connection;
        db.on('error', console.error.bind(console, 'CONNECTION ERROR :'));
        db.once('open', () => {
            console.log('CONNECTION OPENED!!');
            return db;
        });
    }
    disconnectionMongoDB() {
        db.close(function (err) {
            // The connection is terminated now
            if (err) throw err;
            console.log('You are now disconnected to mongoDB...');
        });

    }

}
module.exports = new Connection();
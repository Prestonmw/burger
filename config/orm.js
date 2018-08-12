var connection = require("config/connection.js");

function objectSql(ob) {
    var arr = [];

    for (var key in ob) {
        if (Object.hasProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }

    return arr.toString();
}

var orm = {
    all: function(tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    create: function(table, cols, vals, callback) {
        var queryString = "INSERT INTO " + table;

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    update: function(table, objColVals, condition, callback) {
        var queryString = "UPDATE" + table;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
};

module.exports = orm;
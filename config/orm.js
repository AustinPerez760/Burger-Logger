var connection = require("./connection.js");

var orm = {
  //All BURGERS cb = callback
  function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  // ADD BURGER
  function(addBurger, cb) {
    var queryString = `INSERT INTO burgers(burger_name,devoured) VALUES ("${addBurger}",false);`;
    console.log("Query: " + queryString);
    connection.query(queryString, [addBurger.toString()], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  // UPDATE BURGER
  function(burgerID, cb) {
    var queryString = "UPDATE burgers SET devoured=true WHERE id=?";
    connection.query(queryString, [burgerID], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
};

module.exports = orm;

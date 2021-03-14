var connection = require("./connection.js");

var orm = {
  //All BURGERS cb = callback
  selectAll(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // ADD BURGER
  addOne(addBurger, cb) {
    var queryString = `INSERT INTO burgers(burger_name,devoured) VALUES ("${addBurger}",false);`;
    console.log("Query: " + queryString);
    connection.query(queryString, [addBurger.toString()], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // UPDATE BURGER
  updateOne(burgerID, cb) {
    var queryString = "UPDATE burgers SET devoured=true WHERE id=?";
    connection.query(queryString, [burgerID], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;

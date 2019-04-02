// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
const friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/survey", (req, res) => {
    res.json(friends);
  });

  app.post("api/survey", (req, res) => {
      friends.push(req.body);
      res.json(friends)
  });
}
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

  app.post("/api/survey", (req, res) => {
      const scores = req.body.scores
      let match = {};
      for (let i = 0; i < friends.length; i++ ) {
          diff(scores, friends[i])
      }
  });
}

function submit() {
  scores = scores();
  console.log("the scores are" + scores);

  best = lowest(scores);
  console.log("best friend: " + best.name);

//   $('#match-name').text(best.name);
//   $('#match-img').attr("src", best.photo);

//   $('#result-modal').attr('visibility', 'visible');

}
function scores() {
  score = [];

  for (i=0; i<10; i++) {
    scores[i] = $('#question' + i+1).val();
  }
  return scores;
}

function diff(scores, friend) {
  sum = 0;
  for (i=0; i<10; i++) {
    sum += Math.abs(scores[i] - friend[i]);
  }
  return sum;
}

function lowest(scores) {
  lowest = diff(scores, friends[0].scores);
  match = 0;

  for (i=1; i<friends.length; i++) {
    difference = diff(scores, friends[i].scores);
    if (difference < lowest) {
      match = i;
    }
  }

  return friends[match];
}

// //friends = {
//     "name":"Putin",
//     "photo":"https://timedotcom.files.wordpress.com/2018/03/gettyimages-932825264.jpg",
//     "scores":[5,5,4,4,5,1,2,5,4,5]
//   }
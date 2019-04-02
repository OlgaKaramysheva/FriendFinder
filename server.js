// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// function submit() {
//   scores = scores();
//   console.log("the scores are" + scores);

//   best = lowest(scores);
//   console.log("best friend: " + best.name);

//   $('#match-name').text(best.name);
//   $('#match-img').attr("src", best.photo);

//   $('#result-modal').attr('visibility', 'visible');

// }
// function scores() {
//   score = [];

//   for (i=0; i<10; i++) {
//     scores[i] = $('#question' + i+1).val();
//   }
//   return scores;
// }

// function diff(scores, friend) {
//   sum = 0;
//   for (i=0; i<10; i++) {
//     sum += Math.abs(scores[i] - friend[i]);
//   }
//   return sum;
// }

// function lowest(scores) {
//   lowest = diff(scores, friends[0].scores);
//   match = 0;

//   for (i=1; i<friends.length; i++) {
//     difference = diff(scores, friends[i].scores);
//     if (difference < lowest) {
//       match = i;
//     }
//   }

//   return friends[match];
// }

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
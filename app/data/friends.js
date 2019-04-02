// import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

const friends = [
{
    "name":"Putin",
    "photo":"https://timedotcom.files.wordpress.com/2018/03/gettyimages-932825264.jpg",
    "scores":[5,5,4,4,5,1,2,5,4,5]
  },

  {
  "name":"Pablo Escobar",
  "photo":"https://occ-0-990-987.1.nflxso.net/art/7d2f6/55a178b06eb75d35ba4278fb8bb1eb27b427d2f6.jpg",
  "scores":[5,1,4,4,5,1,2,5,4,4]
},

{
    "name":"Kim Jong Un",
    "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92YVJ_J7W87kf2MJEuD_DdsRPx5y1kcvuKClox7-ZSv1636Ek",
    "scores":[3,1,4,1,5,1,2,5,4,1]
  },

  {
    "name":"Trump",
    "photo":"https://banner2.kisspng.com/20180410/vse/kisspng-donald-trump-funny-face-youtube-dick-avery-face-5acc7bae3545f5.7268986715233504462182.jpg",
    "scores":[1,1,4,4,5,1,2,5,4,2]
  },

  {
    "name":"Ahmed",
    "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSg4k1yBNUGUSiI8FuyHfY9doGsZ2lYU6E7LZIZWP9LLCDs8HE",
    "scores":[2,1,4,4,2,1,2,5,4,2]
  }
]
  
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;

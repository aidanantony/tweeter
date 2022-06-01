/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]
$(document).ready(function(){
  const createTweetElement = function(obj) {
    let $tweet = $("<article>").addClass("tweet")
    let html = `
  <article class="tweetheader">
        <div class="top">
          <span class="top-element">
            <img class="avatar" src=${obj.user.avatars}> 
            ${obj.user.name}
          </span>
          <span>
            ${obj.user.handle}
          </span>
        </div>
        <span class="contents">
          ${obj.content.text}
        </span>
        <footer>
          <span class="lower">
            ${obj.created_at}
            <div>
              <i class="fa-solid fa-flag"></i>
              <i class="fa-solid fa-retweet"></i>
              <i class="fa-solid fa-heart"></i>
              </div>
          </span>
        </footer>
      </article>
      `
      let tweetElement = $tweet.append(html);
      return tweetElement;
  }
const renderTweets = function(tweetData) {
  let tweetsContainer = $(".tweets").html("")
  for(let tweet of tweetData) {
    let tweetElement = createTweetElement(tweet)
    tweetsContainer.prepend(tweetElement)
  }
}

renderTweets(tweetData);
});


// const $tweet = createTweetElement(tweetData);

// console.log($tweet); 
// $('#tweets-container').append($tweet);

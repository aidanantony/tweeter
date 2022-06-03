/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(function() {
  const errorMessage = $(".message");
  errorMessage.hide();
  $("form").on("submit", onSubmit);
  loadTweets();
});

const escaped = function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//The function and the HTML within it that are the framework of the dynamic tweets.
const createTweetElement = function(obj) {
  let $tweet = $("<article>").addClass("tweet");
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
        ${escaped(obj.content.text)}
      </span>
      <footer>
        <span class="lower">
          ${timeago.format(obj.created_at)}
          <div>
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
            </div>
        </span>
      </footer>
    </article>
    `;
  return html;
};

const renderTweets = function(tweetData) {
  let tweetsContainer = $(".tweets").html("");
  for (let tweet of tweetData) {
    let tweetElement = createTweetElement(tweet);
    tweetsContainer.prepend(tweetElement);
  }
};

//GET request for page
const loadTweets = function() {
  $.get("/tweets")
    .then(data => {
      renderTweets(data);
    });
};

const errorDisplay = function(error) {
  const errorMessage = $(".message");
  errorMessage.slideDown().text(error);
};
//onSubmit function moved to its own place. Inclues validation check of tweet length and content
const onSubmit = function(event) {
  event.preventDefault();
  const errorMessage = $(".message");
  errorMessage.hide();
  const data = $(this).serialize();
  let input = $("#tweet-text").val();
  if (input === "") {
    errorDisplay("Error! Tweet input can not be empty! Please try again with content in your tweet!");
    // $(".min-error").slideDown()
  } else if (input.length > 140) {
    errorDisplay("Error! Please submit a tweet under 140 characters!");
    // $(".length-error").slideDown()
  } else {
    $.post("/tweets", data)
      .then(data => {
        loadTweets();
        $(".submission").trigger("reset");
        $(".counter").val(140);
      });
  }
};




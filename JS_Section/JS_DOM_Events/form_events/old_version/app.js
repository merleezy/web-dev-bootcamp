const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
const tweetInput = tweetForm.elements.tweet;
const usernameInput = tweetForm.elements.username;

tweetForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const tweet = tweetInput.value;
  const username = usernameInput.value;
  addTweet(username, tweet);

  tweetInput.value = "";
  usernameInput.value = "";
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");

  bTag.textContent = username;
  newTweet.append(bTag, ' - ', tweet);

  tweetsContainer.append(newTweet);
};

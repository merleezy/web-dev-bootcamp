const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
const tweetInput = tweetForm.elements.tweet;
const usernameInput = tweetForm.elements.username;

// const lis = document.querySelectorAll("li");
// for (let li of lis) {
//   li.addEventListener("click", () => {
//     li.remove();
//   });
// }

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
  newTweet.append(bTag, " - ", tweet);

  tweetsContainer.append(newTweet);
};

tweetsContainer.addEventListener("click", (e) => {
  (e.target.nodeName === "LI" || e.target.nodeName === "B") &&
    e.target.closest("LI").remove();
});

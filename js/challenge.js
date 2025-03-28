let counter = 0;
let interval = setInterval(updateCounter, 1000);

function updateCounter() {
  const counterElement = document.getElementById("counter");
  counter++;
  counterElement.textContent = counter;
}

document.getElementById("plus").addEventListener("click", () => {
  if (!isPaused) {
    counter++;
    document.getElementById("counter").textContent = counter;
  }
});

document.getElementById("minus").addEventListener("click", () => {
  if (!isPaused) {
    counter--;
    document.getElementById("counter").textContent = counter;
  }
});

document.getElementById("heart").addEventListener("click", () => {
  if (!isPaused) {
    const likeList = document.querySelector(".likes");
    let existingLike = document.getElementById(`like-${counter}`);

    if (existingLike) {
      let likeCount = parseInt(existingLike.dataset.count) + 1;
      existingLike.dataset.count = likeCount;
      existingLike.textContent = `${counter} has ${likeCount} like(s)`;
    } else {
      let newLike = document.createElement("li");
      newLike.id = `like-${counter}`;
      newLike.dataset.count = 1;
      newLike.textContent = `${counter} has 1 like(s)`;
      likeList.appendChild(newLike);
    }
  }
});

let isPaused = false;
document.getElementById("pause").addEventListener("click", () => {
  const pauseButton = document.getElementById("pause");
  const buttons = document.querySelectorAll("button:not(#pause), input");

  if (!isPaused) {
    clearInterval(interval);
    pauseButton.textContent = "Resume";
    buttons.forEach(button => button.disabled = true);
  } else {
    interval = setInterval(updateCounter, 1000);
    pauseButton.textContent = "Pause";
    buttons.forEach(button => button.disabled = false);
  }
  isPaused = !isPaused;
});

document.getElementById("comment-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const commentInput = document.getElementById("comment-input");
  const commentList = document.getElementById("list");

  if (commentInput.value.trim() !== "") {
    let newComment = document.createElement("li");
    newComment.textContent = commentInput.value;
    commentList.appendChild(newComment);
    commentInput.value = ""; // Clear input after submission
  }
});

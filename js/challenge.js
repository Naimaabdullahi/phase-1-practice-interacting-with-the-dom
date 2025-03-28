let counter = 0;
let isPaused = false;
let interval = setInterval(incrementCounter, 1000);

function incrementCounter() {
  document.getElementById("counter").textContent = ++counter;
}

document.getElementById("plus").addEventListener("click", () => {
  if (!isPaused) incrementCounter();
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
    const existingLike = document.getElementById(`like-${counter}`);

    if (existingLike) {
      const likeCount = parseInt(existingLike.dataset.count) + 1;
      existingLike.dataset.count = likeCount;
      existingLike.textContent = `${counter} has ${likeCount} like(s)`;
    } else {
      const newLike = document.createElement("li");
      newLike.id = `like-${counter}`;
      newLike.dataset.count = 1;
      newLike.textContent = `${counter} has 1 like(s)`;
      likeList.appendChild(newLike);
    }
  }
});

document.getElementById("pause").addEventListener("click", () => {
  isPaused = !isPaused;
  const pauseButton = document.getElementById("pause");

  if (isPaused) {
    clearInterval(interval);
    pauseButton.textContent = "Resume";
  } else {
    interval = setInterval(incrementCounter, 1000);
    pauseButton.textContent = "Pause";
  }

  document.querySelectorAll("button, input").forEach(button => {
    if (button.id !== "pause") button.disabled = isPaused;
  });
});

document.getElementById("comment-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const commentInput = document.getElementById("comment-input");
  const commentList = document.getElementById("list");

  if (commentInput.value.trim() !== "") {
    const newComment = document.createElement("li");
    newComment.textContent = commentInput.value;
    commentList.appendChild(newComment);
    commentInput.value = "";
  }
});

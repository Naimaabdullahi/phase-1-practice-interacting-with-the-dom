// The code below ensures that students who are using CodeGrade will get credit
// for the code-along in Canvas; you can disregard it.

require("./helpers.js");

describe("", () => {
  describe("", () => {
    it("Test passing", () => {
      return true;
    });
  });
});
const { expect } = require('chai');

describe('Timer and Buttons', () => {

  // Test case for checking if the counter increments every second
  it('should increment the counter every second', () => {
    const initialCounter = document.getElementById('counter').textContent;
    setTimeout(() => {
      const updatedCounter = document.getElementById('counter').textContent;
      expect(parseInt(updatedCounter)).to.be.greaterThan(parseInt(initialCounter));
    }, 1000);
  });

  // Test case for the "Plus" button
  it('should increment the counter when the plus button is clicked', () => {
    const initialCounter = parseInt(document.getElementById('counter').textContent);
    document.getElementById('plus').click();
    const updatedCounter = parseInt(document.getElementById('counter').textContent);
    expect(updatedCounter).to.equal(initialCounter + 1);
  });

  // Test case for the "Minus" button
  it('should decrement the counter when the minus button is clicked', () => {
    const initialCounter = parseInt(document.getElementById('counter').textContent);
    document.getElementById('minus').click();
    const updatedCounter = parseInt(document.getElementById('counter').textContent);
    expect(updatedCounter).to.equal(initialCounter - 1);
  });

  // Test case for the "Like" button
  it('should increase the like count for the current counter value', () => {
    document.getElementById('like').click();
    const likeText = document.getElementById('likes').textContent;
    expect(likeText).to.include("has 1 like(s)");
  });

  // Test case for the "Pause" and "Resume" button
  it('should pause and resume the timer correctly', () => {
    const initialButtonText = document.getElementById('pause').textContent;
    document.getElementById('pause').click(); // Click to pause
    const pausedButtonText = document.getElementById('pause').textContent;
    expect(pausedButtonText).to.equal("Resume"); // Button text should change to Resume
    document.getElementById('pause').click(); // Click to resume
    const resumedButtonText = document.getElementById('pause').textContent;
    expect(resumedButtonText).to.equal("Pause"); // Button text should change back to Pause
  });

  // Test case for submitting a comment
  it('should add a new comment to the list', () => {
    document.getElementById('comment-input').value = "Wow, this game is great!";
    document.getElementById('comment-form').submit();
    const commentItems = document.querySelectorAll('#comment-list li');
    expect(commentItems.length).to.be.greaterThan(0);
    expect(commentItems[commentItems.length - 1].textContent).to.equal("Wow, this game is great!");
  });
});



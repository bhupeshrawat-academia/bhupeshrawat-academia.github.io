function openFeedback() {
  const popup = document.createElement('div');
  popup.className = 'feedback-popup';
  popup.innerHTML = `
    <h3>Feedback</h3>
    <textarea rows="4" cols="30" placeholder="Your feedback..."></textarea><br/>
    <button onclick="submitFeedback()">Submit</button>
    <button onclick="this.parentElement.remove()">Close</button>
  `;
  document.body.appendChild(popup);
}

function submitFeedback() {
  alert("Thank you for your feedback!");
  document.querySelector('.feedback-popup').remove();
}

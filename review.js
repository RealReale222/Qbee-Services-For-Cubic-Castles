// JavaScript to handle review form submission and display reviews
document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  const ratingInput = document.getElementById("rating");
  const form = document.getElementById("review-form");
  const reviewsList = document.getElementById("reviews-list");
  const thankYouMessage = document.getElementById("thank-you-message");

  // Handle star rating
  stars.forEach((star) => {
    star.addEventListener("click", () => {
      const value = star.getAttribute("data-value");
      ratingInput.value = value;

      // Highlight selected stars
      stars.forEach((s, index) => {
        if (index < value) {
          s.classList.add("selected");
        } else {
          s.classList.remove("selected");
        }
      });
    });
  });

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const service = form.service.value;
    const rating = form.rating.value;
    const reviewText = form.review.value;
    const username = form.username.value;

    // Add review to the list
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review");
    reviewElement.innerHTML = `
      <strong>${username} (${service} - ${rating} Stars)</strong>
      <p>${reviewText}</p>
    `;
    reviewsList.appendChild(reviewElement);

    // Reset the form
    form.reset();
    stars.forEach((s) => s.classList.remove("selected"));
    ratingInput.value = 0;

    // Show thank-you message
    thankYouMessage.style.display = "block";
    setTimeout(() => {
      thankYouMessage.style.display = "none";
    }, 3000);
  });
});

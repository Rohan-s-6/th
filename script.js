const upiId = "tharunrn@ybl";
const payeeName = "Tharun R N";

// Attach UPI links dynamically
document.querySelectorAll(".product").forEach((product, index) => {
  const amount = product.querySelector("strong").innerText.trim();
  const button = product.querySelector(".buy-btn");

  // Build UPI link
  const upiLink = upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR;

  // Set href directly
  button.setAttribute("href", upiLink);
  button.setAttribute("target", "_blank");
});

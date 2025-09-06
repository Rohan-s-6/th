// Your UPI details
const upiId = "tharunrn@ybl";     // Your UPI ID
const payeeName = "Tharun R N";   // Your Name

function buyNow(button) {
  const product = button.closest(".product");
  const amount = product.querySelector("strong").innerText.replace(/[^\d.]/g, "");

  // Build UPI payment link
  const upiLink = upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR;

  // Create a hidden <a> and simulate click
  const link = document.createElement("a");
  link.href = upiLink;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

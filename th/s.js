// Your UPI details
const upiId = "tharunrn@ybl";
const payeeName = "Tharun R N";

// Buy Now function
function buyNow(button) {
  const productDiv = button.closest(".product");
  const amount = productDiv.querySelector("strong").innerText.replace(/[^\d.]/g, "").trim();

  // Build UPI link
  const upiLink = upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR;

  // If mobile → open UPI app, else show QR code alert
  if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    window.location.href = upiLink;
  } else {
    alert(Scan this QR from your phone to pay ₹${amount}:\nUPI ID: ${upiId});
  }
}
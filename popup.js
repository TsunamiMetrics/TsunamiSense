
document.addEventListener("DOMContentLoaded", function () {
  const generateBtn = document.getElementById("generateBtn");
  const tokenInput = document.getElementById("tokenInput");

  if (generateBtn && tokenInput) {
    generateBtn.addEventListener("click", () => {
      const token = tokenInput.value;
      localStorage.setItem("selectedToken", token || "0xFAKE...123");
      window.location.href = "stats.html";
    });
  }
});

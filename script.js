
document.querySelectorAll(".option").forEach(btn => {
  btn.onclick = () => {
    // Pehle sab buttons se classes hata do
    document.querySelectorAll(".option").forEach(b => b.classList.remove("correct", "incorrect"));

    // Clicked button ko correct/incorrect lagao
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
    } else {
      btn.classList.add("incorrect");
    }
  };

  // Mouse leave hone par wapas normal kar do
  btn.onmouseleave = () => {
    btn.classList.remove("correct", "incorrect");
  };
});
// Next button logic (simple)
document.querySelector(".next-btn").onclick = () => {
  document.getElementById("q2").style.display = "block"; // Q2 show
  document.querySelector(".next-btn").style.display = "none"; // Button hide
};
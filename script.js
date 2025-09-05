document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted!");
    window.location.href = "index.html";
  });
});

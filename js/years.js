document.addEventListener("DOMContentLoaded", () => {
  const since = 2007;
  const currentYear = new Date().getFullYear();
  const diff = currentYear - since;
  const el = document.getElementById("years-blogging");
  if (el) {
    el.innerHTML = `\\( ${diff} \\) years blogging.`;
    if (window.MathJax) MathJax.typesetPromise();
  }
});
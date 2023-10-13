document.addEventListener("DOMContentLoaded", function () {
  const pythonButton = document.getElementById("pythonButton");
  const htmlButton = document.getElementById("htmlButton");
  const cssButton = document.getElementById("cssButton");
  const githubButton = document.getElementById("githubButton");

  pythonButton.addEventListener("click", function () {
    window.location.href = "python.html";
  });

  htmlButton.addEventListener("click", function () {
    window.location.href = "html.html";
  });

  cssButton.addEventListener("click", function () {
    window.location.href = "css.html";
  });

  githubButton.addEventListener("click", function () {
    window.open("https://github.com/KaleighG", "_blank");
  });
});

export default () => {
  if (document.readyState === "complete") {
    addClassToBody();
  } else {
    document.addEventListener("DOMContentLoaded", addClassToBody);
  }

  function addClassToBody() {
    const body = document.querySelector("body");
    body.classList.add("page-loaded");
  }
};
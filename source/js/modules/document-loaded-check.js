export default () => {
  if (document.readyState === "complete") {
    addClassToBody();
  } else {
    window.onload = addClassToBody;
  }

  function addClassToBody() {
    const body = document.querySelector("body");
    body.classList.add("page-loaded");
  }
};
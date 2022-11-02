const btn = document.querySelector("#button");
btn.addEventListener(('click') => {
  const title = document.querySelector("#input");
  localStorage.setItem("value", title);
});

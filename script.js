import { input } from "./inputLogic.js";

document.addEventListener("keydown", function (event) {
  input(event.key);
});
document.addEventListener("click", function(event) {
  input(event.target.textContent);
})

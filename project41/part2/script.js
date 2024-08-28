const inputs = document.querySelectorAll(".input");

let focusedInputIndex = 0;

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;
    const length = value.length;

    if (length >= 1) {
      focusedInputIndex = index + 1;
      console.log(focusedInputIndex);
      changeFocus();
    }
  });
});

function changeFocus() {
  const input = document.querySelector(`.input-${focusedInputIndex + 1}`);
  input.focus();
}

changeFocus();

window.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    inputs[focusedInputIndex - 1].value = "";
    focusedInputIndex = focusedInputIndex - 1;
    changeFocus();
  }
});

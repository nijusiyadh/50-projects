const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addBtn.addEventListener("click", (e) => addNewNote());

function addNewNote(text = ``) {
  const note = document.createElement("div");

  note.classList.add("note");

  note.innerHTML = ` <div class="tools">
        <button class="edit">
          <i class="fas fa-edit"></i>
        </button>
        <button class="delete">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
      <div class="main ${text ? "" : "hidden"}"></div>
      <textarea name="" id="" class="textarea ${
        text ? "hidden" : ""
      }"></textarea>`;

  document.body.appendChild(note);

  const editBtn = document.querySelector(".edit");
  const deleteBtn = document.querySelector(".delete");
  const main = document.querySelector(".main");
  const textArea = document.querySelector("textarea");

  textArea.value = text;
  main.innerHTML = marked(text);

  deleteBtn.addEventListener("click", (e) => {
    note.remove();
    UpdataLs();
  });

  editBtn.addEventListener("click", (e) => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
    UpdataLs();
  });
}

function UpdataLs() {
  const noteText = document.querySelectorAll("textarea");

  const notes = [];

  noteText.forEach((note) => notes.push(note.value));

  localStorage.setItem("notes", JSON.stringify(notes));
}

let state = {
  bank: [],
  odd: [],
  even: [],
};

function addNumber(num) {
  state.bank.push(num);
  render();
}

function sortOne() {
  if (state.bank.length > 0) {
    let num = state.bank.shift();
    if (num % 2 === 0) {
      state.even.push(num);
    } else {
      state.odd.push(num);
    }
    render();
  }
}

function sortAll() {
  while (state.bank.length > 0) {
    sortOne();
  }
  render();
}

function App() {
  const app = document.createElement("div");

  app.appendChild(Form());
  app.appendChild(Bank());
  app.appendChild(Categories());

  return app;
}

function Form() {
  const form = document.createElement("div");

  const input = document.createElement("input");
  input.type = "number";
  input.id = "numInput";

  const addBtn = document.createElement("button");
  addBtn.textContent = "Add number";
  addBtn.addEventListener("click", () => {
    let value = parseInt(document.getElementById("numInput").value, 10);
    if (!isNaN(value)) {
      addNumber(value);
      document.getElementById("numInput").value = "";
    }
  });

  const sortOneBtn = document.createElement("button");
  sortOneBtn.textContent = "Sort 1";
  sortOneBtn.addEventListener("click", sortOne);

  const sortAllBtn = document.createElement("button");
  sortAllBtn.textContent = "Sort All";
  sortAllBtn.addEventListener("click", sortAll);

  form.appendChild(input);
  form.appendChild(addBtn);
  form.appendChild(sortOneBtn);
  form.appendChild(sortAllBtn);

  return form;
}

function Bank() {
  const bankDiv = document.createElement("div");
  bankDiv.innerHTML = `<h3> Bank</h3><p>${state.bank.join(", ")}</p>`;
  return bankDiv;
}

function Categories() {
  const section = document.createElement("div");

  const oddDiv = document.createElement("div");
  oddDiv.innerHTML = `<h3>Odd</h3><p>${state.odd.join(", ")}</p>`;

  const evenDiv = document.createElement("div");
  evenDiv.innerHTML = `<h3>Evens</h3><p>${state.even.join(", ")}</p>`;

  section.appendChild(oddDiv);
  section.appendChild(evenDiv);

  return section;
}

function render() {
  const root = document.getElementById("app");
  root.innerHTML = "";
  root.appendChild(App());
}

render();

// const input = document.querySelector(".input")
// const plusBtn = document.querySelector(".plus")
// const ul = document.querySelector("ul")
// const li = document.querySelector("li")

// plusBtn.addEventListener("click", () => {
//     const li = document.createElement("li")
//     li.textContent = input.value
//     ul.append(li)
//         localStorage.setItem(`${li.textContent}`, JSON.stringify(li.textContent))
       
       
//         const count = localStorage.getItem(`${li.textContent}`);
//         if (count) {
//           li.innerHTML = count;
//         }
//     })
  

let form = document.querySelector("#form");
let input = document.querySelector("#input");
let ul = document.querySelector("#ul");

let index = JSON.parse(localStorage.getItem("keys"));

if (!index) {
  index = [];
}

const deleteTodo = (e) => {
  e.target.remove();
  let id = +e.target.getAttribute("data-id");
  index = index.filter((todo) => {
    return todo.id !== id;
  });

  localStorage.setItem("keys", JSON.stringify(index));
};

index.forEach((todo) => {
  let id = todo.id;
  let text = todo.text;
  let li = document.createElement("li");
  li.classList.add("l-g-i");
  li.setAttribute("data-id", id);
  li.innerText = text;

  ul.append(li);

  li.addEventListener("dblclick", deleteTodo);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let text = input.value;
  let li = document.createElement("li");
  let id = Math.random();
  li.classList.add("l-g-i");
  li.setAttribute("data-id", id);
  li.innerText = text;

  ul.append(li);

  index.push({ id: id, text: text });

  localStorage.setItem("keys", JSON.stringify(index));

  li.addEventListener("dblclick", deleteTodo);

  e.target.reset();
});

const clear = document.querySelector(".clear")
clear.addEventListener("click", ()=>{
    localStorage.clear()
    ul.innerHTML = ""
    input.value = ""
})
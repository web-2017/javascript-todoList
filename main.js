let li = document.getElementsByTagName("li");
let i;

//Добавляем всем спискам li кнопку удалить
for (i = 0; i < li.length; i++) {
  let span = document.createElement("span");
  let x = document.createTextNode("\u00D7");

  span.className = "close";
  span.appendChild(x);

  li[i].appendChild(span);
}

//event delete
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

//Зачеркивание списка при клике
let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") e.target.classList.toggle("checked");
  },
  false
);

//добавление задания
function addNewElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === "") {
    alert("Поле не может быть пустым");
  } else {
    document.getElementById("myUl").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let x = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(x);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
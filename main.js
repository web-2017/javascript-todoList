var red = "#EA212D";
var grey = "#ccc";

document.getElementById("btnCheckAll").addEventListener("click", getCheckedAll);
document.getElementById("btnRemove").addEventListener("click", removeCheckbox);

// check all elements
function getCheckedAll(e) {
  let ch = document.getElementsByClassName("checkbox");
  if (e.target.checked) {
    for (let i = 0; i < ch.length; i++) {
      ch[i].checked = true;
      ch[i].parentElement.style.background = "#444";
    }
  } else {
    for (let i = 0; i < ch.length; i++) {
      ch[i].checked = false;
      ch[i].parentElement.style.background = "";
    }
  }
}

// remove checked elements
function removeCheckbox() {
  let checkbox = document.getElementsByClassName("checkbox");

  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked == true) {
      checkbox[i].parentElement.style.display = "none";
    }
  }
}

// выборка по select
document.querySelector("#select").addEventListener("change", function(e) {
  let chekbox = document.querySelectorAll("input[type=checkbox]");

  for (let i = 0; i < chekbox.length; i++) {
    chekbox[i].checked =
      chekbox[i].dataset.size == this.options[this.selectedIndex].dataset.size
        ? true
        : false;

    if (
      this.options[this.selectedIndex].dataset.size == chekbox[i].dataset.size
    ) {
      chekbox[i].parentElement.style.background = "#444";
    } else {
      chekbox[i].parentElement.style.background = "";
    }
  }
});

// Смена фона по change
let checkbox = document.getElementsByClassName("checkbox");

for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener("change", function(e) {
    if (e.target.checked) {
      e.target.parentElement.style.background = "#444";
    } else {
      e.target.parentElement.style.background = "";
    }
  });
}

// фиксированный header при onscroll
window.onscroll = function(e) {
  e = window.pageYOffset;
  let y = parseInt(e);

  if (y >= 100) {
    this.document.querySelector(".header").style.position = "fixed";
  } else if (y <= 100) {
    this.document.querySelector(".header").style.position = "relative";
  }
};

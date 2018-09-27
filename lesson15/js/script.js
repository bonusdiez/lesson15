//обозначаем различные переменные
//методы поиска по документу - по id
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
//ниже будем искать элементы по тегу - выдаст в виде коллекции
var ul = document.getElementsByTagName("ul");
//ниже пробуем выцепить класс - будем искать внутри вывденного списка myList
var story = myList.getElementsByClassName("item");
//ниже выделяем класс popup с получением первого элемента
var popup = document.getElementsByClassName("popup")[0];
//метод querySelector - выбираем класс который нужно найти
var close = document.querySelector(".close");

//вывод в консоль - тест - проверка элемента
console.log(btn1);
console.log(btn2);
console.log(main);
console.log(myList);
//выдаст целую коллекцию тегов с одинаковыми id ul
console.log(ul);
//вывести первый элемент коллекции - первый элемент начинается с 0
console.log(ul[0]);
//тестим вывод класса в консоль
console.log(story);
console.log(popup);

//менять стили элемента
//берем переменную main - ранее определена и меняем background
//main.style.background = "green";
//дает возможность налету изменять элементы страницы

//функция добавлени яэлемента - addItem
function addItem() {
//событие
  var newLi = document.createElement("li");
  // createElement создает новый документ на странице
  newLi.innerHTML = "Новая Задача!"; 
  newLi.className = "item";
  myList.appendChild(newLi);
  popup.style.display = "none";
  //в теге ли будет написано - Новая задача
}
//функция удаления яэлемента - delItem
function delItem() {
  myList.removeChild(story[0]);

  if(story.length == 0) {
    popup.style.display = "block";
  }
}

//функция закрытия окошка по значку крестик
function closePopup() {
  popup.style.display = "none";
}

// btn1.onclick = addItem;
// btn1.onclick = delItem;
// в таком случае выпониться только последняя функция

//привязываем событие при помощи: addEventListener
btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);

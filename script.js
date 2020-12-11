let input = document.querySelector('input');
input.addEventListener('click', (event) => {
  event.stopPropagation();
  let inputValue = event.target.value;
  console.log(inputValue);
});
let inputValue = prompt("Введите сумму в долларах");
alert(inputValue + " долларов = " + inputValue * 77 + " рублей");
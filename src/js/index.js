//checkbox размер игрового поля
const checkBox5x2 = document.getElementById('checkbox')
const checkBox5x4 = document.getElementById('checkbox1')

//checkbox кол-во человек играет
const checkBox1 = document.getElementById('checkboxPeople1')
const checkBox2 = document.getElementById('checkboxPeople2')

//input с именами игроков
const inpPlayer1 = document.getElementById('inp-1')
const inpPlayer2 = document.getElementById('inp-2')

function saveStatusCheckBox(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

checkBox5x2.addEventListener('change', () => {
  if (checkBox5x2.checked === true) {
    checkBox5x4.checked = false
    saveStatusCheckBox('GameField', 10);
  }
})
checkBox5x4.addEventListener('change', () => {
  if (checkBox5x4.checked === true) {
    checkBox5x2.checked = false
    saveStatusCheckBox('GameField', 20);

  }
})

checkBox1.addEventListener('change', () => {
  if (checkBox1.checked === true) {
    checkBox2.checked = false
    inpPlayer2.setAttribute('disabled', 'disabled')
    saveStatusCheckBox('GamePeople', 1)
  }
  if (checkBox1.checked === false) {
    checkBox2.checked = true
    inpPlayer2.removeAttribute('disabled', 'disabled')
    saveStatusCheckBox('GamePeople', 2)
  }
})
checkBox2.addEventListener('change', () => {
  if (checkBox2.checked === true) {
    checkBox1.checked = false
    inpPlayer2.removeAttribute('disabled', 'disabled')
    saveStatusCheckBox('GamePeople', 2)
  }
  if (checkBox2.checked === false) {
    checkBox1.checked = true
    inpPlayer2.setAttribute('disabled', 'disabled')
    saveStatusCheckBox('GamePeople', 1)
  }
})

inpPlayer1.addEventListener('input', () => {
  saveStatusCheckBox('Player-1', inpPlayer1.value)
})
inpPlayer2.addEventListener('input', () => {
  saveStatusCheckBox('Player-2', inpPlayer2.value)
})

saveStatusCheckBox('GamePeople', 2);
saveStatusCheckBox('GameField', 20);
saveStatusCheckBox('Player-1', 'Агафья Абликасовна');
saveStatusCheckBox('Player-2', 'Фёдор Дмитриевич');

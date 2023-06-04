import Card from './card.js'

function newGame(container, cardsCount) {

  let imageArray = [
    './src/img/card/alt.webp',
    './src/img/card/dedus.webp',
    './src/img/card/faer.webp',
    './src/img/card/gerda.webp',
    './src/img/card/igrik.webp',
    './src/img/card/masia.webp',
    './src/img/card/nolik.webp',
    './src/img/card/papus.webp',
    './src/img/card/shpula.webp',
    './src/img/card/simka.webp'
  ]

  let cardsImageArray = [];
  let cardsArray = [];
  let firstCard = null;
  let secondCard = null;
  let count = 1;
  const halfLength = Math.ceil(imageArray.length / 2);

  if (cardsCount === 10) {
    for (const img of imageArray) {
      cardsImageArray.push(img, img)
      if (count === halfLength) {
        break;
      }
      count++
    }
  } else {
    for (const img of imageArray) {
      cardsImageArray.push(img, img)
    }
  }

  cardsImageArray = cardsImageArray.sort(() => Math.random() - 0.5)

  for (const cardImage of cardsImageArray) {
    cardsArray.push(new Card(container, cardImage, flip))
  }

  function flip(card) {
    if (firstCard !== null && secondCard !== null) {
      if (firstCard.image.src != secondCard.image.src) {
        firstCard.open = false;
        secondCard.open = false;
        firstCard.image.classList.toggle('hidden');
        secondCard.image.classList.toggle('hidden');
        firstCard = null;
        secondCard = null;
      }
    }

    if (firstCard == null) {
      firstCard = card;
    } else {
      if (secondCard == null) {
        secondCard = card;
      }
    }

    if (firstCard !== null && secondCard !== null) {
      if (firstCard.image.src == secondCard.image.src) {
        firstCard.success = true;
        secondCard.success = true;
        firstCard = null;
        secondCard = null;
      }
    }

    const gameButton = document.getElementById('gameButton');

    function btnOpen() {
      gameButton.classList.add('restart')
    }

    if (document.querySelectorAll('.game__card.success').length == cardsImageArray.length) {
      setTimeout(btnOpen, 1400);
    }

    gameButton.addEventListener('click', function (e) {
      e.preventDefault()
      container.innerHTML = ''
      cardsImageArray = []
      cardsArray = []
      firstCard = null
      secondCard = null
      gameButton.classList.remove('restart')
      newGame(container, cardsCount)
    })
  }
}

const containerGame = document.getElementById('game')
const container = document.querySelector('.game')

const gameFieldData = localStorage.getItem('GameField')
const gameFieldParse = JSON.parse(gameFieldData)

if (gameFieldParse === 10) {
  const gameBlock = document.querySelector('.game__block').style.alignContent = 'normal'
  newGame(containerGame, 10)
} else {
  newGame(containerGame, 20)
}

const gamePlayer1Data = localStorage.getItem('Player-1')
const gamePlayer1Parse = JSON.parse(gamePlayer1Data)
const gamePlayer2Data = localStorage.getItem('Player-2')
const gamePlayer2Parse = JSON.parse(gamePlayer2Data)

const gamePlayerData = localStorage.getItem('GamePeople')
const gamePeopleParse = JSON.parse(gamePlayerData)

if (gamePeopleParse == 2) {
  let blockPlayer = document.createElement('div')
  blockPlayer.classList.add('block-player')
  let titlePlayer = document.createElement('h2')
  titlePlayer.classList.add('title-player')
  titlePlayer.textContent = 'Играют:'
  let listPlayer = document.createElement('ul')
  listPlayer.classList.add('list-player', 'list-reset')
  let namePlayer1 = document.createElement('li')
  let namePlayer2 = document.createElement('li')
  namePlayer1.classList.add('name-player')
  namePlayer2.classList.add('name-player')
  namePlayer1.textContent = gamePlayer1Parse;
  namePlayer2.textContent = gamePlayer2Parse;
  blockPlayer.append(titlePlayer, listPlayer)
  listPlayer.append(namePlayer1, namePlayer2)
  container.append(blockPlayer)
} else {
  let blockPlayer = document.createElement('div')
  blockPlayer.classList.add('block-player')
  let titlePlayer = document.createElement('h2')
  titlePlayer.classList.add('title-player')
  titlePlayer.textContent = 'Играeт:'
  let listPlayer = document.createElement('ul')
  listPlayer.classList.add('list-player', 'list-reset')
  let namePlayer1 = document.createElement('li')
  namePlayer1.classList.add('name-player')
  namePlayer1.textContent = gamePlayer1Parse;
  blockPlayer.append(titlePlayer, listPlayer)
  listPlayer.append(namePlayer1)
  container.append(blockPlayer)
}

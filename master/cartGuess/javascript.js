const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
];

// cardArray.sort(() => 0.5 - Math.random());     another way to shuffle ...
function shuffle(arrey) {
  let currentIndex = arrey.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * arrey.length);
    currentIndex -= 1;
    let temp = arrey[currentIndex];
    arrey[currentIndex] = arrey[randomIndex];
    arrey[randomIndex] = temp;
  }
}
shuffle(cardArray);

const resetBtn = document.querySelector("#resetBtn");
const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];
let card;
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    
    card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}
function checkForMatch() {
  const cards = document.querySelectorAll("img");
  let selectedId1 = cardsChosenId[0];
  let selectedId2 = cardsChosenId[1];

  if (selectedId1 == selectedId2) {
    cards[selectedId1].setAttribute("src", "images/blank.png");
    cards[selectedId2].setAttribute("src", "images/blank.png");
  } else if (cardsChosen[0] === cardsChosen[1]) {
    cards[selectedId1].setAttribute("src", "images/white.png");
    cards[selectedId2].setAttribute("src", "images/white.png");
    cards[selectedId1].removeEventListener("click", flipCard);
    cards[selectedId2].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[selectedId1].setAttribute("src", "images/blank.png");
    cards[selectedId2].setAttribute("src", "images/blank.png");
  }
  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = ` ${6 - cardsWon.length} Cards left !`;
  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations! You found them all!";
  }
}
function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

createBoard();

resetBtn.addEventListener("click", () => {
  location.reload();
});

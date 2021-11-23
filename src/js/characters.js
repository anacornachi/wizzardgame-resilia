const levelNumber = Number(
  window.location.pathname.split("/")[3]?.replace(".html", "")
);
const level = isNaN(levelNumber) ? "pilot" : levelNumber;
const character = window.location.pathname.split("/")[1];

const isGameOver = window.location.pathname.split("/")[2] === "game-over";

if (isGameOver) {
  const music = new Audio("../../src/assets/audio/avada-kedavra.mp3");
  music.play();
}

const quizSnape = [
  {
    level: 1,
    question: "O que você faz?",
    correctAnswer: "1",
    wrongAnswer: {
      2: "cerveja-amanteigada",
      3: "liberar-draco",
    },
  },
  {
    level: 2,
    question: "Qual sua decisão?",
    correctAnswer: "2",
    wrongAnswer: {
      1: "deixar-rolar",
      3: "proteger-dumbledore",
    },
  },
  {
    level: 3,
    question: "Qual sua decisão?",
    correctAnswer: "1",
    wrongAnswer: {
      2: "impossivel-vencer",
      3: "descontar-pontos",
    },
  },
];

const quizHarry = [
  {
    level: 1,
    question:
      "O que você escolhe levar junto com sua varinha? *Selecione pelo número",
    correctAnswer: "2",
    wrongAnswer: {
      1: "capa-da-invisibilidade",
      3: "somente-varinha",
    },
  },
  {
    level: 2,
    question: " Como você fará essa tarefa? *Selecione pelo número",
    correctAnswer: "3",
    wrongAnswer: {
      1: "tubarao",
      2: "cabeca-de-bolha",
    },
  },
  {
    level: 3,
    question: "O que você faz? *Selecione pelo número",
    correctAnswer: "1",
    wrongAnswer: {
      2: "distrair",
      3: "deixar-pra-la",
    },
  },
];

const quizDumbledore = [
  {
    level: 1,
    question: "O que você faz?",
    correctAnswer: "1",
    wrongAnswer: {
      2: "abandonar",
      3: "sacrificar",
    },
  },
  {
    level: 2,
    question: "E agora?",
    correctAnswer: "3",
    wrongAnswer: {
      1: "desistir",
      2: "loucura",
    },
  },
  {
    level: 3,
    question: "Qual o próximo passo?",
    correctAnswer: "2",
    wrongAnswer: {
      1: "fugir",
      3: "lutar",
    },
  },
];

const characters = {
  harry: quizHarry,
  snape: quizSnape,
  dumbledore: quizDumbledore,
};

function startGame() {
  redirectTo(character, "chapter", 1);
}

function loadLevel(level, character) {
  setTimeout(() => {
    let answer = prompt(characters[character][level - 1].question);
    while (!answer) {
      answer = prompt(characters[character][level - 1].question);
    }
    if (answer === characters[character][level - 1].correctAnswer) {
      redirectTo(character, "chapter", level + 1);
    } else {
      const wrongAnswer = characters[character][level - 1].wrongAnswer[answer];
      redirectTo(character, "game-over", wrongAnswer);
    }
  }, 500);
}

let loaded = false;
if (character && level !== "pilot" && !loaded) {
  window.addEventListener("load", () => {
    loaded = true;
    loadLevel(level, character);
  });
}

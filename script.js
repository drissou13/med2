const questions = [
  {
    question: "Quel est le rôle principal d'un médiateur social ?",
    answers: ["Chanteur de rue", "Facilitateur social", "Inspecteur gadget"],
    correct: 1,
    explanation: "Le médiateur social facilite le lien entre citoyens et institutions. 🎯"
  },
  {
    question: "Face à un conflit de voisinage, il fait quoi le médiateur ?",
    answers: ["Il distribue des cookies", "Il tape sur la table", "Il crée le dialogue"],
    correct: 2,
    explanation: "Le dialogue est l'outil magique du médiateur. 🗣️"
  },
  {
    question: "Le médiateur peut-il accompagner dans les démarches CAF ?",
    answers: ["Non, il préfère Netflix", "Oui", "Uniquement le lundi"],
    correct: 1,
    explanation: "Oui, il est là pour aider à comprendre et faire les démarches. 💼"
  },
  {
    question: "Son outil préféré, c’est :",
    answers: ["Le marteau", "L'écoute active", "La boule de cristal"],
    correct: 1,
    explanation: "Pas de magie ici, juste une bonne écoute. 👂"
  },
  {
    question: "Peut-il garder les infos confidentielles ?",
    answers: ["Il balance tout à la radio", "Oui bien sûr", "Uniquement au chat du voisin"],
    correct: 1,
    explanation: "La confidentialité est une règle d'or. 🤐"
  },
  {
    question: "Face à une personne non-francophone, le médiateur...",
    answers: ["Fait des grimaces", "Utilise Google Translate ou un interprète", "S'enfuit en courant"],
    correct: 1,
    explanation: "L'inclusion passe aussi par des outils adaptés. 🌍"
  },
  {
    question: "Il intervient dans :",
    answers: ["Le karaoké local", "Les conflits, démarches, quartiers", "Les matchs de foot"],
    correct: 1,
    explanation: "Il agit là où le lien social est en jeu. 🤝"
  },
  {
    question: "Une maman ne comprend pas un courrier de la mairie. Que fait-il ?",
    answers: ["Il rit", "Il explique et accompagne", "Il fait un TikTok"],
    correct: 1,
    explanation: "Accompagner, c'est sa mission. 📩"
  },
  {
    question: "Son attitude ?",
    answers: ["Neutre et bienveillante", "Furax", "Autoritaire comme un chef d'orchestre"],
    correct: 0,
    explanation: "Il reste toujours neutre, zen, et calme. 🧘"
  },
  {
    question: "Il conclut une médiation par :",
    answers: ["Une danse de la victoire", "Un rapport neutre", "Un combat de sumo"],
    correct: 1,
    explanation: "Un suivi objectif, pas de catch ici. 📄"
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;
  document.getElementById("explanation").innerText = "";
  document.getElementById("feedback").innerText = "";
  document.getElementById("total").innerText = questions.length;

  const answersContainer = document.getElementById("answers");
  answersContainer.innerHTML = "";

  const shuffled = q.answers
    .map((text, index) => ({ text, index }))
    .sort(() => Math.random() - 0.5);

  shuffled.forEach(({ text, index }) => {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.onclick = () => checkAnswer(index);
    answersContainer.appendChild(btn);
  });
}

function checkAnswer(selectedIndex) {
  const q = questions[current];
  const feedback = document.getElementById("feedback");
  const explanation = document.getElementById("explanation");

  if (selectedIndex === q.correct) {
    score++;
    feedback.innerText = "✅ Bonne réponse !";
    feedback.style.color = "green";
  } else {
    feedback.innerText = "❌ Mauvaise réponse.";
    feedback.style.color = "red";
  }

  explanation.innerText = "💡 " + q.explanation;
  document.getElementById("score").innerText = score;

  setTimeout(() => {
    current++;
    if (current < questions.length) {
      loadQuestion();
    } else {
      showFinal();
    }
  }, 3000);
}

function showFinal() {
  document.getElementById("question-container").style.display = "none";
  const msg = document.getElementById("final-message");
  const resetBtn = document.getElementById("reset-btn");
  resetBtn.style.display = "block";

  let appreciation;
  const ratio = score / questions.length;

  if (score === questions.length) {
    appreciation = "🌟 Ah, camarade du quotidien, tu as marché sur le fil de la compréhension sociale avec l’élégance d’un funambule républicain ! Tu n’as pas seulement répondu à des questions… tu as ouvert les fenêtres de la fraternité dans l’immeuble du vivre-ensemble ! – R. Martin (30/10/1943 - 16/10/2023)";
  } else if (score >= questions.length * 0.7) {
    appreciation = "👏 Très bon travail, tu mérites un badge de médiateur pro !";
  } else if (score >= questions.length * 0.4) {
    appreciation = "💡 Ah mon frère, c’est pas mal… C’est pas top top, mais c’est pas catastrophe non plus ! On va dire que tu es un médiateur en CDD, pas encore titulaire hein 😅 Tu connais un peu les règles, mais parfois tu règles avec la chance ! Continue comme ça, et bientôt tu pourras même expliquer la CAF… sans pleurer ! – Saidou Abatcha";
  } else {
    appreciation = "😅 On va dire que t’as confondu avec une émission de télé-réalité... Mais t’inquiète, avec un peu de médiation et beaucoup de café, tout s’apprend !";
  }

  msg.innerHTML = `<h2>Score final : ${score}/${questions.length}</h2><p>${appreciation}</p><p>🔄 Redémarrage dans 20 secondes...</p>`;
  msg.style.display = "block";

  setTimeout(() => {
    resetGame();
  }, 20000);
}

function resetGame() {
  current = 0;
  score = 0;
  document.getElementById("score").innerText = score;
  document.getElementById("final-message").style.display = "none";
  document.getElementById("reset-btn").style.display = "none";
  document.getElementById("question-container").style.display = "block";
  document.getElementById("feedback").innerText = "";
  document.getElementById("explanation").innerText = "";
  loadQuestion();
}

window.onload = loadQuestion;

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

document.getElementById("total").innerText = questions.length;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;
  const buttons = document.querySelectorAll("#answers button");
  buttons.forEach((btn, index) => {
    btn.innerText = q.answers[index];
    btn.disabled = false;
  });
  document.getElementById("feedback").innerText = "";
  document.getElementById("explanation").innerText = "";
}

function checkAnswer(index) {
  const q = questions[current];
  const feedback = document.getElementById("feedback");
  const explanation = document.getElementById("explanation");
  const buttons = document.querySelectorAll("#answers button");

  buttons.forEach(btn => btn.disabled = true);

  if (index === q.correct) {
    score++;
    feedback.innerText = "✅ Bravo médiateur expert !";
  } else {
    feedback.innerText = "❌ Oups, ce n’est pas la bonne réponse...";
  }

  explanation.innerText = q.explanation;
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
  let appreciation;

  if (score === questions.length) {
    appreciation = "🌟 Ah, camarade du quotidien, tu as marché sur le fil de la compréhension sociale avec l’élégance d’un funambule républicain ! Tu n’as pas seulement répondu à des questions… tu as ouvert les fenêtres de la fraternité dans l immeuble du vivre-ensemble !R.Martin 30/10/1943-16/10/2023";
  } else if (score >= questions.length * 0.7) {
    appreciation = "👏 Très bon travail, tu mérites un badge de médiateur pro !";
  } else if (score >= questions.length * 0.4) {
    appreciation = "💡Ah mon frère, c’est pas mal… C’est pas top top, mais c’est pas catastrophe non plus ! On va dire que tu es un médiateur en CDD, pas encore titulaire hein 😅 Tu connais un peu les règles, mais parfois tu règles avec la chance ! Continue comme ça, et bientôt tu pourras même expliquer la CAF… sans pleurer ! Saidou Abatcha " ;
  } else {
    appreciation = "😅 On va dire que t’as confondu avec une émission de télé-réalité...";
  }
document.getElementById("reset-btn").style.display = "block";

// Option : redémarrage automatique après 20 sec
setTimeout(() => {
  resetGame();
}, 20000);

  msg.innerHTML = `<h2>Ton score final : ${score} / ${questions.length}</h2><p>${appreciation}</p>`;
  msg.style.display = "block";
}

window.onload = loadQuestion;

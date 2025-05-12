// Variables du jeu
let score = 0;
let currentSituation = 0;

// Liste des situations et choix
const situations = [
    {
        question: "Un citoyen vient demander de l'aide pour obtenir un logement social. Que faites-vous ?",
        choices: [
            { text: "L'aider à remplir une demande de logement social.", isCorrect: true, explanation: "Aider à remplir une demande de logement est essentiel pour l'accès au logement." },
            { text: "L'envoyer directement dans un autre quartier.", isCorrect: false, explanation: "L'envoi direct sans assistance peut rendre l'accès difficile." },
            { text: "Ignorer sa demande car il n'y a pas de logement disponible.", isCorrect: false, explanation: "Ignorer une demande n'est pas une bonne pratique de médiation sociale." },
        ]
    },
    {
        question: "Un autre citoyen a des questions sur ses droits à l'aide alimentaire. Que faites-vous ?",
        choices: [
            { text: "Lui expliquer les démarches pour accéder à l'aide alimentaire.", isCorrect: true, explanation: "Expliquer les démarches est crucial pour l'accès à l'aide alimentaire." },
            { text: "Lui dire qu'il doit chercher un autre centre.", isCorrect: false, explanation: "C'est important d'informer les citoyens des services disponibles." },
            { text: "Le rediriger vers un autre service sans informations supplémentaires.", isCorrect: false, explanation: "Ne pas fournir d'informations complètes ne résout pas son besoin." },
        ]
    },
    {
        question: "Un citoyen vous demande des informations sur ses droits à la retraite. Que faites-vous ?",
        choices: [
            { text: "Lui fournir des informations sur les démarches pour prendre sa retraite.", isCorrect: true, explanation: "Fournir des informations sur la retraite est essentiel." },
            { text: "Le rediriger vers un autre service sans explication.", isCorrect: false, explanation: "Il est important d'aider directement le citoyen avec des informations concrètes." },
            { text: "Ne pas répondre à la demande.", isCorrect: false, explanation: "Ignorer la demande du citoyen ne résout pas le problème." },
        ]
    },
    {
        question: "Un jeune demande des informations sur l'accès à la formation professionnelle. Que faites-vous ?",
        choices: [
            { text: "L'orienter vers les services de formation professionnelle.", isCorrect: true, explanation: "Orienter le citoyen vers les bons services est une bonne solution." },
            { text: "Ignorer la demande car il est trop jeune.", isCorrect: false, explanation: "Il est important de ne pas juger selon l'âge et de répondre à la demande." },
            { text: "L'envoyer vers un service qui ne correspond pas à ses besoins.", isCorrect: false, explanation: "Rediriger vers un service inapproprié n'est pas utile." },
        ]
    },
   {
        question: "Un citoyen vous demande des informations sur l'accès à une aide pour les personnes handicapées. Que faites-vous ?",
        choices: [
            { text: "L'informer des démarches nécessaires pour obtenir une aide.", isCorrect: true, explanation: "Fournir des informations précises sur les aides disponibles est essentiel." },
            { text: "L'ignorer car il n'a pas de certificat médical.", isCorrect: false, explanation: "Les aides sont accessibles même en attendant certains documents, il faut orienter la personne correctement." },
            { text: "Le rediriger vers un autre service sans détails.", isCorrect: false, explanation: "Un bon médiateur fournit des informations complètes pour éviter toute confusion." },
        ]
    },
    {
        question: "Un citoyen vient vous voir pour avoir des informations sur le chômage. Que faites-vous ?",
        choices: [
            { text: "Lui expliquer comment faire une demande d'allocations chômage.", isCorrect: true, explanation: "Expliquer les démarches d'inscription au chômage est crucial." },
            { text: "Lui dire qu'il faut chercher tout seul.", isCorrect: false, explanation: "L'aider à trouver les informations nécessaires est votre rôle." },
            { text: "Le rediriger vers un autre service sans détails.", isCorrect: false, explanation: "Il faut donner une aide directe et appropriée." },
        ]
    },
    {
        question: "Un citoyen vous demande des informations sur les aides pour les familles avec enfants. Que faites-vous ?",
        choices: [
            { text: "L'orienter vers les services sociaux qui gèrent ces aides.", isCorrect: true, explanation: "Les services sociaux sont spécialisés dans la gestion des aides familiales." },
            { text: "Lui dire qu'il n'y a pas d'aides disponibles.", isCorrect: false, explanation: "Il existe des aides pour les familles, il est important de fournir ces informations." },
            { text: "Ignorer sa demande car vous ne connaissez pas la réponse.", isCorrect: false, explanation: "Même si vous ne savez pas, il est important de rediriger le citoyen vers le bon service." },
        ]
    },
    {
        question: "Un citoyen souhaite savoir comment obtenir un certificat médical pour bénéficier de certains droits. Que faites-vous ?",
        choices: [
            { text: "L'orienter vers un médecin ou un centre de santé.", isCorrect: true, explanation: "Les certificats médicaux doivent être délivrés par des professionnels de santé." },
            { text: "Lui dire de se débrouiller pour en obtenir un.", isCorrect: false, explanation: "Il est important de guider le citoyen vers les bons services." },
            { text: "Lui expliquer que ce n'est pas nécessaire.", isCorrect: false, explanation: "Un certificat médical peut être requis pour certaines démarches, il faut clarifier cela." },
        ]
    },
    {
        question: "Un citoyen souhaite savoir s'il peut obtenir une aide pour financer sa formation professionnelle. Que faites-vous ?",
        choices: [
            { text: "L'informer des aides disponibles pour la formation professionnelle.", isCorrect: true, explanation: "Il existe des aides pour la formation professionnelle, il faut les expliquer." },
            { text: "Lui dire qu'il n'y a aucune aide possible.", isCorrect: false, explanation: "Les aides existent et peuvent être très utiles. Ne jamais ignorer cette possibilité." },
            { text: "L'envoyer vers un autre organisme sans explication.", isCorrect: false, explanation: "Il faut toujours donner une explication complète et guider le citoyen vers le bon organisme." },
        ]
    },
    {
        question: "Un citoyen souhaite obtenir une aide pour ses enfants, mais il n'a pas assez de ressources. Que faites-vous ?",
        choices: [
            { text: "L'aider à remplir une demande d'aide sociale.", isCorrect: true, explanation: "L'aider à faire une demande est crucial pour lui permettre d'accéder à l'aide sociale." },
            { text: "Lui dire qu'il n'y a pas de solution.", isCorrect: false, explanation: "Il existe des aides sociales disponibles, et vous devez l'informer correctement." },
            { text: "L'ignorer et ne pas répondre.", isCorrect: false, explanation: "Ne pas répondre n'est jamais une solution. L'orientation est toujours nécessaire." },
        ]
    },
    // Ajoutez d'autres situations ici jusqu'à atteindre 100 situations.
];

// Fonction pour gérer les choix et mettre à jour le jeu
function makeChoice(choiceIndex) {
    const current = situations[currentSituation];
    const isCorrect = current.choices[choiceIndex].isCorrect;
    const explanation = current.choices[choiceIndex].explanation;

    // Mise à jour du score
    if (isCorrect) {
        score++;
    }

    // Mise à jour de l'interface
    document.getElementById("scoreValue").textContent = score;
    document.getElementById("explanation").textContent = explanation;

    // Passage à la situation suivante ou fin du jeu
    currentSituation++;
    if (currentSituation < situations.length) {
        setTimeout(loadNextSituation, 2000); // Attente avant de charger la prochaine situation
    } else {
        setTimeout(showEndGame, 2000); // Fin du jeu
    }
}

// Fonction pour afficher la prochaine situation
function loadNextSituation() {
    const current = situations[currentSituation];
    document.getElementById("situation").innerHTML = `<p>${current.question}</p>`;
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = ''; // Effacer les anciens boutons

    current.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => makeChoice(index);
        choicesDiv.appendChild(button);
    });
}

// Fonction pour afficher la fin du jeu
function showEndGame() {
    document.getElementById("situation").innerHTML = "<p>Félicitations ! Vous avez terminé le jeu.</p>";
    document.getElementById("choices").innerHTML = "";
    document.getElementById("explanation").innerHTML = `<p>Votre score final est : ${score} bonnes réponses.</p>`;
}

// Fonction de démarrage du jeu
function startGame() {
    document.getElementById("choices").innerHTML = ''; // Supprimer le bouton de départ
    loadNextSituation();
}
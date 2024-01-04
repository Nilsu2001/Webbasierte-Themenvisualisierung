const topics = [
    {
        name: "Anwendungen",
        keywords: [
            "App",
            "Apps",
            "YouTube",
            "Netflix",
            "Account",
            "Anwendung",
            "Anwenungen",
        ],
        questions: [],
    },
    {
        name: "Internet",
        keywords: [
            "Netzwerk",
            "Wlan",
            "Wifi",
            "WiFi",
            "Internet",
            "Netz"
        ],
        questions: [],
    },
    {
        //topic for questions with no keywords
        name: "Allgemein",
        keywords: [],
        questions: [],
    },
    {
        name: "Sicherheit",
        keywords: [
            "Daten",
            "Datei",
            "Unfälle",
            "Passwort",
            "Fußabdruck",
            "Konto",
            "E-Mail",
            "Email",
            "sicher",
            "Kopie",
            "Sicherheit",
            "Identität",
            "gefährlich",
        ],
        questions: [],
    },
    {
        name: "Smartphones",
        keywords: [
            "Nachricht",
            "Handy",
            "Smartphone",
            "Smartphones",
            "Telefon",
            "Sprachnachricht",
        ],
        questions: [],
    },
    {
        name: "Sozial",
        keywords: [
            "Nachbarschaft",
            "Kontakt",
            "sprechen",
            "Menschen",
            "Bürger",
            "Familie",
            "Enkeln",
        ],
        questions: [],
    },
    {
        name: "Gesundheit",
        keywords: [
            "Ernährung",
            "Bewegung",
            "Arzt",
            "bewegen",
            "ernähren",
            "Blut",
            "Demenz",
            "Gesundheit",
            "gesund"
        ],
        questions: [],
    },
];

/* create keywords and questions as objects and
	save the questions to the matching topic into an array */

/** loop to check if questions include keywords
 if true, categorize questions to the matching theme
 if false, save question to "Allgemein" and go to the next question */
function categorizeQuestions(data) {

    //flag to check if a question incluedes a keyword
    var hasTopic = false;

    //iterate through questions, topics and keywords
    data.forEach(function (value) {
        topics.forEach(function (topic) {
            topic.keywords.forEach(function(keyword) {
                //if the question includes a keyword
                if (value.Frage.includes(keyword)) {
                    //if the question isn't already inclueded
                    if(!topic.questions.includes(value)) {
                        //save question in the questions array object
                        topic.questions.push(value);
                        hasTopic = true;
                    }
                }
            });
        });
        /* if the question doesn't include a keyword
        save the question to "Allgemein" */
        if(hasTopic == false) {
            topics[2].questions.push(value);
        }
        hasTopic = false;

    });
}
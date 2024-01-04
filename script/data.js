const jsonData = [
    {
        "Frage": "Wie kann ich mich mit einem drahtlosen Netzwerk verbinden?",
        "Alter": 60,
        "Geschlecht": "m"
    },
    {
        "Frage": "Ist die Zukunft der Zeitung digital?",
        "Alter": 70,
        "Geschlecht": "w"
    },
    {
        "Frage": "Warum funktioniert mein Wlan nicht überall?",
        "Alter": 80,
        "Geschlecht": "d"
    },
    {
        "Frage": "Wie kann ich das Internet meines Handys mit dem Tablet nutzen?",
        "Alter": 90,
        "Geschlecht": "m"
    },
    {
        "Frage": "Was ist eine App?",
        "Alter": 100,
        "Geschlecht": "w"
    },
    {
        "Frage": "Wie schnell muss mein Internet sein um flüssig Videos schauen zu können?",
        "Alter": 60,
        "Geschlecht": "d"
    },
    {
        "Frage": "Ist es möglich eine gesendete Nachricht wieder zu löschen?",
        "Alter": 70,
        "Geschlecht": "m"
    },
    {
        "Frage": "Wie gut funktioniert online Nachbarschaftshilfe?",
        "Alter": 80,
        "Geschlecht": "w"
    },
    {
        "Frage": "Wie treffe ich die Auswahl für ein gutes Handy oder einen Tarif?",
        "Alter": 90,
        "Geschlecht": "d"
    },
    {
        "Frage": "Kann jemand zu mir nach Hause kommen und bei der Einrichtung zu Hause helfen?",
        "Alter": 100,
        "Geschlecht": "m"
    },
    {
        "Frage": "Wo finde ich einen Ansprechpartner für technische Hilfe?",
        "Alter": 60,
        "Geschlecht": "w"
    },
    {
        "Frage": "Benötige ich einen Premiumaccount in Youtube?",
        "Alter": 70,
        "Geschlecht": "d"
    },
    {
        "Frage": "Das WiFi funktioniert nicht automatsch, was muss ich tun?",
        "Alter": 80,
        "Geschlecht": "m"
    },
    {
        "Frage": "Wie kann mich Technologie dabei unterstützen nicht mehr persönlich zum Arzt zu gehen?",
        "Alter": 90,
        "Geschlecht": "w"
    },
    {
        "Frage": "Kann SmartHome Unfällen zu Hause vorbeugen?",
        "Alter": 100,
        "Geschlecht": "d"
    },
    {
        "Frage": "Wie kann ich durch Technologie bessere Hilfe bekommen?",
        "Alter": 62,
        "Geschlecht": "m"
    },
    {
        "Frage": "Wie kann ich mit meinen Enkeln in Berlin in Kontakt treten?",
        "Alter": 64,
        "Geschlecht": "w"
    },
    {
        "Frage": "Kann ich online Preise vergleichen, anstatt von Geschäft zu Geschäft zu laufen?",
        "Alter": 66,
        "Geschlecht": "d"
    },
    {
        "Frage": "Wie ändere ich mein Passwort? Was ist ein starkes Passwort?",
        "Alter": 68,
        "Geschlecht": "m"
    },
    {
        "Frage": "Kann Technologie mir helfen, mich mehr zu bewegen / besser zu ernähren?",
        "Alter": 70,
        "Geschlecht": "w"
    },
    {
        "Frage": "Was ist ein digitaler Fußabdruck?",
        "Alter": 72,
        "Geschlecht": "d"
    },
    {
        "Frage": "Kann jemand Fremdes auf mein Konto online zugreifen?",
        "Alter": 74,
        "Geschlecht": "m"
    },
    {
        "Frage": "Ich fühle mich nicht gut, kann ich online mit jemandem darüber sprechen?",
        "Alter": 76,
        "Geschlecht": "w"
    },
    {
        "Frage": "Können Smartphones Gespräche mithören? Was passiert dann?",
        "Alter": 78,
        "Geschlecht": "d"
    },
    {
        "Frage": "Kann ich im Internet neue Menschen kennen lernen?",
        "Alter": 80,
        "Geschlecht": "m"
    },
    {
        "Frage": "Gibt es digitale Musikdatenbanken?",
        "Alter": 82,
        "Geschlecht": "w"
    },
    {
        "Frage": "Wie kann ich mein Handy schneller machen?",
        "Alter": 84,
        "Geschlecht": "d"
    },
    {
        "Frage": "Wie kann ich durch Technologie bessere Hilfe bekommen?",
        "Alter": 86,
        "Geschlecht": "m"
    },
    {
        "Frage": "Wie kann ich mit meinen Enkeln in Berlin in Kontakt treten?",
        "Alter": 88,
        "Geschlecht": "w"
    },
    {
        "Frage": "Kann ich über das Internet zusammen mit einer Familie aus der Distanz fernsehen?",
        "Alter": 90,
        "Geschlecht": "d"
    },
    {
        "Frage": "Woher weiß ich, dass eine E-Mail, die ich bekommen habe, schädlich für mich ist?",
        "Alter": 92,
        "Geschlecht": "m"
    },
    {
        "Frage": "Kann SmartHome Unfällen zu Hause vorbeugen?",
        "Alter": 94,
        "Geschlecht": "w"
    },
    {
        "Frage": "Kann mir etwas Digitales bei meiner Demenz helfen oder mir das Leben einfacher machen?",
        "Alter": 96,
        "Geschlecht": "d"
    },
    {
        "Frage": "Wie kann ich mich im Internet schützen? / Sammlung der Daten ausstellen?",
        "Alter": 98,
        "Geschlecht": "m"
    },
    {
        "Frage": "Kann ich meine Nähmaschine im Internet reparieren lassen?",
        "Alter": 100,
        "Geschlecht": "w"
    },
    {
        "Frage": "Ich habe ein neues Handy und möchte die Daten von meinem alten Handy übertragen, wie?",
        "Alter": 102,
        "Geschlecht": "d"
    },
    {
        "Frage": "Wie kann mich Technologie dabei unterstützen nicht mehr persönlich zum Arzt zu gehen?",
        "Alter": 61,
        "Geschlecht": "m"
    },
    {
        "Frage": "Kann mir ein Gerät helfen meinen Blutzuckerspiegel zu messen und zu dokumentieren?",
        "Alter": 63,
        "Geschlecht": "w"
    },
    {
        "Frage": "Wie finde ich im Internet jemanden, der mit mir in Museen geht?",
        "Alter": 65,
        "Geschlecht": "d"
    },
    {
        "Frage": "Was können die Leute mit meinen Daten machen?",
        "Alter": 67,
        "Geschlecht": "m"
    },
    {
        "Frage": "Was ist der Unterschied zwischen einem Handy und einem Tastentelefon?",
        "Alter": 69,
        "Geschlecht": "w"
    },
    {
        "Frage": "Warum ist eine eigene Email-Adresse so wichtig?",
        "Alter": 71,
        "Geschlecht": "d"
    },
    {
        "Frage": "Gibt es Software um eine Sicherungskopie meines Handy zu erstellen?",
        "Alter": 73,
        "Geschlecht": "m"
    },
    {
        "Frage": "Wie hilft mir mein Handy meine Sprachkenntnisse in Englisch zu verbessern?",
        "Alter": 75,
        "Geschlecht": "w"
    },
    {
        "Frage": "Wie funktioniert der Kalender im Handy? Sieht die andere Person den Termin auch?",
        "Alter": 77,
        "Geschlecht": "d"
    },
    {
        "Frage": "Wie gefährlich ist Onlinebanking?",
        "Alter": 79,
        "Geschlecht": "m"
    },
    {
        "Frage": "Was ist meine digitale Identität?",
        "Alter": 81,
        "Geschlecht": "w"
    },
    {
        "Frage": "Kann ich mithilfe einer App sehen, wie die Sterne heißen, die am Himmel sind?",
        "Alter": 83,
        "Geschlecht": "d"
    },
    {
        "Frage": "Wo werden meine Bilder,Daten überall gespeichert?",
        "Alter": 85,
        "Geschlecht": "m"
    },
    {
        "Frage": "Ich möchte meinen Blutdruck aus der Ferne von einem Arzt überwachen lassen, geht das übers Internet?",
        "Alter": 87,
        "Geschlecht": "w"
    },
    {
        "Frage": "Was ist dieses Netflix?",
        "Alter": 89,
        "Geschlecht": "d"
    },
    {
        "Frage": "Kann ich Konzertkarten auch im Internet kaufen?",
        "Alter": 91,
        "Geschlecht": "m"
    },
    {
        "Frage": "Ich möchte Töpfern lernen, gibt es hierzu auch online Kurse?",
        "Alter": 93,
        "Geschlecht": "w"
    },
    {
        "Frage": "Kann ich meine Nachbarschaft digital kennenlernen?",
        "Alter": 95,
        "Geschlecht": "d"
    },
    {
        "Frage": "Gibt es die Möglichkeit Bilder vom Handy zu drucken, wie?",
        "Alter": 97,
        "Geschlecht": "m"
    },
    {
        "Frage": "Wie kann ich Sprachnachrichten erstellen und meiner Familie zusenden?",
        "Alter": 99,
        "Geschlecht": "w"
    },
    {
        "Frage": "Wie funktioniert digitale Bürgerbeteiligung?",
        "Alter": 101,
        "Geschlecht": "d"
    },
    {
        "Frage": "Wie kann ich ein digitales Fotoalbum erstellen?",
        "Alter": 59,
        "Geschlecht": "m"
    },
    {
        "Frage": "Was ist HTML?",
        "Alter": 59,
        "Geschlecht": "m"
    }
]
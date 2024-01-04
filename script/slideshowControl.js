/** open slideshows by clicking on rectangles */
function openSmartphones() {

    var chart = document.getElementById('rects');
    chart.style.display = 'none';

    var smartphoneContainer = document.getElementById('Smartphones-container');
    smartphoneContainer.classList.add('show');
};

function openInternet() {

    var chart = document.getElementById('rects');
    chart.style.display = 'none';

    var internetContainer = document.getElementById('Internet-container');
    internetContainer.classList.add('show');
};

function openSicherheit() {

    var chart = document.getElementById('rects');
    chart.style.display = 'none';

    var sicherheitContainer = document.getElementById('Sicherheit-container');
    sicherheitContainer.classList.add('show');
};

function openGesundheit() {

    var chart = document.getElementById('rects');
    chart.style.display = 'none';

    var gesundheitContainer = document.getElementById('Gesundheit-container');
    gesundheitContainer.classList.add('show');
};

function openSozial() {

    var chart = document.getElementById('rects');
    chart.style.display = 'none';

    var sozialContainer = document.getElementById('Sozial-container');
    sozialContainer.classList.add('show');
};

function openAllgemein() {

    var chart = document.getElementById('rects');
    chart.style.display = 'none';

    var allgemeinContainer = document.getElementById('Allgemein-container');
    allgemeinContainer.classList.add('show');
};

function openAnwendungen() {

    var chart = document.getElementById('rects');
    chart.style.display = 'none';

    var anwendungenContainer = document.getElementById('Anwendungen-container');
    anwendungenContainer.classList.add('show');
};

/** close slideshows with the button*/
function closeSlideshows() {

    var smartphoneContainer = document.getElementById('Smartphones-container');
    var internetContainer = document.getElementById('Internet-container');
    var sicherheitContainer = document.getElementById('Sicherheit-container');
    var gesundheitContainer = document.getElementById('Gesundheit-container');
    var sozialContainer = document.getElementById('Sozial-container');
    var allgemeinContainer = document.getElementById('Allgemein-container');
    var anwendungenContainer = document.getElementById('Anwendungen-container');

    smartphoneContainer.classList.remove('show');
    internetContainer.classList.remove('show');
    sicherheitContainer.classList.remove('show');
    gesundheitContainer.classList.remove('show');
    sozialContainer.classList.remove('show');
    allgemeinContainer.classList.remove('show');
    anwendungenContainer.classList.remove('show');

    var chart = document.getElementById('rects');
    chart.style.display = 'block';
};
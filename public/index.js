

const opinions = [
    "Tutaj są opinie twoich klientów, niezbyt długie też. Byle by mieściły się w ten prostokąt. Te strzałki służą temu by je przewijać",   
    "Lena to prawdziwa artystka! Jej zdolność do uchwycenia emocji i naturalnych chwil na zdjęciach jest niesamowita. Zdjęcia są przepiękne, a współpraca była pełna profesjonalizmu. Zdecydowanie polecam!",
    "Współpraca z Leną była czystą przyjemnością! Jej kreatywność, pasja i zaangażowanie w każdy detal sprawiły, że nasze zdjęcia są wyjątkowe. Jest bardzo cierpliwa i ma świetne podejście do klienta. Polecam z całego serca!",
    "Lena ma niesamowity talent do robienia zdjęć, które opowiadają historie. Dzięki niej mamy piękne wspomnienia w formie zdjęć, które będą nam towarzyszyć przez lata. Dziękujemy za profesjonalizm i ciepłą atmosferę podczas sesji!",
    "Zachwyciła nas praca Leny! Jej oko do detali i umiejętność tworzenia magicznych kadrów sprawiły, że efekt końcowy przeszedł nasze najśmielsze oczekiwania. Gorąco polecam wszystkim szukającym fotografa z pasją!",
];

let currentOpinionIndex = 0;

$(".opinion-swipe-left").click(function() {
    console.log("Kliknięto lewo");
    $("#opinion-text").removeClass("fade-in").addClass("fade-out"); // Znikanie opinii
    setTimeout(function() {
        if (currentOpinionIndex > 0) {
            currentOpinionIndex--;
        } else {
            currentOpinionIndex = opinions.length - 1;
        }
        $("#opinion-text").text(opinions[currentOpinionIndex]);
        $("#opinion-text").removeClass("fade-out").addClass("fade-in"); 
    }, 500); 
});

$(".opinion-swipe-right").click(function() {
    console.log("Kliknięto prawo");
    $("#opinion-text").removeClass("fade-in").addClass("fade-out");
    setTimeout(function() {
        if (currentOpinionIndex < opinions.length - 1) {
            currentOpinionIndex++;
        } else {
            currentOpinionIndex = 0;
        }
        $("#opinion-text").text(opinions[currentOpinionIndex]);
        $("#opinion-text").removeClass("fade-out").addClass("fade-in");
    }, 500);
});


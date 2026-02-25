const morse = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    
    " ": "/",
};
async function start() {

    let wort = document.getElementById("eingabe").value;
    wort = wort.toUpperCase();

    let morseText = "";

    for (let i = 0; i < wort.length; i++) {
        let buchstabe = wort[i];

        if (morse[buchstabe]) {
            morseText += morse[buchstabe] + " ";
        }
    }

    // 🔲 Hier wird der Morse-Text in die Box geschrieben
    document.getElementById("morseBox").textContent = morseText;

    // 💡 Hier blinkt weiterhin der Hintergrund
    for (let zeichen of morseText) {

        if (zeichen === ".") {
            blink(200);
            await sleep(200);
        }

        if (zeichen === "-") {
            blink(600);
            await sleep(600);
        }

        if (zeichen === "/") {
            await sleep(800);
        }

        await sleep(200);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function blink(dauer) {
    document.body.style.backgroundColor = "white";

    setTimeout(() => {
        document.body.style.backgroundColor = "black";
    }, dauer);
}
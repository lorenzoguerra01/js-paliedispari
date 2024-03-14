// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let elBtnPali = document.getElementById("btn-pali");

elBtnPali.addEventListener("click", function () {
    let word;
    do {
        word = prompt("Inserire una parola");
    } while (!isNaN(word))
    if (isPalindrome(word)) {
        reply.innerHTML = "La parola inserita è palindroma";
        reply.className = "text-success";
    } else {
        reply.innerHTML = "La parola inserita non è palindroma";
        reply.className = "text-danger";
    }
})
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let elBtnEvenOdd = document.getElementById("btn-even-odd");

elBtnEvenOdd.addEventListener("click", function () {
    let bet;
    let num;
    do {
        bet = prompt("Prova a indovinare, inserisci se il numero sarà pari o dispari!");
    } while (!isNaN(bet))
    do {
        num = parseInt(prompt("Inserisci il tuo numero compreso tra 1 e 5 da sommare ad un numero generato casualmente"));
    } while (isNaN(num) || !isNumberInRange(num, 1, 5))
    let cpuNum = getRndInteger(1, 5);
    console.log(num);
    console.log(cpuNum);
    sum = num + cpuNum;
    console.log(sum);
    if (isEven(sum) === bet) {
        reply.innerHTML = ` Hai vinto! (Somma dei numeri = ${sum}, avevi selezionato ${bet})` 
        reply.className = "text-success"
        console.log(sum);
    } else {
        reply.innerHTML = ` Hai perso :( (Somma dei numeri = ${sum}, avevi selezionato ${bet})` 
        reply.className = ` text-danger`
        console.log(sum);
    }
    console.log(sum);
})
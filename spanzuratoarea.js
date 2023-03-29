let word;
let numberOfLetters;
let sendToHtml = new Array(numberOfLetters)
function save() {
   const theText = document.getElementById('wordInput').value
   numberOfLetters = theText.length
   word = theText
   for (let i = 0; i < numberOfLetters; ++i) {
      sendToHtml[i] = ' _'
      document.getElementById('secondOutput').innerHTML += sendToHtml[i]
   }
   document.getElementById('wordInput').value = ''
   document.getElementById("Button").disabled = true;
   document.getElementById("secondButton").disabled = false;
}

let wrong = 1
let winner = 0;
function letterProcessing() {
   document.getElementById('secondOutput').innerHTML = ''
   const letterAsString = document.getElementById('letterInput').value
   let wrongCounter = 1;
   if (letterAsString != '') {
      for (let j = 0; j < numberOfLetters; ++j) {
         if (word.charAt(j) != letterAsString.charAt(0) && sendToHtml[j] == undefined) {
            sendToHtml[j] = ' _'
         } else if ((sendToHtml[j] == undefined || sendToHtml[j] == ' _') &&
            word.charAt(j) == letterAsString.charAt(0)) {
            sendToHtml[j] = ' ' + word.charAt(j)
            ++winner
            ++wrongCounter
         }
      }
      if (wrongCounter == 1) {
         ++wrong
         if (wrong < 12) {
            document.getElementById('imagine').src = "spanzuratoarea" + wrong + ".jpg"
         } else if (wrong == 12) {
            document.getElementById('imagine').src = "spanzuratoarea12.jpg"
            document.getElementById('secondOutput').innerHTML = word
            numberOfLetters = -1
            document.getElementById('output').innerHTML = "Ai pierdut, cuvantul era-"
            document.getElementById("secondButton").disabled = true;
         }
      }
   }
   if (numberOfLetters == winner) {
      document.getElementById('imagine').src = "castigator.jpg"
      document.getElementById("secondButton").disabled = true;
   }
   for (let y = 0; y < numberOfLetters; ++y) {
      document.getElementById('secondOutput').innerHTML += sendToHtml[y]
   }
   document.getElementById('letterInput').value = ''
}

function restart() {
   document.getElementById("Button").disabled = false;
   document.getElementById("secondButton").disabled = false;
   document.getElementById('output').innerHTML = ""
   document.getElementById('secondOutput').innerHTML = ""
   document.getElementById('imagine').src = "spanzuratoarea1.jpg"
   wrong = 1;
   document.getElementById("secondButton").disabled = true;
   winner = 0
}



let word;
let numberOfLetters;
let sendToHtml = new Array(numberOfLetters)

function salveaza() {
   const theText = document.getElementById('input1')
   const valueOfText = new String(theText.value)
   let lenghtOfText = valueOfText.length
   numberOfLetters = lenghtOfText
   word = valueOfText
   let i = 0
   while (lenghtOfText > 0) {
      sendToHtml[i] = ' _'
      --lenghtOfText;
      ++i
   }
   for (let y = 0; y < numberOfLetters; ++y) {
      document.getElementById('secondOutput').innerHTML += sendToHtml[y]
   }
   console.log(valueOfText)
   console.log(lenghtOfText)
   theText.value = ''
   document.getElementById("Button").disabled = true;
   document.getElementById("secondButton").disabled = false;


}

let wrong = 1
let winner = 0;

function compara() {
   document.getElementById('secondOutput').innerHTML = ''
   const letterImput = document.getElementById('input2')
   const letterAsString = letterImput.value
   let numberOfLettersCopy = numberOfLetters
   let j = 0;
   let wrongCounter = 1;
   if (letterImput.value != '') {
      while (numberOfLettersCopy > 0) {
         if (word.charAt(j) != letterAsString.charAt(0) && sendToHtml[j] == undefined) {
            sendToHtml[j] = ' _'

         } else if ((sendToHtml[j] == undefined || sendToHtml[j] == ' _') &&
            word.charAt(j) == letterAsString.charAt(0)) {
            sendToHtml[j] = ' ' + word.charAt(j)
            ++winner
            ++wrongCounter
         }
         ++j
         --numberOfLettersCopy
      }
      
      if (wrongCounter == 1) {
         ++wrong
         console.log(wrong)
         if (wrong < 12) {
            document.getElementById('imagine').src = "spanzuratoarea"+wrong+".jpg"
         }  else if (wrong == 12) {
            document.getElementById('imagine').src = "spanzuratoarea12.jpg"
            document.getElementById('secondOutput').innerHTML = word
            numberOfLetters = -1
            document.getElementById('output').innerHTML = "Ai pierdut \n Cuvantul era-"
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
   letterImput.value = ''
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

